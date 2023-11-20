package com.example.paymentservice.FiscalSystemIntegration;

import com.example.paymentservice.DTO.RegisterPaymentCommand;
import com.example.paymentservice.DTO.RegisterPaymentResponse;

public class FiscalSystemClient implements IRegisterPayment{
    @Override
    public RegisterPaymentResponse register(RegisterPaymentCommand summary) {
        return new RegisterPaymentResponse(true);
    }
}
