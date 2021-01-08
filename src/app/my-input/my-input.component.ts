import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-input',
  templateUrl: './my-input.component.html',
  styleUrls: ['./my-input.component.css']
})
export class MyInputComponent implements OnInit {
  text_value;
  constructor() { }

  ngOnInit() {
  }

}