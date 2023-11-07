package pl.larp.larpex.pfsi.payment.adapter.api;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.larp.larpex.pfsi.payment.domain.model.ConfirmPaymentCommand;
import pl.larp.larpex.pfsi.payment.domain.model.ConfirmPaymentResponse;
import pl.larp.larpex.pfsi.payment.domain.model.InitializePaymentCommand;
import pl.larp.larpex.pfsi.payment.domain.model.InitializePaymentResponse;
import pl.larp.larpex.pfsi.payment.domain.port.IPayments;

@RestController
@RequiredArgsConstructor
class PaymentsController {

  private final IPayments iPayments;

  @GetMapping(value = "/payments", produces = "application/json")
  @Operation(summary = "Confirm payment")
  @Tag(name = "IPayments")
  public ConfirmPaymentResponse getConfirm(ConfirmPaymentCommand command) {
    return iPayments.confirm(command);
  }

  @PostMapping(value = "/payments", produces = "application/json")
  @Operation(summary = "Initialize payment")
  @Tag(name = "IPayments")
  public InitializePaymentResponse postConfirm(
    InitializePaymentCommand command
  ) {
    return iPayments.initializePayment(command);
  }
}
