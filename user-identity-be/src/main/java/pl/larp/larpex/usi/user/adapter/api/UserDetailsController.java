package pl.larp.larpex.usi.user.adapter.api;

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
  ResponseEntity<UserDetailResponse> getUserDetails(
    @PathVariable("id") UUID id
  ) {
    return iUsersFetch
      .fetchUserDetails(id)
      .map(ResponseEntity::ok)
      .orElse(ResponseEntity.notFound().build());
  }
}
