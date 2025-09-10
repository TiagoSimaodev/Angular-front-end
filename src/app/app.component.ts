import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from './service/login-service.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'projeto-angular-rest';
 
  constructor (private router: Router) {

  }
 
  ngOnInit(): void {
    if(localStorage.getItem('token') == null) {
      this.router.navigate(['login']);
    }

  }

  public sair() {
    localStorage.clear();
    this.router.navigate(['login']);
  }

  

}
