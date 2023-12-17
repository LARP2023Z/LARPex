package pl.larp.larpex.pfsi.pay.domain.port;

import java.util.UUID;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentMap;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import pl.larp.larpex.pfsi.pay.domain.model.ConfirmPaymentCommand;
import pl.larp.larpex.pfsi.pay.domain.model.ConfirmResponse;
import pl.larp.larpex.pfsi.pay.domain.model.InitializePaymentExternalSystemCommand;
import pl.larp.larpex.pfsi.pay.domain.model.InitializePaymentExternalSystemResponse;
import pl.larp.larpex.pfsi.payment.domain.model.PaymentMethod;

@RequiredArgsConstructor
@Service
@Slf4j
class MockedPaymentSystem implements IPay {

  private final ConcurrentMap<String, Outcome> paymentResults =
    new ConcurrentHashMap<>();

  @Override
  public InitializePaymentExternalSystemResponse initializePayment(
    InitializePaymentExternalSystemCommand command
  ) {
    // Mock failure or success
    final var key = toExternalKey(command.eventId(), command.userId());
    if (command.method() == PaymentMethod.BLIK) {
      log
        .atInfo()
        .addKeyValue("command", command)
        .log("BLIK payment - mocking success!");
      paymentResults.put(key, Outcome.SUCCESS);
    } else {
      log
        .atInfo()
        .addKeyValue("command", command)
        .log("Card payment - mocking failure!");
      paymentResults.put(key, Outcome.FAILURE);
    }

    return new InitializePaymentExternalSystemResponse(
      command.method().getRedirectionUrlBase()
    );
  }

  @Override
  public ConfirmResponse confirmPayment(ConfirmPaymentCommand command) {
    return paymentResults
      .getOrDefault(
        toExternalKey(command.eventId(), command.userId()),
        Outcome.FAILURE
      )
      .getResponse();
  }

  private String toExternalKey(UUID eventId, UUID userId) {
    return eventId + ":" + userId;
  }

  @RequiredArgsConstructor
  @Getter
  private enum Outcome {
    SUCCESS(new ConfirmResponse(true)),
    FAILURE(new ConfirmResponse(false));

    private final ConfirmResponse response;
  }
}
