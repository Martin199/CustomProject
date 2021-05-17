import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  response:any;
  email:string;
  password:string;
  ErrorMessage:string;

  login(){
    this.LoginService.login(this.email, this.password)
                      .subscribe(
                        // Successful responses call the first callback.
                        data => {
                          this.response=data
                        },
                        // Errors will call this callback instead:
                        err => {
                          this.ErrorMessage=err.error;
                          console.log(this.ErrorMessage)
                        }
                        
                      )
  }

  constructor(private LoginService: LoginService) { }

  ngOnInit(): void {}

}
