import { Component } from '@angular/core';
import {Platform, AlertController, NavController, ToastController, LoadingController} from '@ionic/angular'
import {Messages} from '../messages'
import {SigninService} from '../services/sign-in.service'
import { Api } from '../api';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Content } from '../models/content';
import { ContentsService } from '../services/contents.service';
import { SubscriptionService } from '../services/subscription.service';
import { SelectMultipleControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-create-contents',
  templateUrl: './create-contents.page.html',
  styleUrls: ['./create-contents.page.scss'],
})
export class CreateContentsPage  {
  picture = "https://playclips-api.com/app/assets/img/sanjay.png";
  logged : boolean;
  title: string;
  hlink: string;
  message: string = "";
  toast: any;
  platforms: string = "desktop";
  youtube : boolean = true;
  indeterminateState: boolean;
  //radio_list: any;
  defaultSelectedRadio = "radio_2";
  //Get value on ionChange on IonRadioGroup
  selectedRadioGroup:any;
  //Get value on ionSelect on IonRadio item
  selectedRadioItem:any;
  content : Content = new Content();
  radio_list : any;
  cnclips : number;
  nclips : number;
  link_a = "http://spatni.com/contents/playclips.m4p";
  pc_link = "https://playclips-api.com/app/listPlayclipsIonic.html";
  showPdf: boolean = false;
  showAudio: boolean = false;
  showAll: boolean = false;
  showMediaWidgets : boolean = true;
  showTextWidgets : boolean = false;
  radio_list_media : any;
  radio_list_text : any;
  radio_list_current : any;
  selectedTab : any;
  tabs_item: any;




  constructor( private alertCtrl: AlertController, 
               private navCtrl: NavController, 
               public signinService : SigninService,
               public contentService : ContentsService, 
               private messages : Messages,
               private toastCtrl: ToastController, 
               private platform: Platform,
               private api : Api, 
               private http: HttpClient,
               public loadingController:LoadingController,
               public subscriptionService: SubscriptionService) {
    this.signinService.page = "create-content";
    if (this.platform.platforms().includes("ios"))
     this.platforms= "ios";
    if (this.platform.platforms().includes("android"))
     this.platforms= "ios";
  }
  ionViewWillEnter() {
    this.signinService.title = this.title;
    this.signinService.page = "create-content";
  }
  navigate() {
    this.validate();
    if ( this.message.length > 0 )
    {
     this.showToast(this.message);
     this.message = "";
     return;
    }
  }
  getPcLink() {
    this.pc_link = this.signinService.pc_link;
    return this.pc_link;
  }
  signin() {
    this.navCtrl.navigateForward('sign-in');
    this.pc_link = this.signinService.pc_link;
  }
  signout() {
    this.navCtrl.navigateForward('sign-in');
  }
  listContents() {
    this.navCtrl.navigateForward('list-contents');
  }
  chat() {
    this.navCtrl.navigateForward('chat');
  }
  validate() {
    if ( this.title != undefined ) {
     if (this.title.length < 4 )
      this.message = this.messages.titleLenght;
    }
    else
      this.message = this.messages.titleRequired;
  }
  uploadAudio() {
    this.validate();
    if ( this.message.length > 0 )
    {
     this.showToast(this.message);
     this.message = "";
    }
    else
    if (this.signinService.logged)
    {
      window.open(this.api.audio +  this.signinService.user.login + "&title=" + this.title + "&platform=" + this.platforms , "_self");
      this.title = "";
    }
    else
      this.showAlert(this.messages.signin);
  }
  text() {
      this.signinService.title = this.title;
      this.navCtrl.navigateForward("text");
  }
  youTube() {
    this.validate();
    if ( this.message.length > 0 )
    {
     this.showToast(this.message);
     this.message = "";
    }
    else
    if (this.signinService.logged) 
    {
      this.signinService.title = this.title;
      this.navCtrl.navigateForward("search-results-yt");
    }
    else
     this.showAlert(this.messages.signin);
  }
  async showAlert(message: string) {
    let alert = await this.alertCtrl.create({
      header: "Sign-in",
      message: message,
      buttons: [{
        text: "Ok",
        handler: () => {
        }
      }]
    })
    alert.present();
  }
 showToast(message : string) {
  this.toast = this.toastCtrl.create({
    message: message,
    duration: 3000
  }).then((toastData) => {
    toastData.present();
  });
 }
 private file: File;
  link : string = "";

  onFileChange(fileChangeEvent) {
    this.file = fileChangeEvent.target.files[0];
  }
  async submitForm() {
    if ( this.file.size > 30096000 ) {
            this.showToast("File size restricted to less then 30MB");
            return;
    }
    await this.checkSubscription();
    if ( this.cnclips > this.nclips ) {
            this.showToast("Subscription - clips storage limit reached");
            this.navCtrl.navigateForward("subscription");
            return;
    }
    
    let formData = new FormData();
    formData.append("file", this.file, this.file.name);
    let rheaders = new HttpHeaders({ 'Transfer-Encoding': 'chunked' });
    this.presentLoading();
    this.http.post<UploadResponse>(this.api.upload, formData, {headers: rheaders}).subscribe((response) => {
      this.link = response.link;
    });
  }
  async checkSubscription() {
    this.content.login = this.signinService.user.login;
    this.contentService.setCnclips(this.content).subscribe((response) => {
    });
    await this.sleep(1000);
    this.subscriptionService.get(this.signinService.user.login).subscribe((response) => {
     this.nclips = response.nclips;
     this.cnclips = response.cnclips;
    });
    await this.sleep(1000);
  }
  radioFocus() {
  }
  radioSelect(event) {
    this.selectedRadioItem = event.detail;
  }
  radioBlur() {
  }
  createContent() {
    this.content = new Content();
    // check for clips uploaded for this user
    
    this.content.login = this.signinService.user.login;
    this.content.link = this.link;
    this.content.title = this.title;
    this.content.type = this.signinService.type;

    this.contentService.publishContent("content-post", this.content).subscribe((response) => {
      this.message = this.messages.success;
      this.showToast(this.message);
      this.navCtrl.navigateForward("tab1")
    });
/**
    this.contentService.createContent(this.content).subscribe((response) => {
      this.message = this.messages.success;
      this.showToast(this.message);
      this.navCtrl.navigateForward("tab1")
     });
**/
  }
  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      duration: 2500
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

 app_link() {
  window.open("https://apps.apple.com/us/app/playclips-playclips/id1549384191", "_system");
 }
 api_link() {
  window.open("https://playclips-api.com/app/sign-in.html", "_system");
 }
}
class UploadResponse {
  link: string;
}


