import { Component, OnInit } from '@angular/core';
import {SigninService} from '../services/sign-in.service';
import { Content } from '../models/content';
import { NavController, ToastController, LoadingController } from '@ionic/angular';
import { ContentsService } from '../services/contents.service';
import {Messages} from '../messages'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  constructor(private contentService: ContentsService, private signinService: SigninService, private navCtrl : NavController, private messages : Messages,  private toastCtrl: ToastController) { }
  email : string = "";
  phone : string = "";
  content: Content = new Content();
  message: string = "";
  toast: any;


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
   this.content.title = this.signinService.title;
   this.content.email = this.email;
   this.content.phone = this.phone;
   this.content.type = "contact";
   this.content.link = this.email + this.phone;
   this.content.thumbnail = "assets/img/admin.png";
   this.contentService.createContent(this.content).subscribe((response) => {
      this.signinService.page = "tab1";
      this.navCtrl.navigateForward("tab1")
     });
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
