import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  login(email: string, password: string){

    const body = { email, password }
    
    return this.http.post('http://localhost:3000/api/login', body)

  }

  register(register){


    return this.http.post('http://localhost:3000/api/usuarios', register)

  }

  constructor(private http: HttpClient) { }
}
