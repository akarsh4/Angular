import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-my-reactive',
  templateUrl: './my-reactive.component.html',
  styleUrls: ['./my-reactive.component.css']
})
export class MyReactiveComponent implements OnInit {
  form:any;
  fname!: string;
  lname!: string;
  constructor() { }

  ngOnInit(): void {
    this.form= new FormGroup({
      firstname: new FormControl("", Validators.compose([Validators.required,
      Validators.minLength(3)])),
      lastname: new FormControl("ln")
    })
  }

  showValue(user: any){
    this.fname = user.firstname;
    this.lname = user.lastname;
    console.log(user);
  }

}
