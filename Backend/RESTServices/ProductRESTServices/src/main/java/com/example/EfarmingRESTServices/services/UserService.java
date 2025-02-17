package com.example.EfarmingRESTServices.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.EfarmingRESTServices.entities.Product;
import com.example.EfarmingRESTServices.entities.User;
import com.example.EfarmingRESTServices.repositories.CityRepository;
import com.example.EfarmingRESTServices.repositories.RoleRepository;
import com.example.EfarmingRESTServices.repositories.UserRepository;


@Service
public class UserService {
	
	User user;
	@Autowired
	UserRepository urepo;
    
	 @Autowired
	 CityRepository crepo;
	 
	 @Autowired
	 RoleRepository rrepo;
	 
	 
	 
	 public User saveUser(User u) {
		 return urepo.save(u);
	 }
	 
	 public User getUser(String uname,String pwd)
		{
			User u;
			Optional<User>ol=urepo.getUser(uname,pwd);
		
			try
			{
				u=ol.get();		
			}
			catch(Exception e)
			{
				u=null;
			}
			return u;
		}
	 
	 public User getOneUser(int uid) {
			Optional<User> op_con = urepo.findById(uid);
			User us = null;
			try {
				us = op_con.get();
			}
			catch(Exception e) {
				e.printStackTrace();
			}		
			return us;
		}
	 
	 public List<User> getAll() {
			return urepo.findAll();
		}
	 
	 public User getOne(int uid) {
		 return urepo.findById(uid).get();
	 }
	 
}
