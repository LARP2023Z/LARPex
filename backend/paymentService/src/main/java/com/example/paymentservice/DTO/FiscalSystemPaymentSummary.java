package com.example.paymentservice.DTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;
import java.util.UUID;
@Getter @Setter @AllArgsConstructor
public class FiscalSystemPaymentSummary {
    double amount;
    private Date paymentDate;
    private UUID eventId;

    private String payerName;
}
