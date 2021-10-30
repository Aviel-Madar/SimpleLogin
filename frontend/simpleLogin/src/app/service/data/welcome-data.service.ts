import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class WelcomeBean {
  constructor(public message: string) { }
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http: HttpClient
  ) { }

  executeWelcomeServiceWithPathVariable(name: String) {
    return this.http.get<WelcomeBean>(`http://localhost:8080/welcome/path-variable/${name}`);

  }

}
