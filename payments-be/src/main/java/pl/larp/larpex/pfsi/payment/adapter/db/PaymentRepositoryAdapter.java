package pl.larp.larpex.pfsi.payment.adapter.db;

import java.math.BigDecimal;
import java.util.Optional;
import java.util.UUID;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import pl.larp.larpex.pfsi.payment.domain.model.Payment;
import pl.larp.larpex.pfsi.payment.domain.port.IPaymentsRepository;

@Service
@RequiredArgsConstructor
class PaymentRepositoryAdapter implements IPaymentsRepository {

  private final PaymentJpaRepository paymentJpaRepository;

  @Override
  @Transactional(readOnly = true)
  public Optional<Payment> findBy(UUID eventId, UUID userId) {
    return paymentJpaRepository
      .findByEventIdAndUserId(eventId, userId)
      .map(paymentEntity ->
        Payment
          .builder()
          .id(paymentEntity.getId())
          .amount(paymentEntity.getAmount().doubleValue())
          .currency(paymentEntity.getCurrency())
          .paymentDate(paymentEntity.getPaymentDate())
          .method(paymentEntity.getMethod())
          .result(paymentEntity.getResult())
          .type(paymentEntity.getType())
          .userId(paymentEntity.getUserId())
          .eventId(paymentEntity.getEventId())
          .build()
      );
  }

  @Override
  public void save(Payment payment) {
    final var paymentEntity = new PaymentEntity();
    paymentEntity.setId(payment.getId());
    paymentEntity.setAmount(BigDecimal.valueOf(payment.getAmount()));
    paymentEntity.setCurrency(payment.getCurrency());
    paymentEntity.setPaymentDate(payment.getPaymentDate());
    paymentEntity.setMethod(payment.getMethod());
    paymentEntity.setResult(payment.getResult());
    paymentEntity.setType(payment.getType());
    paymentEntity.setUserId(payment.getUserId());
    paymentEntity.setEventId(payment.getEventId());
    paymentJpaRepository.save(paymentEntity);
  }
}
