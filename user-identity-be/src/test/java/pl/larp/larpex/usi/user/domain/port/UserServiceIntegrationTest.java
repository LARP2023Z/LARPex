package pl.larp.larpex.usi.user.domain.port;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import pl.larp.larpex.usi.test.AbstractIntegrationTest;
import pl.larp.larpex.usi.user.adapter.db.UsersFixtures;

class UserServiceIntegrationTest extends AbstractIntegrationTest {

  @Autowired
  private UserService userService;

  @Autowired
  private UsersFixtures usersFixtures;

  @BeforeEach
  void cleanUp() {
    usersFixtures.removeAllUsers();
  }

  @Test
  void shouldFetchUser_whenUserExists() {
    // given that user exists
    final var user = usersFixtures.generateSampleUser();
    usersFixtures.saveUser(user);

    // when
    final var userDetails = userService.fetchUserDetails(user.getId());

    // then
    assertThat(userDetails)
      .isPresent()
      .hasValueSatisfying(response ->
        assertThat(response.id()).isEqualTo(user.getId())
      );
  }
}
