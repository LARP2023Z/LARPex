package com.example.paymentservice.PaymentSystemIntegration;

import com.example.paymentservice.DTO.ConfirmPaymentCommand;
import com.example.paymentservice.DTO.ConfirmResponse;
import com.example.paymentservice.DTO.InitializePaymentCommand;
import com.example.paymentservice.DTO.InitializePaymentResponse;


public interface IPay {
    InitializePaymentResponse initializePayment(InitializePaymentCommand command);
    ConfirmResponse confirmPayment(ConfirmPaymentCommand command);
}
