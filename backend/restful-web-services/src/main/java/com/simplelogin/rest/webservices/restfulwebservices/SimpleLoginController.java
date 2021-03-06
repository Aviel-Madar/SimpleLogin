package com.simplelogin.rest.webservices.restfulwebservices;


import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin(origins="http://localhost:4200")

@RestController
public class SimpleLoginController {
	@GetMapping(path = "/welcome/path-variable/{name}")
	public WelcomeBean welcomePathVariable(@PathVariable String name) {
		return new WelcomeBean(String.format("Welcome, %s ,You have successfully logged in", name));
	}
	
	@PostMapping(path= "/try-logging-in")
	public LoginBean checksCredentials(@RequestBody LoginDetails loginDetails) {
		if (loginDetails.getEmail().equals("aviel311@gmail.com") &&
				loginDetails.getPassword().equals("Aa1234")) {
			return new LoginBean(true);
		}
		else {
			return new LoginBean(false);
		}
		
	}
	
}
