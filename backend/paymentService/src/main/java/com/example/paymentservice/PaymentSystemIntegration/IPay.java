package com.example.paymentservice.PaymentSystemIntegration;

import com.example.paymentservice.DTO.PaymentSystemResponse;
import com.example.paymentservice.DTO.PaymentsDetailsRequest;

public interface IPay {
    PaymentSystemResponse doPay(PaymentsDetailsRequest request);
}
