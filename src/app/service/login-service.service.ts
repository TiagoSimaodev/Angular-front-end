import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConstants } from '../app-constants';
import {Router} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http: HttpClient, private router: Router) { }

  login(usuario) {
    
    return this.http.post(AppConstants.baseLogin,JSON.stringify(usuario)).subscribe(data => {

      // retorno http
       var token = JSON.parse(JSON.stringify(data)).Authorization.split(' ')[1];
      //armazenar/esconder no front end
       localStorage.setItem("token", token);

      console.info("token:" + localStorage.getItem("token"));
       
      this.router.navigate(['home']);
      
    },
    error => {
      console.error("Erro ao fazer login");
      alert('Acesso negado')
    }

  )

  }

}
