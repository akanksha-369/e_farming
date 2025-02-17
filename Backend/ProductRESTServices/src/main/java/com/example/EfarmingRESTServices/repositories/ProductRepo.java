package com.example.EfarmingRESTServices.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.EfarmingRESTServices.entities.Product;


@Repository
public interface ProductRepo extends JpaRepository<Product, Integer>{

}
