package com.example.EfarmingRESTServices.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.EfarmingRESTServices.entities.FPType;
import com.example.EfarmingRESTServices.entities.FPTypeDummy;
import com.example.EfarmingRESTServices.entities.ProductDTO;
import com.example.EfarmingRESTServices.entities.ProductType;
import com.example.EfarmingRESTServices.entities.User;
import com.example.EfarmingRESTServices.services.FPTypeServices;
import com.example.EfarmingRESTServices.services.ProductServices;
import com.example.EfarmingRESTServices.services.ProductTypeServices;
import com.example.EfarmingRESTServices.services.UserService;

@RestController
@RequestMapping("/products")
//@CrossOrigin(origins = "http://localhost:3002")
public class FPTypeController {
	@Autowired
	FPTypeServices fptserv;
	@Autowired
	UserService userv;
	@Autowired
	ProductTypeServices pserv;
	
	
	@GetMapping("/all")
    public Optional<Object[]> getAllFProducts(@RequestParam int uid) {
        return fptserv.getAllFProductsById(uid);
    }
    
    @GetMapping("/allProducts")
    public List<ProductDTO> getAllProducts(@RequestParam int uid) {
        return fptserv.getProducts(uid);
    }
	
	@PostMapping("/add")
    public FPType addFProduct(@RequestBody FPTypeDummy fdummy) {
//		System.out.println(fdummy);
		User u = userv.getOne(fdummy.getUid());
		System.out.println(u);
		ProductType pt = pserv.getOne(fdummy.getPtid());
		FPType fpt = new FPType(u, pt, fdummy.getQty(), fdummy.getPrice());
        return fptserv.addFProduct(fpt);
    }
	
	@PostMapping(value="/uploading/{fptid}", consumes="multipart/form-data")
	public boolean uploadImage(@PathVariable("fptid") int fptid, @RequestBody MultipartFile file) {
		System.out.println(file.getOriginalFilename());
		System.out.println(file.getSize());
		boolean flag =true;
		try {
			flag = fptserv.upload(fptid, file.getBytes());
		}
		catch(Exception e) {
			flag=false;
		}
		return flag;
	}

}
