package pl.larp.larpex.pfsi.payment.domain.model;

import java.time.LocalDateTime;
import java.util.UUID;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class Payment {

  private UUID id;

  private LocalDateTime paymentDate;
  private String method;
  private String result;
  private double amount;
  private String currency;
  private String type;

  private final UUID eventId;
  private final UUID userId;
}
