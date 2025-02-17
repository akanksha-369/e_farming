package com.example.EfarmingRESTServices.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.EfarmingRESTServices.entities.Product;
import com.example.EfarmingRESTServices.services.ProductServices;

@RestController
@RequestMapping("/products")
//@CrossOrigin(origins = "http://localhost:3002")
public class ProductController {
	@Autowired
	ProductServices pservice;
	
	@GetMapping("/getAllProducts")
	public List<Product> getAllProducts(){
		
		return pservice.getAllProducts();
	}
	
	@GetMapping("/getProduct")
	public Product getProduct(@RequestParam int pid) {
		return pservice.getOne(pid);		
	}
	
	@PostMapping("/saveProduct")
	public Product saveUser(@RequestBody Product p){
		return pservice.saveProduct(p);
	}
	
	@PutMapping("/	")
	public Product updateProductName(@RequestBody Product product) {
	    return pservice.updateProd(product.getPid(), product.getPname());
	}
}
