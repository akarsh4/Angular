import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

import { Observable } from 'rxjs';
import { products } from './products';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private url: string = "http://localhost:8082/products";

  

  constructor(private http:HttpClient) { }
  getEmployees(): Observable<products[]> {
    return this.http.get<products[]>(this.url);
  }

}
