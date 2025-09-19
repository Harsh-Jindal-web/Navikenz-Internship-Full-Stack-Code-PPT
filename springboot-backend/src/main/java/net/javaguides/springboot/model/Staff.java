//package net.javaguides.springboot.model;
//
//import jakarta.persistence.*;
//
//@Entity
//@Table(name = "staffs")
//public class Staff {
//	
//	@Id
//	@GeneratedValue(strategy = GenerationType.IDENTITY)
//	private long id;
//	
//	@Column(name = "first_name")
//	private String firstName;
//
//	@Column(name = "last_name")
//	private String lastName;
//	
//	@Column(name = "email_id")
//	private String emailId;
//	
//	public Staff() {
//		
//	}
//	
//	public Staff(String firstName, String lastName, String emailId) {
//		super();
//		this.firstName = firstName;
//		this.lastName = lastName;
//		this.emailId = emailId;
//	}
//	
//	public long getId() {
//		return id;
//	}
//	
//	public void setId(long id) {
//		this.id = id;
//	}
//	
//	public String getFirstName() {
//		return firstName;
//	}
//	
//	public void setFirstName(String firstName) {
//		this.firstName = firstName;
//	}
//	
//	public String getLastName() {
//		return lastName;
//	}
//	
//	public void setLastName(String lastName) {
//		this.lastName = lastName;
//	}
//	
//	public String getEmailId() {
//		return emailId;
//	}
//	
//	public void setEmailId(String emailId) {
//		this.emailId = emailId;
//	}
//}

package net.javaguides.springboot.model;

import jakarta.persistence.*;

@Entity
@Table(name = "staffs")
public class Staff {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "first_name")
	private String firstName;

	@Column(name = "last_name")
	private String lastName;
	
	@Column(name = "email_id")
	private String emailId;
	
	@Column(name = "salary")
	private double salary;
	
	@Column(name = "mobile_phone")
	private String mobilePhone;
	
	public Staff() {
		
	}
	
	public Staff(String firstName, String lastName, String emailId, double salary, String mobilePhone) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.emailId = emailId;
		this.salary = salary;
		this.mobilePhone = mobilePhone;
	}
	
	public long getId() {
		return id;
	}
	
	public void setId(long id) {
		this.id = id;
	}
	
	public String getFirstName() {
		return firstName;
	}
	
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	
	public String getLastName() {
		return lastName;
	}
	
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	
	public String getEmailId() {
		return emailId;
	}
	
	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}
	
	public double getSalary() {
		return salary;
	}
	
	public void setSalary(double salary) {
		this.salary = salary;
	}
	
	public String getMobilePhone() {
		return mobilePhone;
	}
	
	public void setMobilePhone(String mobilePhone) {
		this.mobilePhone = mobilePhone;
	}
}
