package pl.larp.larpex.usi.user.adapter.api;

import static io.restassured.module.mockmvc.RestAssuredMockMvc.*;
import static org.hamcrest.Matchers.equalTo;
import static org.mockito.Mockito.when;

import java.time.LocalDateTime;
import java.util.Optional;
import java.util.UUID;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import pl.larp.larpex.usi.user.domain.model.UserDetailResponse;
import pl.larp.larpex.usi.user.domain.port.UserService;

@ExtendWith(MockitoExtension.class)
class UserDetailsControllerUnitTest {

  private static final String USERS_PATH = "/users";

  @Mock
  private UserService userService;

  @InjectMocks
  private UserDetailsController userDetailsController;

  @BeforeEach
  void setUp() {
    standaloneSetup(userDetailsController);
  }

  @Test
  void shouldReturnOk_whenUserExists() {
    // given
    final var user = new UserDetailResponse(
      UUID.randomUUID(),
      "alias-value",
      "name-value",
      "surname-value",
      LocalDateTime.MIN,
      "email-value"
    );

    // and
    when(userService.fetchUserDetails(user.id())).thenReturn(Optional.of(user));

    given()
      .when()
      .get(USERS_PATH + "/{id}", user.id().toString())
      .then()
      .statusCode(200)
      .and()
      .body("id", equalTo(user.id().toString()));
  }

  @Test
  void shouldReturnNotFound_whenUserDoesNotExist() {
    // given
    final var userId = UUID.randomUUID();

    // and
    when(userService.fetchUserDetails(userId)).thenReturn(Optional.empty());

    given()
      .when()
      .get(USERS_PATH + "/{id}", userId.toString())
      .then()
      .statusCode(404);
  }
}
