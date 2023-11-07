package com.example.paymentservice.Service;

import com.example.paymentservice.PaymentService;
import com.example.paymentservice.Repository.IRepository;

public class PayAPIService {
    private final IRepository repository;
    private final PayAPIMapper APIMapper;

    private final PaymentService paymentService;
    PayAPIService(IRepository repository, PayAPIMapper apiMapper, PaymentService paymentService) {
        this.repository = repository;
        APIMapper = apiMapper;
        this.paymentService = paymentService;
    }
}
