package com.devsuperior.dsvendas.services.impl;

import com.devsuperior.dsvendas.DTOs.SaleDTO;
import com.devsuperior.dsvendas.entities.Sale;
import com.devsuperior.dsvendas.repositories.SaleRepository;
import com.devsuperior.dsvendas.repositories.SellerRepository;
import com.devsuperior.dsvendas.services.SaleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class SaleServiceImpl implements SaleService {

    private final SaleRepository repository;
    private final SellerRepository sellerRepository;

    @Autowired
    public SaleServiceImpl(SaleRepository repository, SellerRepository sellerRepository) {
        this.repository = repository;
        this.sellerRepository = sellerRepository;
    }

    @Override
    @Transactional(readOnly = true)
    public Page<SaleDTO> findAll(Pageable pageable) {
        sellerRepository.findAll();
        Page<Sale> result = repository.findAll(pageable);
        return result.map(SaleDTO::new);
    }
}
