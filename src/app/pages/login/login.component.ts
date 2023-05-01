import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 
  email : string = "";
  password : string = "";

  constructor(private auth : AuthService, private router : Router){}

  ngOnInit(): void {
  }
  
  login(){

    if(this.email == ''){
      alert("Kérlek írj email-címet!")
      return;
    }
    if(this.password == ''){
      alert("Kérlek írj jelszót!")
      return;
    }
    
    this.auth.login(this.email, this.password);

    this.email = '';
    this.password = '';
  }
}
