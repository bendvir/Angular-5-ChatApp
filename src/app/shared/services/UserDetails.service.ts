import { Injectable } from "@angular/core";
import { UserDetailsModel } from "../models/UserDetailsModel";


@Injectable()
export class UserDetailsService {
    user:UserDetailsModel = new UserDetailsModel();
    userDetails = {data: { }}; // save the data of user and share it with all the componets
    constructor(){
        this.user.color = "";
        this.user.nick = "";
        this.userDetails.data = this.user;
    }

}