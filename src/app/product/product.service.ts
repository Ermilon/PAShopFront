import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl = "https://localhost:44336/api";
  
  constructor(private http: HttpClient) { }

  public getAllProducts() {
    return this.http.get(`${this.baseUrl}/items`)
    .pipe(map((data)=>{
      return data;
    }, (err) => {
      console.log('An error occured', err);
    }))
  }

  public addProductToBasket(inProductId : any) {
    let headers = new HttpHeaders();
    let authToken = localStorage.getItem('token');
    console.log('le token',authToken);
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Authorization', `Bearer ${authToken}`);
    
    return this.http.post(`${this.baseUrl}/baskets/add/${inProductId}`, {}, {headers:headers})
    .pipe(
      map((data) => {
        return data;
      }, (err) => {
        console.log('An error occured', err);
      })
    )}

    public create(product : any){
      let headers = new HttpHeaders();
    let authToken = localStorage.getItem('token');
    console.log('le token',authToken);
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Authorization', `Bearer ${authToken}`);
    
    return this.http.post(`${this.baseUrl}/items`, product, {headers:headers})
    .pipe(
      map((data)=> {
        return data;
      }, (err) => {
        console.log('An error occured', err);
      }))}
}
