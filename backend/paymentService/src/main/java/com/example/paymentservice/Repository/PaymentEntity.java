package com.example.paymentservice.Repository;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.UUID;

@Entity
@Table(name = "user", schema = "users")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
class PaymentEntity {
    @Id
    private UUID id;

    private String method;
    private String result;
    private double amount;
    private String currency;
    private String type;
}
