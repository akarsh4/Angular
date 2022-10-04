import { Component, OnInit } from '@angular/core';

import { products } from '../products';

import { ProductsService } from '../products.service';



@Component({

  selector: 'app-products-details',

  templateUrl: './products-details.component.html',

  styleUrls: ['./products-details.component.css']

})

export class ProductsDetailsComponent implements OnInit {

  public products!: products[];

  constructor(private productsService: ProductsService) { }



  ngOnInit(): void {

    this.productsService.getEmployees()

    .subscribe(data => this.products = data)

  }



}