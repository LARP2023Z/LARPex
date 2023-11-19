package pl.larp.larpex.usi.user.domain.port;

import java.util.Optional;
import java.util.UUID;
import pl.larp.larpex.usi.user.domain.model.UserDetailResponse;

public interface IUsersFetch {
  Optional<UserDetailResponse> fetchUserDetails(UUID id);
}
