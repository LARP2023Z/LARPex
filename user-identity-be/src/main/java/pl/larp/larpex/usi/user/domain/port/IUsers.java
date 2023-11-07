package pl.larp.larpex.usi.user.domain.port;

import pl.larp.larpex.usi.user.domain.model.User;

import java.util.Optional;
import java.util.UUID;

public interface IUsers {

    Optional<User> findById(UUID id);
}
