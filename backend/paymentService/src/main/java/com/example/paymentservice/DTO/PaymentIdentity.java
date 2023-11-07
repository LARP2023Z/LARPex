package com.example.paymentservice.DTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.UUID;

@Getter @Setter @AllArgsConstructor
public class PaymentIdentity {
    private UUID userId;
    private UUID eventId;
    private String paymentMethod;
}
