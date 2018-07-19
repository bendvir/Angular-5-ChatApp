import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDetailsService } from '../shared/services/UserDetails.service';
import { UserDetailsModel } from '../shared/models/UserDetailsModel';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  color:string;
  nickName:string;
  loginPage=false;
  errorMsg=false;
  // get the service and router
  constructor(public router:Router, private userDetailsService:UserDetailsService) { }

  ngOnInit() {
   
  }
  login(){
    let user = new UserDetailsModel();
    user.color = this.color;
    user.nick = this.nickName;
    this.userDetailsService.userDetails.data = user;
    let strNick = /^[a-zA-Z(\s)0-9]+$/;
    let hexColor = /^#[0-9a-fA-F]{3,6}$/;
    // validation for empty fields
    if(user.nick === undefined || user.color === undefined || user.nick ==="" || user.color ===""){
      this.errorMsg=true
    }
    // validation of nick name < 3 chars
    else if(user.nick.length<3){
      this.errorMsg=true
    }
    // validation of regex on nick name and color
    else if(!strNick.test(user.nick) || !hexColor.test(user.color)){
      this.errorMsg=true
    }
    // if no error move to MainPage component
    else{      
      this.router.navigate(["/mainPage"]);
    }
    
  }
}
