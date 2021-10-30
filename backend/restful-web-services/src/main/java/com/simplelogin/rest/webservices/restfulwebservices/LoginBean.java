package com.simplelogin.rest.webservices.restfulwebservices;

public class LoginBean {

	private Boolean verify;


	public LoginBean(Boolean verify) {
		this.verify = verify;
	}

	public Boolean getVerify() {
		return verify;
	}

	public void setVerify(Boolean verify) {
		this.verify = verify;
	}

	@Override
	public String toString() {
		return String.format("LoginBean [verify=%s]", verify);
	}

}

