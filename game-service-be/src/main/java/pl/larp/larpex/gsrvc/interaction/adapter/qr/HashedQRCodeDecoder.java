package pl.larp.larpex.gsrvc.interaction.adapter.qr;

import com.fasterxml.jackson.databind.ObjectMapper;
import java.util.Base64;
import java.util.Optional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import pl.larp.larpex.gsrvc.interaction.application.InteractionQRDecoder;
import pl.larp.larpex.gsrvc.interaction.domain.model.InteractionType;

@RequiredArgsConstructor
@Service
class HashedQRCodeDecoder implements InteractionQRDecoder {

  private final ObjectMapper objectMapper;

  private final Base64.Decoder base64Decoder;

  @Override
  public Optional<InteractionType> decode(String qrCode) {
    return decodeBase64(qrCode)
      .flatMap(this::decodeJson)
      .map(InteractionTypeDTO::type);
  }

  private Optional<byte[]> decodeBase64(String qrCode) {
    try {
      return Optional.of(base64Decoder.decode(qrCode));
    } catch (IllegalArgumentException e) {
      return Optional.empty();
    }
  }

  private Optional<InteractionTypeDTO> decodeJson(byte[] bytes) {
    try {
      return Optional.of(
        objectMapper.readValue(bytes, InteractionTypeDTO.class)
      );
    } catch (Exception e) {
      return Optional.empty();
    }
  }

  private record InteractionTypeDTO(InteractionType type) {}
}
