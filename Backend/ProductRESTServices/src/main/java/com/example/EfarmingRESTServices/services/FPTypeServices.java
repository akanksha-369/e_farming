package com.example.EfarmingRESTServices.services;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.EfarmingRESTServices.entities.FPType;
import com.example.EfarmingRESTServices.entities.ProductDTO;
import com.example.EfarmingRESTServices.repositories.FPTypeRepo;

@Service
public class FPTypeServices {
	@Autowired
	FPTypeRepo fprepo;
	
	public Optional<Object[]> getAllFProductsById(int id) {
        return fprepo.getProducts(id);
    }
	
	public List<ProductDTO> getProducts(int uid) {
        List<Object[]> results = fprepo.getProductsByUserId(uid);
        return results.stream().map(obj -> new ProductDTO(
                (String) obj[0], // Product Name
                (String) obj[1], // Product Type Name
                (Integer) obj[2], // Quantity
                ((Number) obj[3]).doubleValue() // Price
        )).collect(Collectors.toList());
    }
	
	public FPType addFProduct(FPType fproduct) {
        return fprepo.save(fproduct);
    }
	
	public boolean upload(int id, byte [] photo) {
		System.out.println("in service");
		if(fprepo.uploadPhoto(id, photo) == 1)
			return true;
		else 
			return false;
	}
}
