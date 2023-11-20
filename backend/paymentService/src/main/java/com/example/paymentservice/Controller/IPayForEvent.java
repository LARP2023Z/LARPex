package com.example.paymentservice.Controller;

import com.example.paymentservice.DTO.PayForEventCommand;
import com.example.paymentservice.DTO.PaymentIdentity;
import com.example.paymentservice.DTO.PayForEventResponse;

public interface IPayForEvent {
    PayForEventResponse payForEvent(PayForEventCommand command);

}
