package pl.larp.larpex.usi.user.adapter.db;

import java.time.Instant;
import java.time.ZoneId;
import java.util.Optional;
import java.util.UUID;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Service;
import pl.larp.larpex.usi.user.domain.model.User;
import pl.larp.larpex.usi.user.domain.model.UserCredential;
import pl.larp.larpex.usi.user.domain.port.IUsers;

@Service
@RequiredArgsConstructor
public class UsersAdapter implements IUsers {

  private final UserEntityRepository userEntityRepository;

  @Override
  public Optional<User> findById(UUID id) {
    return userEntityRepository.findById(id).map(this::mapToUser);
  }

  private User mapToUser(UserEntity userEntity) {
    return User
      .builder()
      .id(userEntity.getId())
      .name(userEntity.getName())
      .alias(userEntity.getAlias())
      .surname(userEntity.getSurname())
      .birthDate(
        Instant
          .ofEpochMilli(userEntity.getBirthDate().getTime())
          .atZone(ZoneId.systemDefault())
          .toLocalDate()
      )
      .credential(
        UserCredential
          .builder()
          .passwordHash(userEntity.getPasswordHash())
          .email(userEntity.getEmail())
          .build()
      )
      .build();
  }
}
