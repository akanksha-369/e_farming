package com.example.EfarmingRESTServices.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.EfarmingRESTServices.entities.ProductType;

public interface ProductTypeRepo extends JpaRepository<ProductType, Integer>{
@Query(nativeQuery=true, value="SELECT pt.ptid, pt.ptname FROM product p JOIN producttype pt ON p.pid = pt.pid WHERE p.pid = :pid")
List<Object> getProductsByProductId(@Param("pid") int pid);
}
