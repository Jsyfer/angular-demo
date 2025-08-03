import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor() { }
  
  ngOnInit(): void {
  }
  

  starttouch(event) {

  }

  endtouch(event) {
    console.log(event.target.nodeName);
    if(event.target.nodeName !== 'INPUT') {
      if(event.target.children[0].checked) {
        event.target.children[0].checked = false;
      }else {
        event.target.children[0].checked = true
      }
    }
  }
}
