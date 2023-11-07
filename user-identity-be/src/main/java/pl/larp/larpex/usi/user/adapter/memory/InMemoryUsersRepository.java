package pl.larp.larpex.usi.user.adapter.memory;

import org.springframework.stereotype.Component;
import pl.larp.larpex.usi.user.domain.model.User;
import pl.larp.larpex.usi.user.domain.port.IUsers;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;
import java.util.UUID;

@Component
class InMemoryUsersRepository implements IUsers {

    private final Map<UUID, User> users = new HashMap<>();

    @Override
    public Optional<User> findById(UUID id) {
        return Optional.ofNullable(users.get(id));
    }

    void save(User user) {
        users.put(user.getId(), user);
    }

    void removeAllUsers() {
        users.clear();
    }
}
