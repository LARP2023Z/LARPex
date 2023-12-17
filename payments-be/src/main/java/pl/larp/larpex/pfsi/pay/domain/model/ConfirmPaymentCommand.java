package pl.larp.larpex.pfsi.pay.domain.model;

import java.util.UUID;

public record ConfirmPaymentCommand(UUID eventId, UUID userId) {}
