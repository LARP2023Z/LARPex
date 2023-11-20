package com.example.paymentservice.DTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;
import java.util.UUID;
@Setter
@Getter
@AllArgsConstructor
public class PayForEventCommand {
    private UUID userId;
    private UUID eventId;
    private String paymentMethod;
}
