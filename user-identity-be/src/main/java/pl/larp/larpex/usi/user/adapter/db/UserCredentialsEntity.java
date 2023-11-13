package pl.larp.larpex.usi.user.adapter.db;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "user_credentials", schema = "users")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
class UserCredentialsEntity {

  @Id
  private String userId; // TODO: UUID after DB changes fixes

  private String email;

  private byte passwordHash; // TODO: should probably be a string

  @JoinColumn(name = "user_id")
  @OneToOne
  private UserEntity user;
}
