package com.knowit.EFarming.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.knowit.EFarming.entities.City;
import com.knowit.EFarming.repository.CityRepository;

@Service
public class CityServices {
	
	@Autowired
	CityRepository crepo;
	
	public List<City> getAll(){
		return crepo.findAll();
	}
}
