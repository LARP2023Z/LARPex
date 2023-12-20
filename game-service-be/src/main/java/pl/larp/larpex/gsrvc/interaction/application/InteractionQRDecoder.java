package pl.larp.larpex.gsrvc.interaction.application;

import java.util.Optional;
import pl.larp.larpex.gsrvc.interaction.domain.model.InteractionType;

public interface InteractionQRDecoder {
  Optional<InteractionType> decode(String qrCode);
}
