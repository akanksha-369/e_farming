package com.example.EfarmingRESTServices.controller;

import org.springframework.web.bind.annotation.*;

import com.example.EfarmingRESTServices.entities.ProductTypeDTO;
import com.example.EfarmingRESTServices.services.ProductTypeDTOService;

import java.util.List;

@RestController
@RequestMapping("/products/api/products")
//@CrossOrigin(origins = "http://localhost:3002")
public class ProductTypeDTOController {
    private ProductTypeDTOService productTypeService;

    public ProductTypeDTOController(ProductTypeDTOService productTypeService) {
        this.productTypeService = productTypeService;
    }

    @GetMapping("/{pid}/types")
    public List<ProductTypeDTO> getProductTypes(@PathVariable int pid) {
        return productTypeService.getProductTypesByPid(pid);
    }
}

