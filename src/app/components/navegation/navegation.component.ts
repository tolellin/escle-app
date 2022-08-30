import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navegation',
  templateUrl: './navegation.component.html',
  styleUrls: ['./navegation.component.css']
})
export class NavegationComponent implements OnInit {

  url = "";
  mostrar = true;

  constructor() { }

  ngOnInit(): void {
    this.url = window.location.href;
    if (this.url == "http://localhost:4200/login" || this.url == "http://localhost:4200/signin" || this.url == "http://localhost:4200/aditionaldata" ) {
      this.mostrar = false;
    } else {
      this.mostrar = true;
    }
    console.log(this.mostrar);
  }

}
