import { Component, OnInit } from '@angular/core';
import { UserDetailsModel } from '../shared/models/UserDetailsModel';
import { UserDetailsService } from '../shared/services/UserDetails.service';
import { ChatRow } from '../shared/models/ChatRow';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent implements OnInit {
  activeArray = [false, false, false];
  msgValid = false;
  // link = window.location.href;
  chatRowsArr = [[], [], []];
  currentRoomIndex = 0;  
  user: UserDetailsModel;
  message: string;
  fontSize = 12;
  errorEmptyMsg=false;
  errorCharMsg=false;
  // get the service
  constructor(private userDetailsService: UserDetailsService) {
    this.user = <UserDetailsModel>this.userDetailsService.userDetails.data;
  }
// on init check in which tab you are
  ngOnInit() {

    let link = window.location.href;
    if (link.indexOf("tab1") > -1) {
      this.activeArray[0] = true;
    }
    else if (link.indexOf("tab2") > -1) {
      this.activeArray[1] = true;
    }
    else if (link.indexOf("tab3") > -1) {
      this.activeArray[2] = true;
    }
    else{
      this.activeArray[0] = true;
    }
  }
  // active room function checking in which tab you are and make this tab acive
  activeRoom(index) {
    this.activeArray = [false, false, false];
    this.activeArray[index] = true;
    this.currentRoomIndex = index;

  }
  // send message function making validation before sending the message 
  sendMessage() {    

    let chatRow = new ChatRow();
    chatRow.nick = this.user.nick;
    chatRow.message = this.message;
    chatRow.color = this.user.color;
    chatRow.date = new Date();
    if(this.message === undefined || this.message ===""){
      this.errorCharMsg=false;
      this.errorEmptyMsg=true;
    }
    else if(this.message.length<4 || this.message.length>=255){
      this.errorEmptyMsg=false;
      this.errorCharMsg=true;
    }
    else{
      this.errorCharMsg=false;
      this.errorEmptyMsg=false;
      this.chatRowsArr[this.currentRoomIndex].push(chatRow);
      this.message = "";
    }     
  }
  // delete message from current tab
  deleteMessage(){
    this.chatRowsArr[this.currentRoomIndex]=[];
  }
  // increasing the size of text
  maxSize(){
    this.fontSize++;
  }
  // decreasing the size of text
  minSize(){
    this.fontSize--;
  }
}
