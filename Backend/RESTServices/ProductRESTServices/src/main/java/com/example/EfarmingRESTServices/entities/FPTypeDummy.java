package com.example.EfarmingRESTServices.entities;


public class FPTypeDummy {
   int uid;
   int ptid;
   int qty;
   double price;
    
	

	public int getUid() {
		return uid;
	}

	public void setUid(int uid) {
		this.uid = uid;
	}

	public int getPtid() {
		return ptid;
	}

	public void setPtid(int ptid) {
		this.ptid = ptid;
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

	
	public FPTypeDummy() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	

	public FPTypeDummy(int uid, int ptid, int qty, double price) {
		super();
		this.uid = uid;
		this.ptid = ptid;
		this.qty = qty;
		this.price = price;
	}

	@Override
	public String toString() {
		return "FPTypeDummy [uid=" + uid + ", ptid=" + ptid + ", qty=" + qty + ", price=" + price
				+ "]";
	}
    
}
