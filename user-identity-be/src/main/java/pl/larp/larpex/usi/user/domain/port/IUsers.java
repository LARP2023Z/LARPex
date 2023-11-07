package pl.larp.larpex.usi.user.domain.port;

import java.util.Optional;
import java.util.UUID;
import pl.larp.larpex.usi.user.domain.model.User;

public interface IUsers {
  Optional<User> findById(UUID id);
}
