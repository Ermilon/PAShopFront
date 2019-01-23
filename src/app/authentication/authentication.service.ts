import { Injectable } from '@angular/core';
//import {  Http,RequestOptions } from '@angular/http'; deprecated
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpHeaders , HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  baseUrl = "https://localhost:44336/api";
  
  constructor(private http: HttpClient) { }

  public login(value: any) {
    return this.http.post(`${this.baseUrl}/auth/login`, value)
      .pipe(
        map((data) => {
          localStorage.setItem('token', data['token']);
        }, (err) => {
          console.log('An error occured', err);
        })
      )
  }

  public register(value: any) {
    return this.http.post(`${this.baseUrl}/users`, value)
    .pipe(
      map((data) => {
        return JSON.stringify(data);
      }, (err) => {
        console.log('An error occured', err);
      })
    )
  }

  public getUserInfos(){

    let headers = new HttpHeaders();
    let authToken = localStorage.getItem('token');
    console.log('le token',authToken);
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Authorization', `Bearer ${authToken}`);

    return this.http.get(`${this.baseUrl}/auth/me`, {headers:headers}) // le client http était l'ancien (angular/http) là le client http vient de (angular/common/http)
    .pipe(
      map((data) => {
        return JSON.stringify(data);
      }, (err) => {
        console.log('An error occured', err);
      })
    )
  }
}
