package pl.larp.larpex.usi.user.adapter.memory;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import pl.larp.larpex.usi.user.domain.model.User;
import pl.larp.larpex.usi.user.domain.model.UserCredential;

import java.time.LocalDateTime;
import java.util.UUID;

@RequiredArgsConstructor
@Component
public class InMemoryUsersFixtures {

    private final InMemoryUsersRepository inMemoryUsersRepository;

    public User generateSampleUser() {
        return User.builder()
                .id(UUID.randomUUID())
                .name("Krzysztof")
                .surname("Chrupała")
                .alias("dr. Chruper")
                .birthDate(LocalDateTime.MIN)
                .credential(UserCredential.builder()
                        .email("chrupcio@ee.pw.edu.pl")
                        .passwordHash("definietlyHashed")
                        .build())
                .build();
    }

    public void saveUser(User user) {
        inMemoryUsersRepository.save(user);
    }

    public void removeAllUsers() {
        inMemoryUsersRepository.removeAllUsers();
    }
}