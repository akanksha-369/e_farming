package com.example.EfarmingRESTServices.entities;

import java.util.ArrayList;
import java.util.List;


import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name="product")
public class Product {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int pid;
	String pname;
	
//	@OneToMany(mappedBy = "product", cascade=CascadeType.ALL)
//	List<ProductType> uList= new ArrayList<>();
	
	public Product() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Product(int pid, String pname) {
		super();
		this.pid = pid;
		this.pname = pname;
	}
	public int getPid() {
		return pid;
	}
	public void setPid(int pid) {
		this.pid = pid;
	}
	public String getPname() {
		return pname;
	}
	public void setPname(String pname) {
		this.pname = pname;
	}
	
	
}
