package com.knowit.EFarming.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.knowit.EFarming.entities.City;

@Repository
public interface CityRepository extends JpaRepository<City, Integer>{

}
