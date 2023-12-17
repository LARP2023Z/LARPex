package pl.larp.larpex.pfsi.pay.domain.port;

import pl.larp.larpex.pfsi.pay.domain.model.ConfirmPaymentCommand;
import pl.larp.larpex.pfsi.pay.domain.model.ConfirmResponse;
import pl.larp.larpex.pfsi.pay.domain.model.InitializePaymentExternalSystemCommand;
import pl.larp.larpex.pfsi.pay.domain.model.InitializePaymentExternalSystemResponse;

public interface IPay {
  InitializePaymentExternalSystemResponse initializePayment(
    InitializePaymentExternalSystemCommand command
  );
  ConfirmResponse confirmPayment(ConfirmPaymentCommand command);
}
