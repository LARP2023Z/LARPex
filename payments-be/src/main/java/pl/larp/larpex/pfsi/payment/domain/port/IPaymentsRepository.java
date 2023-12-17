package pl.larp.larpex.pfsi.payment.domain.port;

import java.util.Optional;
import java.util.UUID;
import pl.larp.larpex.pfsi.payment.domain.model.Payment;

public interface IPaymentsRepository {
  Optional<Payment> findBy(UUID eventId, UUID userId);

  void save(Payment payment);
}
