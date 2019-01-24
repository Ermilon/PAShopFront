import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = environment.server;
  
  constructor(private http: HttpClient) { }

  public getUserInfos(){
    let headers = new HttpHeaders();
    let authToken = localStorage.getItem('token');
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Authorization', `Bearer ${authToken}`);
    return this.http.get(`${this.baseUrl}/auth/me`, {headers:headers}) // le client http était l'ancien (angular/http) là le client http vient de (angular/common/http)
    .pipe(
      map((data) => {
        return data;
      }, (err) => {
        console.log('An error occured', err);
      })
    )
  }

  public getUserBasket(){
    let headers = new HttpHeaders();
    let authToken = localStorage.getItem('token');
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Authorization', `Bearer ${authToken}`);

    return this.http.get(`${this.baseUrl}/baskets/mine`, {headers:headers}) // le client http était l'ancien (angular/http) là le client http vient de (angular/common/http)
    .pipe(
      map((data) => {
        return data;
      }, (err) => {
        console.log('An error occured', err);
      })
    )
  }
}
