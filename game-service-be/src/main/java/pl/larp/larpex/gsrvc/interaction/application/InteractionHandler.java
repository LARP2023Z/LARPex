package pl.larp.larpex.gsrvc.interaction.application;

import java.util.Optional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import pl.larp.larpex.gsrvc.interaction.domain.command.InteractCommand;
import pl.larp.larpex.gsrvc.interaction.domain.command.InteractResponse;
import pl.larp.larpex.gsrvc.interaction.domain.port.IInteraction;

@Service
@RequiredArgsConstructor
@Slf4j
class InteractionHandler implements IInteraction {

  private final InteractionQRDecoder interactionQRDecoder;

  @Override
  public Optional<InteractResponse> interact(InteractCommand command) {
    log.info("Interacting with qr code for user [{}]", command.userId());

    var interactionType = interactionQRDecoder.decode(command.qrCode());
    if (interactionType.isEmpty()) {
      log.warn("Interaction type not found or request could not be decoded");
      return Optional.empty();
    }

    log.info(
      "Interaction [{}] for user [{}]",
      interactionType.get(),
      command.userId()
    );

    return interactionType.map(InteractResponse::new);
  }
}
