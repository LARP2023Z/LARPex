package com.example.paymentservice.Controller;

import com.example.paymentservice.DTO.ConfirmPaymentCommand;
import com.example.paymentservice.DTO.ConfirmPaymentResponse;
import com.example.paymentservice.DTO.PaymentIdentity;
import com.example.paymentservice.DTO.PayForEventResponse;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ServiceController implements IPayForEvent, IPaymentsConfirm{

    @Override
    public PayForEventResponse payForEvent(PaymentIdentity identity) {
        return null;
    }

    @Override
    public ConfirmPaymentResponse confirm(ConfirmPaymentCommand command) {
        return new ConfirmPaymentResponse(true);
    }
}
