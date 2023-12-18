package pl.larp.larpex.gsrvc.interaction.domain.port;

import java.util.Optional;
import pl.larp.larpex.gsrvc.interaction.domain.command.InteractCommand;
import pl.larp.larpex.gsrvc.interaction.domain.command.InteractResponse;

public interface IInteraction {
  Optional<InteractResponse> interact(InteractCommand command);
}
