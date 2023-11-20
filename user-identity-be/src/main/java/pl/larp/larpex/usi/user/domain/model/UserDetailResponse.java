package pl.larp.larpex.usi.user.domain.model;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.UUID;

public record UserDetailResponse(
  UUID id,
  String alias,
  String name,
  String surname,
  LocalDate birthDate,
  String email
) {
  public static UserDetailResponse fromUser(User user) {
    return new UserDetailResponse(
      user.getId(),
      user.getAlias(),
      user.getName(),
      user.getSurname(),
      user.getBirthDate(),
      user.getCredential().getEmail()
    );
  }
}
