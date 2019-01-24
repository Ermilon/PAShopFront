import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl = environment.server;
  
  constructor(private http: HttpClient) { }

  public getAllProducts() {
    return this.http.get(`${this.baseUrl}/items/active`)
    .pipe(map((data)=>{
      return data;
    }, (err) => {
      console.log('An error occured', err);
    }))
  }

  public getHotProducts() {
    return this.http.get(`${this.baseUrl}/items/hot`)
    .pipe(
      map((data) => {
        return data;
      }, (err)=> {
        console.log('An error occured',err);
      })
    )
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

    public removeProductFromBasket(inProductId : any) {
      let headers = new HttpHeaders();
      let authToken = localStorage.getItem('token');
      console.log('le token',authToken);
      headers = headers.append('Content-Type', 'application/json');
      headers = headers.append('Authorization', `Bearer ${authToken}`);
      
      return this.http.post(`${this.baseUrl}/baskets/remove/${inProductId}`, {}, {headers:headers})
      .pipe(
        map((data) => {
          return data;
        }, (err) => {
          console.log('An error occured', err);
        })
      )}

    public getTva(){
      return this.http.get(`${this.baseUrl}/items/tva`)
      .pipe(
        map((data) => {
          return data;
        }, (err) => {
          console.log('An error occured', err);
        })
      )
    }

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
