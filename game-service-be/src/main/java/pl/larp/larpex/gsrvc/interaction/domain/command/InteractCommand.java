package pl.larp.larpex.gsrvc.interaction.domain.command;

import java.util.UUID;

public record InteractCommand(UUID userId, String qrCode) {}
