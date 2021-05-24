import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { Register, RegisterErrorMessage } from '../../interfaces/login.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public token:string;
  response:any;
  email:string;
  password:string;
  ErrorMessage:string;
  password2:string;


  RegisterError:RegisterErrorMessage;
  PasswordValidation:boolean=false;

  register: Register ={
    "password": "",
    "email" : "",
    "name" : "",
    "surname" : "",
    "phone" : "",
    "dni": "",
    "direction": "",
    "directionNumber": "",
    "location" : ""
  }

  constructor(private LoginService: LoginService, private router: Router) { }

  ngOnInit(): void {}

  login(){
    this.LoginService.login(this.email, this.password)
                      .subscribe(
                        // Successful responses call the first callback.
                        data => {
                          this.response=data
                          this.token=this.response.token
                          localStorage.setItem('token', this.token);
                          this.router.navigateByUrl('/products')
                          console.log(this.token)
                        },
                        // Errors will call this callback instead:
                        err => {
                          this.ErrorMessage=err.error;
                          console.log(this.ErrorMessage)
                        }
                      )
    //window.location.href = "http://localhost:4200/"
  }

  registerUser(){


    if(this.register.password==this.password2){
      this.PasswordValidation=false
      this.LoginService.register(this.register)
                        .subscribe(
                          // Successful responses call the first callback.
                          data => {
                            this.response=data
                            this.token=this.response.token
                            this.router.navigateByUrl('/products')
                            localStorage.setItem('token', this.token);
                          },
                          // Errors will call this callback instead:
                          err => {
                            this.RegisterError=err
                            console.log(this.RegisterError)
                          }
                        )
                  
    }else{
      this.PasswordValidation=true
    }

  }

}
