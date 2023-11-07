package com.example.paymentservice.FiscalSystemIntegration;

import com.example.paymentservice.DTO.FiscalSystemPaymentSummary;

public interface IRegisterPayment {
    void register(FiscalSystemPaymentSummary summary);
}
