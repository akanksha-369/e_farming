	package com.knowit.EFarming.controllers;
	
	import java.util.List;
	
	import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
	import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
	import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
	
	import com.knowit.EFarming.entities.User;
	import com.knowit.EFarming.entities.UserCheck;
	import com.knowit.EFarming.services.UserService;
	
	@RestController
	@RequestMapping("/authentication")
//	@CrossOrigin(origins = "http://localhost:3002")
	public class UserController {
		@Autowired
		UserService userv;
		
		@PostMapping("/saveUser")
		public User saveUser(@RequestBody User u){
			return userv.saveUser(u);
		}
		
		@PostMapping("/chkUser")
		public User chkUser(@RequestBody UserCheck ucheck)
		{
			return userv.getUser(ucheck.getUname(), ucheck.getPwd());
		}
		
		@GetMapping("/getAllUser")
		public List<User> getAll(){
			return userv.getAll();
		}
		
		@PostMapping("/forgotPassword/{email}")
		public ResponseEntity<?> forgotPassword(@PathVariable String email) {
		    try {
		    	System.out.println(email);
		        String pwd = userv.getPasswordByEmail(email); 
		        if (pwd != null) {
		            return ResponseEntity.ok(pwd); 
		        } else {
		            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Email not found");
		        }
		    } catch (Exception e) {
		    	System.out.println(e);
		        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred");
		    }
		}

	}
