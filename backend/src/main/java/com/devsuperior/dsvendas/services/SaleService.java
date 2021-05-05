package com.devsuperior.dsvendas.services;

import com.devsuperior.dsvendas.DTOs.SaleDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;


import java.util.List;

public interface SaleService {
    Page<SaleDTO> findAll(Pageable pageable);
}
