import { Component, OnInit } from '@angular/core';
import { Content } from '../models/content';
import { SigninService } from '../services/sign-in.service';
import { ContentsService } from '../services/contents.service';
import {Messages} from '../messages'
import {Platform, AlertController, NavController, ToastController, LoadingController} from '@ionic/angular'

@Component({
  selector: 'app-appt',
  templateUrl: './appt.page.html',
  styleUrls: ['./appt.page.scss'],
})
export class ApptPage implements OnInit {

  startDate:any;
  endDate:any;
  title: string;
  content : Content = new Content();
  message: string = "";
  link: string = "";
  description: string = "";
  toast: any;


  constructor(private navCtrl: NavController, private signinService: SigninService, private contentService: ContentsService, private messages : Messages, private toastCtrl: ToastController) { }
  ngOnInit() {
    this.title = "";
  }


  save() {
   this.validate();
    if ( this.message.length > 0 )
    {
     this.showToast(this.message);
     this.message = "";
     return;
    }

   this.title = this.signinService.title;
   this.content = new Content();
   this.content.login = this.signinService.user.login;
   this.content.title = this.signinService.title;;
   this.content.type = "appt";
   this.content.startDate = this.startDate;
   this.content.endDate = this.endDate;
   this.content.link = this.link;
   this.content.description = this.description;
   this.content.thumbnail = "assets/img/calendar.png";
   this.content.link = this.title + Math.floor(Math.random() * 10000000);;
   this.contentService.createContent(this.content).subscribe((response) => {
      this.navCtrl.navigateForward("tab1")
     });

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
