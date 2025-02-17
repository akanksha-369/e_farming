package com.example.EfarmingRESTServices.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.EfarmingRESTServices.entities.FPType;

import jakarta.transaction.Transactional;

@Transactional
@Repository
public interface FPTypeRepo extends JpaRepository<FPType, Integer>{
@Query(nativeQuery=true, value="select fptid, uid, ptid, qty, price from farmerproducttype where uid=:uid")
Optional<Object[]> getProducts(@Param("uid") int uid);
	
	@Query(nativeQuery=true, value="SELECT p.pname, pt.ptname, f.qty, f.price FROM product p " +
	           "JOIN producttype pt ON p.pid = pt.pid " +
	           "JOIN farmerproducttype f ON pt.ptid = f.ptid " +
	           "WHERE f.uid = :uid")
	    List<Object[]> getProductsByUserId(int uid);
	    
	    @Modifying
	    //@Query(nativeQuery=true, value="update farmerproducttype set images = :file where fptid = :id")
	    @Query("update FPType set images = :file where fptid = :id")
	    public int uploadPhoto(int id, byte [] file);
}
