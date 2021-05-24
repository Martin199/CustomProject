import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  token:boolean;
  constructor() {}

  ngOnInit(): void {
    this.validarToken();
  }

  validarToken(){
    if(localStorage.getItem('token')){
      this.token=true;
    }else{
      this.token=false;
    }
  }

  logout(){
    this.token=false;
    localStorage.clear()
  }

}
