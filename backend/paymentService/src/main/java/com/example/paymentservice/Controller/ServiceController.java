package com.example.paymentservice.Controller;

import com.example.paymentservice.DTO.PaymentConfirmationResponse;
import com.example.paymentservice.DTO.PaymentIdentity;
import com.example.paymentservice.DTO.PaymentSummary;
import com.example.paymentservice.Repository.IRepository;
import org.springframework.web.bind.annotation.RestController;

import java.util.UUID;
@RestController
public class ServiceController implements IPayForEvent, IPaymentsConfirm{

    @Override
    public PaymentSummary payForEvent(PaymentIdentity identity) {
        return null;
    }

    @Override
    public PaymentConfirmationResponse confirm(UUID eventId, UUID userId) {
        return null;
    }
}
