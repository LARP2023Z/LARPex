package com.example.paymentservice;

import com.example.paymentservice.DTO.PaymentConfirmationResponse;
import com.example.paymentservice.DTO.PaymentIdentity;
import com.example.paymentservice.DTO.PaymentSummary;
import com.example.paymentservice.FiscalSystemIntegration.IRegisterPayment;
import com.example.paymentservice.PaymentSystemIntegration.IPay;

import java.util.UUID;

public class PaymentService {
    private IPayments IPayments;
    private IRegisterPayment IRegisterPayment;
    private IPay IPay;
    public PaymentSummary payForEvent(PaymentIdentity identity){
        return null;
    }
    public PaymentConfirmationResponse confirm(UUID eventId, UUID userId){
        return null;
    }
}
