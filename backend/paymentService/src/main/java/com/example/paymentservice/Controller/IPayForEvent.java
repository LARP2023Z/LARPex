package com.example.paymentservice.Controller;

import com.example.paymentservice.DTO.PaymentIdentity;
import com.example.paymentservice.DTO.PayForEventResponse;

public interface IPayForEvent {
    PayForEventResponse payForEvent(PaymentIdentity identity);

}
