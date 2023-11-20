package com.example.paymentservice.FiscalSystemIntegration;

import com.example.paymentservice.DTO.RegisterPaymentCommand;
import com.example.paymentservice.DTO.RegisterPaymentResponse;

public interface IRegisterPayment {
    RegisterPaymentResponse register(RegisterPaymentCommand command);
}
