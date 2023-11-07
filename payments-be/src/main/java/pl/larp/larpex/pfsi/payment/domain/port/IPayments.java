package pl.larp.larpex.pfsi.payment.domain.port;

import pl.larp.larpex.pfsi.payment.domain.model.ConfirmPaymentCommand;
import pl.larp.larpex.pfsi.payment.domain.model.ConfirmPaymentResponse;
import pl.larp.larpex.pfsi.payment.domain.model.InitializePaymentCommand;
import pl.larp.larpex.pfsi.payment.domain.model.InitializePaymentResponse;

public interface IPayments {
  ConfirmPaymentResponse confirm(ConfirmPaymentCommand command);
  InitializePaymentResponse initializePayment(InitializePaymentCommand command);
}
