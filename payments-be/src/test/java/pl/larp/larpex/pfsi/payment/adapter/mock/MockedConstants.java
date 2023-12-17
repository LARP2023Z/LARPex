package pl.larp.larpex.pfsi.payment.adapter.mock;

import java.util.UUID;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor(access = AccessLevel.PRIVATE)
public class MockedConstants {

  public static final UUID EXISTING_USER_ID = UUID.fromString(
    "8ebdb302-2589-4255-b060-d70d1bc974b8"
  );
  public static final UUID SOME_EVENT_ID = UUID.fromString(
    "9377a1fc-8ef8-4ca0-9477-6e04feb69656"
  );
}
