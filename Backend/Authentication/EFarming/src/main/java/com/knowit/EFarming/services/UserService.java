package com.knowit.EFarming.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.knowit.EFarming.entities.City;
import com.knowit.EFarming.entities.Role;
import com.knowit.EFarming.entities.User;
import com.knowit.EFarming.repository.CityRepository;
import com.knowit.EFarming.repository.RoleRepository;
import com.knowit.EFarming.repository.UserRepository;

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
	 
//	 public User getOneUser(int uid)
//		{
//			User u;
//			Optional<User>ol=urepo.getUser(uid);
//		
//			try
//			{
//				u=ol.get();		
//			}
//			catch(Exception e)
//			{
//				u=null;
//			}
//			return u;
//		}
	 
	 public List<User> getAll() {
			return urepo.findAll();
		}
	 
	 public String getPasswordByEmail(String email) {
	        Optional<String> user = urepo.findByEmail(email); 
	        if (user != null) {
	            return user.get(); 
	        }
	        return null;
	    }
}
