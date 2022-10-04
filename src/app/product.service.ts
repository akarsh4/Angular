import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
url="http://localhost:8803/products";
  constructor(private http:HttpClient) { }
  products(){
    return this.http.get(this.url);
  }
}
