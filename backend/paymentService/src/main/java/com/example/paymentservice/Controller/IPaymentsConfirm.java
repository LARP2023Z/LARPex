package com.example.paymentservice.Controller;

import com.example.paymentservice.DTO.PaymentConfirmationResponse;
import com.example.paymentservice.DTO.PaymentIdentity;
import com.example.paymentservice.DTO.PaymentSummary;

import java.util.UUID;

public interface IPaymentsConfirm {
    PaymentConfirmationResponse confirm(UUID eventId, UUID userId);
}
