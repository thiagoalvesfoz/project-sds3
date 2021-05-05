package com.devsuperior.dsvendas.services.impl;

import com.devsuperior.dsvendas.DTOs.SellerDTO;
import com.devsuperior.dsvendas.entities.Seller;
import com.devsuperior.dsvendas.repositories.SellerRepository;
import com.devsuperior.dsvendas.services.SellerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class SellerServiceImpl implements SellerService {

    private final SellerRepository repository;

    @Autowired
    public SellerServiceImpl(SellerRepository repository) {
        this.repository = repository;
    }

    @Override
    public List<SellerDTO> findAll() {
        return repository.findAll().stream().map(SellerDTO::new).collect(Collectors.toList());
    }
}
