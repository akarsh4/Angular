import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent{
title= 'Api get method'
  constructor(private pdata:ProductService) {
    this.pdata.products().subscribe((data)=>{
      console.warn("data",data)
    })
   }



}
