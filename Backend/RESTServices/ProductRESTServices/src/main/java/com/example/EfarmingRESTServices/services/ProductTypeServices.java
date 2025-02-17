package com.example.EfarmingRESTServices.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.EfarmingRESTServices.entities.FPType;
import com.example.EfarmingRESTServices.entities.Product;
import com.example.EfarmingRESTServices.entities.ProductType;
import com.example.EfarmingRESTServices.repositories.ProductTypeRepo;

@Service
public class ProductTypeServices {
	@Autowired
	ProductTypeRepo prepo;
	
	public List<Object> getAllProducts(int pid){
		return prepo.getProductsByProductId(pid);	
		}

	public ProductType getOne(int ptid) {
		Optional<ProductType> op_con = prepo.findById(ptid);
		ProductType pt = null;
		try {
			pt = op_con.get();
		}
		catch(Exception e) {
			e.printStackTrace();
		}		
		return pt;
	}
	
	public ProductType saveProduct(ProductType p) {
		 return prepo.save(p);
	 }
	
	public ProductType updatePtname(int ptid, ProductType updatedProductType) {
        return prepo.findById(ptid)
            .map(productType -> {
                productType.setPtname(updatedProductType.getPtname());
                return prepo.save(productType);
            })
            .orElseThrow(() -> new RuntimeException("ProductType not found with ID: " + ptid));
    }
}
