package pl.larp.larpex.usi.user.domain.model;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class UserCredential {

    private String passwordHash;
    private String email;
}
