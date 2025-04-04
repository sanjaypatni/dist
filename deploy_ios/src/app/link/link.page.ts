import { Component, OnInit } from '@angular/core';
import {SigninService} from '../services/sign-in.service';
import { Content } from '../models/content';
import { NavController, ToastController, LoadingController } from '@ionic/angular';
import { ContentsService } from '../services/contents.service';
import {Messages} from '../messages'

@Component({
  selector: 'app-link',
  templateUrl: './link.page.html',
  styleUrls: ['./link.page.scss'],
})
export class LinkPage implements OnInit {
  link : string = "";
  content: Content = new Content();
  message: string = "";
  toast: any;

  constructor(private contentService: ContentsService, private signinService: SigninService, private navCtrl : NavController, private messages : Messages,  private toastCtrl: ToastController) { }

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
   this.content.type = "link";
   this.content.link = this.link;
   this.content.thumbnail = "assets/img/link.png";
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
