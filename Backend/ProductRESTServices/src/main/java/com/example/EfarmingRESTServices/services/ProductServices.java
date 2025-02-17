package com.example.EfarmingRESTServices.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.EfarmingRESTServices.entities.Product;
import com.example.EfarmingRESTServices.repositories.ProductRepo;

@Service
public class ProductServices {
	@Autowired
	ProductRepo prepo;
	
	public List<Product> getAllProducts(){
		return prepo.findAll();
	}
	
	public Product getOne(int pid) {
		Optional<Product> op_con = prepo.findById(pid);
		Product pt = null;
		try {
			pt = op_con.get();
		}
		catch(Exception e) {
			e.printStackTrace();
		}		
		return pt;
	}
	
	public Product saveProduct(Product p) {
		 return prepo.save(p);
	 }
	
	
	public Product updateProd(int pid, String newName) {
	    Product product = prepo.findById(pid)
	                           .orElseThrow(() -> new RuntimeException("Product with ID " + pid + " is not found."));
	    product.setPname(newName);	    
	    return prepo.save(product);
	}
}
