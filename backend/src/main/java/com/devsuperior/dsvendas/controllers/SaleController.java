package com.devsuperior.dsvendas.controllers;

import com.devsuperior.dsvendas.DTOs.SaleDTO;
import com.devsuperior.dsvendas.DTOs.SaleSuccessDTO;
import com.devsuperior.dsvendas.DTOs.SaleSumDTO;
import com.devsuperior.dsvendas.services.SaleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/sales")
public class SaleController {
    private final SaleService saleService;

    @Autowired
    public SaleController(SaleService saleService) {
        this.saleService = saleService;
    }

    @GetMapping
    private ResponseEntity<Page<SaleDTO>> getAllSales(Pageable pageable) {
        return ResponseEntity.ok(saleService.findAll(pageable));
    }

    @GetMapping("/amount-by-seller")
    private ResponseEntity<List<SaleSumDTO>> amountGroupedBySeller() {
        return ResponseEntity.ok(saleService.amountGroupedBySeller());
    }

    @GetMapping("/success-by-seller")
    private ResponseEntity<List<SaleSuccessDTO>> successGroupedBySeller() {
        return ResponseEntity.ok(saleService.successGroupedBySeller());
    }

}
