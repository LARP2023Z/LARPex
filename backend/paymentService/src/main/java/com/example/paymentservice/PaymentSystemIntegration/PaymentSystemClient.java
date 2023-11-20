package com.example.paymentservice.PaymentSystemIntegration;

import com.example.paymentservice.DTO.ConfirmPaymentCommand;
import com.example.paymentservice.DTO.ConfirmResponse;
import com.example.paymentservice.DTO.InitializePaymentCommand;
import com.example.paymentservice.DTO.InitializePaymentResponse;


public class PaymentSystemClient implements IPay{

    @Override
    public InitializePaymentResponse initializePayment(InitializePaymentCommand request) {
        return new InitializePaymentResponse("redirUri");
    }

    @Override
    public ConfirmResponse confirmPayment(ConfirmPaymentCommand command) {
        return new ConfirmResponse(true);
    }
}
