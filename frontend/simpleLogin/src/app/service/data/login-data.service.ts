import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class LoginDetails {
  constructor(
    public email: string,
    public password: string
  ) { }
}

export class LoginBean {
  constructor(public verify: Boolean) { }
}

@Injectable({
  providedIn: 'root'
})


export class LoginDataService {

  constructor(
    private http: HttpClient,
  ) { }



  executeLoginServiceWithRequestBody(myEmail: string, myPassword: string) {

    let loginDetails = new LoginDetails(myEmail, myPassword)
    return this.http.post<LoginBean>(`http://localhost:8080//try-logging-in`, loginDetails);
    
  }

}
