package com.example.paymentservice.Controller;

import com.example.paymentservice.DTO.PaymentIdentity;
import com.example.paymentservice.DTO.PaymentSummary;

public interface IPayForEvent {
    PaymentSummary payForEvent(PaymentIdentity identity);

}
