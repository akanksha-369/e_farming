package com.example.EfarmingRESTServices.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="producttype")
public class ProductType {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int ptid;
	@ManyToOne
	@JoinColumn(name = "pid", nullable = false)
	Product product;
	String ptname;
	public ProductType() {
		super();
		// TODO Auto-generated constructor stub
	}
	public ProductType(int ptid, Product product, String ptname) {
		super();
		this.ptid = ptid;
		this.product= product;
		this.ptname = ptname;
	}
	public int getPtid() {
		return ptid;
	}
	public void setPtid(int ptid) {
		this.ptid = ptid;
	}
	public Product getProduct() {
		return product;
	}
	public void setProduct(Product product) {
		this.product = product;
	}
	public String getPtname() {
		return ptname;
	}
	public void setPtname(String ptname) {
		this.ptname = ptname;
	}
	
	
}