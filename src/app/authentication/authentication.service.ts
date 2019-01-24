import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient} from "@angular/common/http";
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  baseUrl = environment.server;
  
  constructor(private http: HttpClient, private router: Router) { }

  public login(value: any) {
    return this.http.post(`${this.baseUrl}/auth/login`, value)
      .pipe(
        map((data) => {
          localStorage.setItem('token', data['token']);
          this.router.navigate(['/me']);
          window.location.reload()
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
}
