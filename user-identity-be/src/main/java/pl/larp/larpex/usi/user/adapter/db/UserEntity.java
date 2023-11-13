package pl.larp.larpex.usi.user.adapter.db;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import java.util.Date;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "users", schema = "users")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
class UserEntity {

  @Id
  private String id; // TODO: UUID after DB changes fixes

  private String alias;
  private String name;
  private String surname;
  private Date birthDate; // TODO: should probably be LocalDate
}
