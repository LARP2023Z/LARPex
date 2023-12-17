package pl.larp.larpex.pfsi.payment.domain.model;

import java.util.UUID;

public record ConfirmPaymentCommand(UUID eventId, UUID userId) {}
