package com.example.EfarmingRESTServices.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.example.EfarmingRESTServices.entities.User;
import com.example.EfarmingRESTServices.entities.UserCheck;
import com.example.EfarmingRESTServices.services.UserService;


@RestController
@RequestMapping("/products")
//@CrossOrigin(origins = "http://localhost:3002")
public class UserController {
	@Autowired
	UserService userv;
	
	@PostMapping("/saveUser")
	public User saveUser(@RequestBody User u){
		return userv.saveUser(u);
	}
	
	@GetMapping("/getUser")
	public User getUser(@RequestParam int uid) {
		return userv.getOneUser(uid);		
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
}
