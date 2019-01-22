import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  //private baseUrl = 'http://localhost/';

  //constructor(private http: Http) { }

  //public getHot(): Observable<any> {
  //  return this.http.get(`${this.baseUrl}/`)
  //}
}
