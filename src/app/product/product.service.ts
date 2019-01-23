import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl = "https://localhost:44336/api";
  
  constructor(private http: HttpClient) { }

  public getAllProducts(): Observable<any> {
    return this.http.get(`${this.baseUrl}/items`)
    .pipe(map((data)=>{
      return data;
    }, (err) => {
      console.log('An error occured', err);
    }))
  }
}
