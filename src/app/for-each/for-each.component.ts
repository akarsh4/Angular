import { Component, OnInit } from '@angular/core';
import { hero } from './hero';
import { Products } from './Products';


@Component({
  selector: 'app-for-each',
  templateUrl: './for-each.component.html',
  styleUrls: ['./for-each.component.css']
})
export class ForEachComponent implements OnInit {
  heroes = ['IronMan', 'Hulk', 'Black Widow', 'Thor'];
  data = [new hero(1, "who"), new hero(2, "how")]
  prod = [new Products(1, "Keyboard", 2500), new Products(2, "Monitor", 50999), new Products(3, "Water Bottle", 1000)]

  constructor() { }

  ngOnInit(): void {
  }

}
