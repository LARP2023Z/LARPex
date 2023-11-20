package com.example.paymentservice.Controller;

import com.example.paymentservice.DTO.*;
import com.example.paymentservice.PaymentService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ServiceController implements IPayForEvent, IPaymentsConfirm{
    PaymentService payService;
    @GetMapping("/xd")
    public String hey() {
        return "xd";
    }

    @Override
    public PayForEventResponse payForEvent(PayForEventCommand command) {
        return null;
    }
    @GetMapping("/x")
    @Override
    public ConfirmPaymentResponse confirm(ConfirmPaymentCommand command) {
        return new ConfirmPaymentResponse(true);
    }
}
