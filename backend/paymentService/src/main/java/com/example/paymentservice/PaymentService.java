package com.example.paymentservice;

import com.example.paymentservice.DTO.*;
import com.example.paymentservice.FiscalSystemIntegration.IRegisterPayment;
import com.example.paymentservice.PaymentSystemIntegration.IPay;
import com.example.paymentservice.Repository.PaymentEntityRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class PaymentService {

    private final PaymentEntityRepository paymentEntityRepository;
    private IRegisterPayment IRegisterPayment;
    private IPay IPay;
    public PayForEventResponse payForEvent(InitializePaymentCommand command) {
        return null;
    }
    public ConfirmPaymentResponse confirm(ConfirmPaymentCommand command){
        return null;
    }
}
