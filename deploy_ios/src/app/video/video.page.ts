import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, ToastController, LoadingController } from '@ionic/angular';
import { ContentsService } from '../services/contents.service';
import { Content } from '../models/content'
import { Api } from '../api';
import {SigninService} from '../services/sign-in.service'
import {Messages} from '../messages'
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { SubscriptionService } from '../services/subscription.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.page.html',
  styleUrls: ['./video.page.scss'],
})
export class VideoPage implements OnInit {
  content: Content = new Content();
  description: string = "";
  nclips : number;
  cnclips : number;
  message: string = "";

  private file: File;
  link : string = "";
  toast: any;
  base64string : string;
  bytes : any;
  fileExt : string;

  onFileChange(fileChangeEvent) {
    this.file = fileChangeEvent.target.files[0];
  }

  constructor(private signinService: SigninService, private contentService : ContentsService, private router : Router, private navCtrl : NavController, public loadingController:LoadingController,  private api : Api, private http: HttpClient,  public subscriptionService: SubscriptionService, private messages : Messages,  private toastCtrl: ToastController) { }

  ngOnInit() {
  }


  showToast(message : string) {
  this.toast = this.toastCtrl.create({
    message: message,
    duration: 3000
  }).then((toastData) => {
    console.log(toastData);
    toastData.present();
  });

  }
  
  save() {
    this.validate();
    if ( this.message.length > 0 )
    {
     this.showToast(this.message);
     this.message = "";
     return;
    }
   console.log(this.description);
   this.content.login = this.signinService.user.login;
   this.content.link = this.link;
   this.content.title = this.signinService.title;
   this.content.type = "video";
   this.content.description = this.description.substring(0, 500);
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


  async submitForm() {
    if ( this.file.size > 120096000 ) {
            this.showToast("File size restricted to less then 120MB");
            return;
    }
    await this.checkSubscription();
    console.log(this.cnclips);
    console.log(this.nclips);
    if ( this.cnclips > this.nclips ) {
            this.showToast("Subscription - clips storage limit reached");
            this.navCtrl.navigateForward("subscription");
            return;
    }
   
    let formData = new FormData();
    formData.append("file", this.file, this.file.name);
    let rheaders = new HttpHeaders({ 'Transfer-Encoding': 'chunked' });
    this.checkSubscription()
    await this.sleep(1000);
    this.presentLoading();
    this.http.post<UploadResponse>(this.api.uploadv, formData, {headers: rheaders}).subscribe((response) => {
      console.log(response);
      this.link = response.link;
      // this.getFileContents(this.file.name);
    });
  }

  getFileContents(fileName : string) {
    let arr = fileName.split(".");
    this.fileExt = arr[1];
    this.http.get<any>(this.api.download + "?fileName=" + fileName ).subscribe((response) => {
      console.log(response);
      this.bytes = response.bytes;
      console.log(this.fileExt);
      this.base64string = "data:video/" + this.fileExt + ";base64," + this.bytes;
      console.log(this.base64string);
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
  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
   async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      duration: 15000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

  validate() {
    if ( this.signinService.title != undefined ) {
     if (this.signinService.title.length < 4 )
      this.message = this.messages.titleLenght;
    }
    else
      this.message = this.messages.titleRequired;
  }

}
class UploadResponse {
  link: string;
}
