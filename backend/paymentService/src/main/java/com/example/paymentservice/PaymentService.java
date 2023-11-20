package com.example.paymentservice;

import com.example.paymentservice.DTO.ConfirmPaymentCommand;
import com.example.paymentservice.DTO.ConfirmPaymentResponse;
import com.example.paymentservice.DTO.PaymentIdentity;
import com.example.paymentservice.DTO.PayForEventResponse;
import com.example.paymentservice.FiscalSystemIntegration.IRegisterPayment;
import com.example.paymentservice.PaymentSystemIntegration.IPay;

public class PaymentService {
    private IPayments IPayments;
    private IRegisterPayment IRegisterPayment;
    private IPay IPay;
    public PayForEventResponse payForEvent(PaymentIdentity identity){
        return null;
    }
    public ConfirmPaymentResponse confirm(ConfirmPaymentCommand command){
        return null;
    }
}
