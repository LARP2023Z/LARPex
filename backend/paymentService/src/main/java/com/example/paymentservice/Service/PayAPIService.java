package com.example.paymentservice.Service;

import com.example.paymentservice.PaymentService;
import com.example.paymentservice.Repository.PaymentEntityRepository;

public class PayAPIService {
    private final PaymentEntityRepository repository;
    private final PayAPIMapper APIMapper;

    private final PaymentService paymentService;
    PayAPIService(PaymentEntityRepository repository, PayAPIMapper apiMapper, PaymentService paymentService) {
        this.repository = repository;
        APIMapper = apiMapper;
        this.paymentService = paymentService;
    }
}
