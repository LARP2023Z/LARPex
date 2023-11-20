package pl.larp.larpex.usi.user.adapter.db;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import java.util.Date;
import java.util.UUID;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "users", schema = "public")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
class UserEntity {

  @Id
  private UUID id;

  private String alias;
  private String name;
  private String surname;
  private Date birthDate;

  private String passwordHash;
  private String email;
}
