package pl.larp.larpex.usi.user.domain.model;

import java.time.LocalDateTime;
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
  private LocalDateTime birthDate;

  private UserCredential credential;
}
