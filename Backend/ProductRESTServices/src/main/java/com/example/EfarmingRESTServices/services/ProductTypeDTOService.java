package com.example.EfarmingRESTServices.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.EfarmingRESTServices.entities.ProductTypeDTO;
import com.example.EfarmingRESTServices.repositories.ProductTypeDTORepo;


@Service
public class ProductTypeDTOService {
	@Autowired
    private ProductTypeDTORepo ptdrepo;

    public ProductTypeDTOService(ProductTypeDTORepo productTypeDTORepo) {
        ptdrepo = productTypeDTORepo;
    }

    public List<ProductTypeDTO> getProductTypesByPid(int pid) {
    	
    	 List<Object[]> results = ptdrepo.getProductsByProductId(pid);
    	return results.stream()
                .map(row -> new ProductTypeDTO((Integer) row[0], (String) row[1]))
                .collect(Collectors.toList()); 
    }
}