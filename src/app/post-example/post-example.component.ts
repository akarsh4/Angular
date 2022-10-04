import { Component, OnInit } from '@angular/core';
import { DataService } from './Data-Service';
import { postData } from './postdataObj';

@Component({
  selector: 'app-post-example',
  templateUrl: './post-example.component.html',
  styleUrls: ['./post-example.component.css']
})
export class PostExampleComponent implements OnInit {
  data!:string;
  postData!: postData;
 

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

sendData(){
  this.postData = new postData();
  this.postData.body = "test data";
  this.postData.title = "Some Title";
  this.postData.userId= 10;
  this.dataService.addPost(this.postData)
  .subscribe(data => console.log(data))
  
}

}
