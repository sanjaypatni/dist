import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController,  ToastController} from '@ionic/angular';
import { ContentsService } from '../services/contents.service';
import { Content } from '../models/content'
import { Api } from '../api';
import {SigninService} from '../services/sign-in.service'
import {Messages} from '../messages'

@Component({
  selector: 'app-text',
  templateUrl: './text.page.html',
  styleUrls: ['./text.page.scss'],
})
export class TextPage implements OnInit {
  content: Content = new Content();
  description: string = "";
  message: string = "";
  toast: any;

  constructor(private signinService: SigninService, private contentService : ContentsService, private router : Router, private navCtrl : NavController, private messages : Messages,  private toastCtrl: ToastController) { }

  ngOnInit() {
  }
  
  save() {
   this.validate();
    if ( this.message.length > 0 )
    {
     this.showToast(this.message);
     this.message = "";
     return;
    }
   this.content.login = this.signinService.user.login;
   this.content.link = this.signinService.title + Math.floor(Math.random() * 10000000) ;
   this.content.title = this.signinService.title;
   this.content.type = "text";
   this.content.taskStatus = "";
   this.content.description = this.description.substring(0, 2056);
   this.contentService.createContent(this.content).subscribe((response) => {
       this.signinService.page = "tab1";
      this.navCtrl.navigateForward("tab1")
     });
/**
   this.contentService.publishContent("content-post", this.content).subscribe((response) => {
      this.navCtrl.navigateForward("tab1")
    });
**/
  }
  cancel() {
   this.navCtrl.navigateBack("tab1");
  }
  validate() {
    if ( this.signinService.title != undefined ) {
     if (this.signinService.title.length < 4 )
      this.message = this.messages.titleLenght;
    }
    else
      this.message = this.messages.titleRequired;
  }
  showToast(message : string) {
  this.toast = this.toastCtrl.create({
    message: message,
    duration: 3000
  }).then((toastData) => {
    toastData.present();
  });
 }

}
