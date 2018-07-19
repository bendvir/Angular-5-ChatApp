import { Component, OnInit } from '@angular/core';
import { UserDetailsService } from '../shared/services/UserDetails.service';
import { UserDetailsModel } from '../shared/models/UserDetailsModel';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  user:UserDetailsModel = new UserDetailsModel();
  constructor(private userDetailsService:UserDetailsService) {
    this.user = <UserDetailsModel>this.userDetailsService.userDetails.data;
   }

  ngOnInit() {
  }

}
