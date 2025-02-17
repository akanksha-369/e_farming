package com.example.EfarmingRESTServices.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.EfarmingRESTServices.entities.Role;


@Repository
public interface RoleRepository extends JpaRepository<Role, Integer> {
	
}
