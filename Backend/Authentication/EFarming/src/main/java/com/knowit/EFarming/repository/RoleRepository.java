package com.knowit.EFarming.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.knowit.EFarming.entities.Role;

@Repository
public interface RoleRepository extends JpaRepository<Role, Integer> {
	
}
