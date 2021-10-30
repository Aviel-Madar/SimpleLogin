import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginBean, LoginDataService } from './../service/data/login-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginForm: FormGroup = this.formBuilder.group({
    dob: ['', [Validators.required, Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.pattern('(?=\\D*\\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{6,30}'),
    Validators.minLength(6)]]

  });
  email = 'aviel311@gmail.com'
  myPassword = 'Aa1234'
  invalidLogin = false
  errorMessage = 'Invalid Credentials'

  submitted = false;

  password='';
  show = false;

  constructor(private formBuilder: FormBuilder, private router: Router, private service: LoginDataService) { }

  ngOnInit() {this.password = 'password'; }


  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginForm.value, null, 4));
  }

  onReset() {
    this.submitted = false;
    this.loginForm.reset();
  }

  onClick() {
    if (this.password === 'password') {
      this.password = 'text';
      this.show = true;
    } else {
      this.password = 'password';
      this.show = false;
    }
  }

  


  handleLogin() {

    this.service.executeLoginServiceWithRequestBody(this.email, this.myPassword).subscribe(
      response => this.verify(response));
  }

  
  verify(response: LoginBean) {
    if (response.verify === false) {
      this.invalidLogin = true
    }
    else {
      this.invalidLogin = false
    }

    if (!(this.invalidLogin)) {

      this.router.navigate(['welcome', this.email])
      this.invalidLogin = false

    } else {

      this.invalidLogin = true
      
    }
  }



 
}

