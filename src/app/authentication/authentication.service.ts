import { Injectable, Output, EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient} from "@angular/common/http";
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  baseUrl = environment.server;
  
  //Permet de refresh la menuBar quand un utilisateur se connecte
  @Output() loggedEvent: EventEmitter<any> = new EventEmitter();
  
  constructor(private http: HttpClient, private router: Router) { }

  public login(value: any) {
    return this.http.post(`${this.baseUrl}/auth/login`, value)
      .pipe(
        map((data) => {
          localStorage.setItem('token', data['token']);
          this.router.navigate(['/me']);
          
          //La solution ultime qui évite ce satané window.location.reload() qui faisait planter l'application
          //All Hail les EventEmitter
          this.loggedEvent.emit('logged');


          //window.location.reload();
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
