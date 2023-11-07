package pl.larp.larpex.pfsi.fiscal.domain.model;

import java.time.LocalDateTime;
import java.util.UUID;

public record RegisterPaymentCommand(
  double amount,
  LocalDateTime paymentDate,
  String eventName,
  UUID paymentId
) {}
