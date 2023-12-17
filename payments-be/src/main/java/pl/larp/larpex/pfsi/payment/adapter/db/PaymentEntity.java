package pl.larp.larpex.pfsi.payment.adapter.db;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import java.math.BigDecimal;
import java.time.Instant;
import java.time.LocalDateTime;
import java.util.UUID;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "payments")
class PaymentEntity {

  @Id
  @Column(name = "id", nullable = false)
  private UUID id;

  @Column(name = "payment_date")
  private LocalDateTime paymentDate;

  @Column(name = "method")
  private String method;

  @Column(name = "result")
  private String result;

  @Column(name = "amount", precision = 18, scale = 2)
  private BigDecimal amount;

  @Column(name = "currency", length = 3)
  private String currency;

  @Column(name = "type")
  private String type;

  @Column(name = "event_id")
  private UUID eventId;

  @Column(name = "user_id")
  private UUID userId;
}
