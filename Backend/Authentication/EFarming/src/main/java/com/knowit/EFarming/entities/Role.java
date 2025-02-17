package com.knowit.EFarming.entities;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name="role")
public class Role {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "rid")
	int rid;
	String rname;
	
	//One role has many users
	@OneToMany(mappedBy = "role", cascade=CascadeType.ALL)
	List<User> uList= new ArrayList<>();
	
	
	public Role() {
		super();
		// TODO Auto-generated constructor stub
	}


	public Role(int rid, String rname) {
		super();
		this.rid = rid;
		this.rname = rname;
	}


	public int getRid() {
		return rid;
	}


	public void setRid(int rid) {
		this.rid = rid;
	}


	public String getRname() {
		return rname;
	}


	public void setRname(String rname) {
		this.rname = rname;
	}
	
	
}
