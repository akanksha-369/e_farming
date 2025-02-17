	package com.knowit.EFarming.entities;
	
	import jakarta.persistence.Entity;
	import jakarta.persistence.GeneratedValue;
	import jakarta.persistence.GenerationType;
	import jakarta.persistence.Id;
	import jakarta.persistence.JoinColumn;
	import jakarta.persistence.ManyToOne;
	import jakarta.persistence.Table;
	
	@Entity
	@Table(name="user")
	public class User {
		@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)
		int uid;
		String uname;
		String pwd;
		String fname;
		String lname;
		@ManyToOne
		@JoinColumn(name = "rid", nullable = false)
		Role role;
		String email;
		String address;
		@ManyToOne
		@JoinColumn(name="cid", nullable = false)
		City city;
		String contact;
		String adhaar;
		
		public User() {
			super();
			// TODO Auto-generated constructor stub
		}
	
		public User(int uid, String uname, String pwd, String fname, String lname, Role role, String email, String address,
				City city, String contact, String adhaar) {
			super();
			this.uid = uid;
			this.uname = uname;
			this.pwd = pwd;
			this.fname = fname;
			this.lname = lname;
			this.role = role;
			this.email = email;
			this.address = address;
			this.city = city;
			this.contact = contact;
			this.adhaar = adhaar;
		}
	
		public int getUid() {
			return uid;
		}
	
		public void setUid(int uid) {
			this.uid = uid;
		}
	
		public String getUname() {
			return uname;
		}
	
		public void setUname(String uname) {
			this.uname = uname;
		}
	
		public String getPwd() {
			return pwd;
		}
	
		public void setPwd(String pwd) {
			this.pwd = pwd;
		}
	
		public String getFname() {
			return fname;
		}
	
		public void setFname(String fname) {
			this.fname = fname;
		}
	
		public String getLname() {
			return lname;
		}
	
		public void setLname(String lname) {
			this.lname = lname;
		}
	
		public Role getRole() {
			return role;
		}
	
		public void setRole(Role role) {
			this.role = role;
		}
	
		public String getEmail() {
			return email;
		}
	
		public void setEmail(String email) {
			this.email = email;
		}
	
		public String getAddress() {
			return address;
		}
	
		public void setAddress(String address) {
			this.address = address;
		}
	
		public City getCity() {
			return city;
		}
	
		public void setCity(City city) {
			this.city = city;
		}
	
		public String getContact() {
			return contact;
		}
	
		public void setContact(String contact) {
			this.contact = contact;
		}
	
		public String getAdhaar() {
			return adhaar;
		}
	
		public void setAdhaar(String adhaar) {
			this.adhaar = adhaar;
		}
		
		
	}
