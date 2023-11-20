package pl.larp.larpex.usi.user.domain.model;

import java.time.LocalDate;
import java.util.UUID;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class User {

  private UUID id;

  private String alias;
  private String name;
  private String surname;
  private LocalDate birthDate;

  private UserCredential credential;
}
