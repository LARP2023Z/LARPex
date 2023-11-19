package pl.larp.larpex.usi.user.domain.port;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import pl.larp.larpex.usi.user.adapter.memory.InMemoryUsersFixtures;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@ActiveProfiles("test")
@Disabled("#53")
class UserServiceIntegrationTest {

  @Autowired
  private UserService userService;

  @Autowired
  private InMemoryUsersFixtures inMemoryUsersFixtures;

  @BeforeEach
  void cleanUp() {
    inMemoryUsersFixtures.removeAllUsers();
  }

  @Test
  void shouldFetchUser_whenUserExists() {
    // given that user exists
    final var user = inMemoryUsersFixtures.generateSampleUser();
    inMemoryUsersFixtures.saveUser(user);

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
