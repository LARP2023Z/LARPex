package pl.larp.larpex.usi.user.domain.port;

import java.util.Optional;
import java.util.UUID;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import pl.larp.larpex.usi.user.domain.model.UserDetailResponse;

@Service
@RequiredArgsConstructor
class UserService implements IUsersFetch {

  private final IUsers users;

  public Optional<UserDetailResponse> fetchUserDetails(UUID id) {
    return users.findById(id).map(UserDetailResponse::fromUser);
  }
}
