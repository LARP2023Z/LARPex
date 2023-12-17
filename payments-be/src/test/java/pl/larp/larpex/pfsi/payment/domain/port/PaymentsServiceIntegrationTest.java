package pl.larp.larpex.pfsi.payment.domain.port;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import pl.larp.larpex.pfsi.payment.adapter.mock.MockedConstants;
import pl.larp.larpex.pfsi.payment.domain.model.ConfirmPaymentCommand;
import pl.larp.larpex.pfsi.payment.domain.model.InitializePaymentCommand;
import pl.larp.larpex.pfsi.payment.domain.model.PaymentMethod;
import pl.larp.larpex.pfsi.test.AbstractIntegrationTest;

class PaymentsServiceIntegrationTest extends AbstractIntegrationTest {

  @Autowired
  private PaymentsService paymentsService;

  @Test
  void shouldConfirmPayment_afterInitialized() {
    // given
    final var initializeCommand = new InitializePaymentCommand(
      21.37,
      MockedConstants.EXISTING_USER_ID,
      MockedConstants.SOME_EVENT_ID,
      PaymentMethod.BLIK
    );

    // when
    final var payment = paymentsService.initializePayment(initializeCommand);

    // then
    Assertions.assertNotNull(payment);

    // and given
    final var confirmCommand = new ConfirmPaymentCommand(
      MockedConstants.SOME_EVENT_ID,
      MockedConstants.EXISTING_USER_ID
    );

    // when
    final var confirmResponse = paymentsService.confirm(confirmCommand);

    // then
    Assertions.assertTrue(confirmResponse.exists());
  }
}
