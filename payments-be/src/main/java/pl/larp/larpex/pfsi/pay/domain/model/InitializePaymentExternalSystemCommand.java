package pl.larp.larpex.pfsi.pay.domain.model;

import java.util.UUID;
import pl.larp.larpex.pfsi.payment.domain.model.PaymentMethod;

public record InitializePaymentExternalSystemCommand(
  double amount,
  PaymentMethod method,
  UUID eventId,
  UUID userId
) {}
