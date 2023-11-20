package pl.larp.larpex.usi.user.adapter.db;

import java.time.LocalDate;
import java.util.UUID;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import pl.larp.larpex.usi.user.domain.model.User;
import pl.larp.larpex.usi.user.domain.model.UserCredential;

@RequiredArgsConstructor
@Component
public class UsersFixtures {

  private final UserEntityRepository userEntityRepository;

  public User generateSampleUser() {
    return User
      .builder()
      .id(UUID.randomUUID())
      .name("Krzysztof")
      .surname("Chrupała")
      .alias("dr. Chruper")
      .birthDate(LocalDate.of(2000, 1, 1))
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
    var userEntity = new UserEntity();
    userEntity.setId(user.getId());
    userEntity.setName(user.getName());
    userEntity.setSurname(user.getSurname());
    userEntity.setAlias(user.getAlias());
    userEntity.setBirthDate(java.sql.Date.valueOf(user.getBirthDate()));
    userEntity.setEmail(user.getCredential().getEmail());
    userEntity.setPasswordHash(user.getCredential().getPasswordHash());
    userEntityRepository.save(userEntity);
  }

  public void removeAllUsers() {
    userEntityRepository.deleteAll();
  }
}
