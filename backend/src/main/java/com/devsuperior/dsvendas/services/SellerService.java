package com.devsuperior.dsvendas.services;

import com.devsuperior.dsvendas.DTOs.SellerDTO;
import com.devsuperior.dsvendas.entities.Seller;

import java.util.List;

public interface SellerService {
    List<SellerDTO> findAll();
}
