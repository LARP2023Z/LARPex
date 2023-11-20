package com.example.paymentservice.Controller;

import com.example.paymentservice.DTO.ConfirmPaymentCommand;
import com.example.paymentservice.DTO.ConfirmPaymentResponse;
import org.springframework.stereotype.Service;

import java.util.UUID;
public interface IPaymentsConfirm {
    ConfirmPaymentResponse confirm(ConfirmPaymentCommand command);
}
