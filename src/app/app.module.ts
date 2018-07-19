import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { ColorPickerModule } from 'ngx-color-picker';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { HeaderComponent } from './header/header.component';
import { ChatRoomComponent } from './chat-room/chat-room.component';
import { UserDetailsService } from './shared/services/UserDetails.service';
import {FormsModule} from '@angular/forms';

const appRoutes: Routes = [
  {path:'',component:LoginPageComponent},
  {path:'mainPage',component:MainPageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    MainPageComponent,
    HeaderComponent,
    ChatRoomComponent,

    // [ColorPickerModule]
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ColorPickerModule,
    FormsModule
    // [ColorPickerModule]
  ],
  providers: [UserDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
