package pl.larp.larpex.pfsi.fiscal.domain.port;

import pl.larp.larpex.pfsi.fiscal.domain.model.RegisterPaymentCommand;
import pl.larp.larpex.pfsi.fiscal.domain.model.RegisterPaymentResponse;

public interface IRegisterPayment {
  RegisterPaymentResponse register(RegisterPaymentCommand command);
}
