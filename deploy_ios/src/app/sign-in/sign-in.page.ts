import { Component, OnInit } from '@angular/core';
import {SigninService} from '../services/sign-in.service'
import {ContentsService} from '../services/contents.service'
import {User} from '../models/user'
import {Platform,  NavController} from '@ionic/angular'
import { Messages } from '../messages';
import { Api } from '../api';
import { ToastController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Device } from '@ionic-native/device';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {

  ngOnInit() {
  }
  login: string;
  savedLogin: string;
  hlink: String;
  password: string;
  toast: any;
  message: string = "Login error";
  platforms: string = "ios";
  user: User;
  error = false;
    constructor(private api: Api, private signinService: SigninService, private contentsService: ContentsService, 
      private toastCtrl: ToastController, 
      private navCtrl: NavController, 
      private messages: Messages,
      private activatedRoute:ActivatedRoute
      )
     {
     this.activatedRoute.queryParams.subscribe(params => {
      if ( params['login'] != null && params['login'] != undefined )
       this.signinService.user.login = params['login'];
       console.log(this.signinService.user.login);
      this.hlink = this.signinService.hlink;
      this.login = this.signinService.user.login;
      console.log(this.login);
      this.user = new User();
      this.user.login = this.signinService.user.login;
      console.log(this.user.login);
      });
     }
    async signinJwt() {
      this.signinService.jwtLogin(this.signinService.user.login, this.password).subscribe(response => {
        console.log(response);
        console.log(Device.uuid);
        this.signinService.uuid = Device.uuid;
        // this.signinService.uuid = "B2781486-7429-4A35-8FF7-BB24A0CA0C65";
        console.log(response.token.length);
        this.signinService.jwt.token = response.token;
        
        this.signinService.httpOptionsAuth = {
      		headers: new HttpHeaders({
      		'Content-Type': 'application/json',
      		'Authorization' : 'Bearer ' + this.signinService.jwt.token
     	   })
    	}
        this.message = this.messages.success;
        this.signinService.logged = true;
        this.setCookie("jwt",  this.signinService.jwt.token, 2);
        this.navCtrl.navigateForward('tabs');
      });
      await this.sleep(500);
      this.showToast(this.message);
      this.message = this.messages.error;
    }
    async signin() {
      this.error = true;
      console.log(this.signinService.user.login);
      this.savedLogin = this.signinService.user.login; 
      console.log(this.password);
      this.signinService.login(this.signinService.user.login, this.password).subscribe(response => {
        // this.hideToast();
        this.user = response;
	this.signinService.user = this.user;
        this.signinService.user.login = this.savedLogin;
        console.log(this.user.login);
        console.log(this.password);
        console.log(this.user.password);
        if ( this.user.password.localeCompare(this.password) == 0 ) {
          this.message = this.messages.success;
          this.signinService.logged = true;
          this.error = false;
          this.navCtrl.navigateForward('tabs');
        }
      });
      await this.sleep(500);
      this.showToast(this.message);
      this.message = this.messages.error;
    }
    signup() {
      this.navCtrl.navigateForward('eula');
    }
    deleteAccount() {
      this.navCtrl.navigateForward('delete-account');
    }
    showToast(message : string) {
      this.toast = this.toastCtrl.create({
        message: message,
        duration: 2000
      }).then((toastData) => {
        console.log(toastData);
        toastData.present();
      });
    }
    hideToast() {
      this.toast = this.toastCtrl.dismiss();
    }
    sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
   }
  setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
 getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
ionViewDidEnter() {
  this.activatedRoute.queryParams.subscribe(params => {
     if ( params['login'] != null && params['login'] != undefined ) 
      this.signinService.user.login = params['login'];
    });
}

}
