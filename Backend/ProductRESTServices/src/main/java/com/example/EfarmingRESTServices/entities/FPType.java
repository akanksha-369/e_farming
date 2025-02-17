package com.example.EfarmingRESTServices.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "farmerproducttype")
public class FPType {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int fptid;
	@ManyToOne
    @JoinColumn(name = "uid", nullable=false)  
    User user;
	@ManyToOne
    @JoinColumn(name = "ptid", nullable=false)  
    ProductType ptype;
	int qty;
    double price;
    byte [] images;	
    
	public int getFptid() {
		return fptid;
	}

	public void setFptid(int fptid) {
		this.fptid = fptid;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public ProductType getPtype() {
		return ptype;
	}

	public void setPtype(ProductType ptype) {
		this.ptype = ptype;
	}

	public int getQty() {
		return qty;
	}

	public void setQty(int qty) {
		this.qty = qty;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}
	
	public byte[] getImages() {
        return images;
    }

    public void setImages(byte[] images) {
        this.images = images;
    }

	
	public FPType() {
		super();
		// TODO Auto-generated constructor stub
	}
	

	public FPType(int fptid, User user, ProductType ptype, int qty, double price, byte[] images) {
		super();
		this.fptid = fptid;
		this.user = user;
		this.ptype = ptype;
		this.qty = qty;
		this.price = price;
		this.images=images;
	}
	
	public FPType(User user, ProductType ptype, int qty, double price) {
		super();
		this.user = user;
		this.ptype = ptype;
		this.qty = qty;
		this.price = price;
	}

	@Override
	public String toString() {
		return "FPType [fptid=" + fptid + ", user=" + user + ", ptype=" + ptype + ", qty=" + qty + ", price=" + price
				+ "]";
	}
    
}
