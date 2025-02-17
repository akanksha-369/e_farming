package com.example.EfarmingRESTServices.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.EfarmingRESTServices.entities.FPType;
import com.example.EfarmingRESTServices.entities.Product;
import com.example.EfarmingRESTServices.entities.ProductType;
import com.example.EfarmingRESTServices.services.ProductTypeServices;

@RestController
@RequestMapping("/products")
//@CrossOrigin(origins = "http://localhost:3002")
public class ProductTypeController {
	@Autowired
	ProductTypeServices pservice;
	
	@GetMapping("/getAllProductCategory")
	public List<Object> getAllProducts(@RequestParam int pid){
		return pservice.getAllProducts(pid);
	}
	
//	@GetMapping("/getProductCategory")
//	public ProductType getProductCategory(@RequestParam int ptid) {
//		return pservice.getOne(ptid);		
//	}
	
	@PostMapping("/saveProductCategory")
	public ProductType saveProduct(@RequestBody ProductType p){
		return pservice.saveProduct(p);
	}
	
	@PutMapping("/updatePtname/{ptid}")
    public ResponseEntity<ProductType> updateProductType(@PathVariable int ptid, @RequestBody ProductType updatedProductType) {
        ProductType productType = pservice.updatePtname(ptid, updatedProductType);
        return ResponseEntity.ok(productType);
    }
}
