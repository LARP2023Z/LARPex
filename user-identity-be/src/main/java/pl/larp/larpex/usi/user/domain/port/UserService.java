package pl.larp.larpex.usi.user.domain.port;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import pl.larp.larpex.usi.user.domain.model.UserDetailResponse;

import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class UserService {

    private final IUsers users;

    public Optional<UserDetailResponse> fetchUserDetails(UUID id) {
        return users.findById(id).map(UserDetailResponse::fromUser);
    }

}
