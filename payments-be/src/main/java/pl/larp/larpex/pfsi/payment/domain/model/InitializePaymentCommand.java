package pl.larp.larpex.pfsi.payment.domain.model;

import java.util.UUID;

public record InitializePaymentCommand(
  double amount,
  UUID userId,
  UUID eventId,
  PaymentMethod paymentMethod
) {}
