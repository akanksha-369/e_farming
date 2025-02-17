package com.knowit.EFarming.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.knowit.EFarming.entities.Role;
import com.knowit.EFarming.services.RoleServices;


@RestController
@RequestMapping("/authentication")
//@CrossOrigin(origins = "http://localhost:3002")
public class RoleController {
	@Autowired
	RoleServices rservice;
	
	@GetMapping("/getAllRoles")
	public List<Role> getAllRoles() {
		return rservice.getAll();
	}
}
