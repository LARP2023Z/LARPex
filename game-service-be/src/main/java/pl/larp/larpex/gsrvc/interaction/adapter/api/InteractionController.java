package pl.larp.larpex.gsrvc.interaction.adapter.api;

import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import pl.larp.larpex.gsrvc.interaction.domain.command.InteractCommand;
import pl.larp.larpex.gsrvc.interaction.domain.command.InteractResponse;
import pl.larp.larpex.gsrvc.interaction.domain.port.IInteraction;

@RestController
@RequiredArgsConstructor
class InteractionController {

  private final IInteraction interaction;

  @PostMapping("/interactions")
  @ApiResponses(
    value = {
      @ApiResponse(responseCode = "200", description = "Interaction performed"),
      @ApiResponse(
        responseCode = "400",
        description = "Interaction not performed due to malformed qr code"
      ),
    }
  )
  public ResponseEntity<InteractResponse> postInteract(
    @RequestBody InteractCommand command
  ) {
    return interaction
      .interact(command)
      .map(ResponseEntity::ok)
      .orElse(ResponseEntity.badRequest().build());
  }
}
