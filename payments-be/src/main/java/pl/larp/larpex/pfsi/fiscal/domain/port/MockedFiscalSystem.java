package pl.larp.larpex.pfsi.fiscal.domain.port;

import java.util.UUID;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentMap;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import pl.larp.larpex.pfsi.fiscal.domain.model.RegisterPaymentCommand;
import pl.larp.larpex.pfsi.fiscal.domain.model.RegisterPaymentResponse;

@RequiredArgsConstructor
@Service
@Slf4j
class MockedFiscalSystem implements IRegisterPayment {

  private final ConcurrentMap<UUID, Boolean> registeredPayments =
    new ConcurrentHashMap<>();

  @Override
  public RegisterPaymentResponse register(RegisterPaymentCommand command) {
    log.atInfo().addKeyValue("command", command).log("Registering payment");

    if (registeredPayments.containsKey(command.paymentId())) {
      log
        .atInfo()
        .addKeyValue("command", command)
        .log("Payment already registered");
      return new RegisterPaymentResponse(false);
    }

    registeredPayments.put(command.paymentId(), true);
    log.atInfo().addKeyValue("command", command).log("Payment registered");
    return new RegisterPaymentResponse(true);
  }
}
