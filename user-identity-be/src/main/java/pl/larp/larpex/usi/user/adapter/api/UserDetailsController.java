package pl.larp.larpex.usi.user.adapter.api;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import java.util.UUID;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import pl.larp.larpex.usi.user.domain.model.UserDetailResponse;
import pl.larp.larpex.usi.user.domain.port.IUsersFetch;

@RestController
@RequiredArgsConstructor
class UserDetailsController {

  private final IUsersFetch iUsersFetch;

  @GetMapping(value = "/users/{id}", produces = "application/json")
  @Operation(summary = "Get user details")
  @Tag(name = "UserService")
  @ApiResponses(
    value = {
      @ApiResponse(
        responseCode = "200",
        description = "User details",
        content = @Content(
          mediaType = "application/json",
          schema = @Schema(implementation = UserDetailResponse.class)
        )
      ),
      @ApiResponse(
        responseCode = "404",
        description = "User not found",
        content = @Content
      ),
    }
  )
  ResponseEntity<UserDetailResponse> getUserDetails(
    @PathVariable("id") UUID id
  ) {
    return iUsersFetch
      .fetchUserDetails(id)
      .map(ResponseEntity::ok)
      .orElse(ResponseEntity.notFound().build());
  }
}
