package pl.larp.larpex.pfsi.payment.adapter.db;

import java.util.Optional;
import java.util.UUID;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
interface PaymentJpaRepository extends JpaRepository<PaymentEntity, UUID> {
  boolean existsByEventIdAndUserId(UUID eventId, UUID userId);
  Optional<PaymentEntity> findByEventIdAndUserId(UUID eventId, UUID userId);
}
