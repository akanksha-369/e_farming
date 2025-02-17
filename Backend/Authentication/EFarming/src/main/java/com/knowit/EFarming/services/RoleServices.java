package com.knowit.EFarming.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.knowit.EFarming.entities.Role;
import com.knowit.EFarming.repository.RoleRepository;

@Service
public class RoleServices {
	
	@Autowired
	RoleRepository rrepo;
	
	public List<Role> getAll(){
		return rrepo.findAll();
	}
}
