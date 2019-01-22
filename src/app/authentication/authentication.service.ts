import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  baseUrl = "https://localhost:44336/api/";
  
  constructor(private http: Http) { }

  public login(value: any) {
    return this.http.post(`${this.baseUrl}auth/login`, value)
      .pipe(
        map((data) => {
          return data.json();
        }, (err) => {
          console.log('An error occured', err);
        })
      )
  }
}
