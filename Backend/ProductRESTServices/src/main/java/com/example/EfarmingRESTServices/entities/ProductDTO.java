package com.example.EfarmingRESTServices.entities;

public class ProductDTO {
    String productName;
    String productTypeName;
    int quantity;
    double price;

    public ProductDTO(String productName, String productTypeName, int quantity, double price) {
        this.productName = productName;
        this.productTypeName = productTypeName;
        this.quantity = quantity;
        this.price = price;
    }

	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public String getProductTypeName() {
		return productTypeName;
	}

	public void setProductTypeName(String productTypeName) {
		this.productTypeName = productTypeName;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

    
}

