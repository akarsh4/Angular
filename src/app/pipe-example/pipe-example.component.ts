import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-example',
  templateUrl: './pipe-example.component.html',
  styleUrls: ['./pipe-example.component.css']
})
export class PipeExampleComponent implements OnInit {
  name = "SONATA"
  day = new Date();
  price = 500;
  arr = [10,60,30,40];
  str = ['a', 'b','c','d']
  constructor() { }

  ngOnInit(): void {
  }

}
