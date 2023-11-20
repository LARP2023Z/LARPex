package com.example.paymentservice.DTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;
import java.util.UUID;

@Setter @Getter @AllArgsConstructor
public class PayForEventResponse {
    private double amount;
    private Date paymentDate;
    private String eventName;
    private String externalPaymentId;
}