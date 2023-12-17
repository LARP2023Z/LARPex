package pl.larp.larpex.pfsi.payment.domain.port;

import java.time.LocalDateTime;
import java.util.UUID;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import pl.larp.larpex.pfsi.fiscal.domain.port.IRegisterPayment;
import pl.larp.larpex.pfsi.pay.domain.model.InitializePaymentExternalSystemCommand;
import pl.larp.larpex.pfsi.pay.domain.port.IPay;
import pl.larp.larpex.pfsi.payment.domain.model.ConfirmPaymentCommand;
import pl.larp.larpex.pfsi.payment.domain.model.ConfirmPaymentResponse;
import pl.larp.larpex.pfsi.payment.domain.model.InitializePaymentCommand;
import pl.larp.larpex.pfsi.payment.domain.model.InitializePaymentResponse;
import pl.larp.larpex.pfsi.payment.domain.model.Payment;

@Service
@Slf4j
@RequiredArgsConstructor
class PaymentsService implements IPayments {

  private final IPaymentsRepository iPaymentsRepository;

  private final IPay iPay;

  private final IRegisterPayment iRegisterPayment;

  @Override
  @Transactional(readOnly = true)
  public ConfirmPaymentResponse confirm(ConfirmPaymentCommand command) {
    final var payment = iPaymentsRepository.findBy(
      command.eventId(),
      command.userId()
    );
    if (payment.isEmpty()) {
      log.atInfo().addKeyValue("command", command).log("Payment not found");
      return PaymentConfirmationResponses.FAILURE.getResponse();
    }

    if (!payment.get().getResult().equals("PENDING")) {
      log
        .atInfo()
        .addKeyValue("payment", payment.get())
        .log("Payment is not pending");
      return PaymentConfirmationResponses.SUCCESS.getResponse();
    }

    final boolean isPaymentConfirmed = iPay
      .confirmPayment(
        new pl.larp.larpex.pfsi.pay.domain.model.ConfirmPaymentCommand(
          command.eventId(),
          command.userId()
        )
      )
      .exists();
    if (!isPaymentConfirmed) {
      log
        .atInfo()
        .addKeyValue("command", command)
        .log("Payment not confirmed in external system");
      return PaymentConfirmationResponses.FAILURE.getResponse();
    }

    log
      .atInfo()
      .addKeyValue("payment", payment.get())
      .log("Payment confirmed in external system");
    final var paymentToConfirm = payment.get();
    paymentToConfirm.setResult("CONFIRMED");
    iPaymentsRepository.save(paymentToConfirm);

    final var registered = iRegisterPayment.register(
      new pl.larp.larpex.pfsi.fiscal.domain.model.RegisterPaymentCommand(
        paymentToConfirm.getAmount(),
        paymentToConfirm.getPaymentDate(),
        paymentToConfirm.getEventId().toString(), // Mocked event name
        paymentToConfirm.getId()
      )
    );
    log
      .atInfo()
      .addKeyValue("registered", registered)
      .log("Payment registered");

    return PaymentConfirmationResponses.SUCCESS.getResponse();
  }

  @Override
  public InitializePaymentResponse initializePayment(
    InitializePaymentCommand command
  ) {
    final var payment = createPendingPayment(command);
    iPaymentsRepository.save(payment);

    log.atInfo().addKeyValue("payment", payment).log("Payment saved in DB");

    final var response = iPay.initializePayment(
      new InitializePaymentExternalSystemCommand(
        command.amount(),
        command.paymentMethod(),
        command.eventId(),
        command.userId()
      )
    );
    log
      .atInfo()
      .addKeyValue("response", response)
      .log("Payment initialized in external system");

    return new InitializePaymentResponse(response.redirectUri());
  }

  private static Payment createPendingPayment(
    InitializePaymentCommand command
  ) {
    return Payment
      .builder()
      .id(UUID.randomUUID())
      .amount(command.amount())
      .userId(command.userId())
      .eventId(command.eventId())
      .paymentDate(LocalDateTime.now())
      .method(command.paymentMethod().name())
      .result("PENDING")
      .build();
  }

  @Getter
  @RequiredArgsConstructor
  private enum PaymentConfirmationResponses {
    SUCCESS(new ConfirmPaymentResponse(true)),
    FAILURE(new ConfirmPaymentResponse(false));

    private final ConfirmPaymentResponse response;
  }
}
