package pl.larp.larpex.usi.user.adapter.memory;

import java.time.LocalDate;
import java.util.UUID;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import pl.larp.larpex.usi.user.domain.model.User;
import pl.larp.larpex.usi.user.domain.model.UserCredential;

@RequiredArgsConstructor
@Component
// TODO: #53 - remove
public class InMemoryUsersFixtures {

  private final InMemoryUsersRepository inMemoryUsersRepository;

  public User generateSampleUser() {
    return User
      .builder()
      .id(UUID.randomUUID())
      .name("Krzysztof")
      .surname("Chrupała")
      .alias("dr. Chruper")
      .birthDate(LocalDate.MIN)
      .credential(
        UserCredential
          .builder()
          .email("chrupcio@ee.pw.edu.pl")
          .passwordHash("definietlyHashed")
          .build()
      )
      .build();
  }

  public void saveUser(User user) {
    inMemoryUsersRepository.save(user);
  }

  public void removeAllUsers() {
    inMemoryUsersRepository.removeAllUsers();
  }
}
