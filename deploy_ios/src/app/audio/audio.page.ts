import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, ToastController, LoadingController } from '@ionic/angular';
import { ContentsService } from '../services/contents.service';
import { Content } from '../models/content'
import { Api } from '../api';
import { UploadResponse } from '../models/upload-response';
import {SigninService} from '../services/sign-in.service'
import {Messages} from '../messages'
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { SubscriptionService } from '../services/subscription.service';
@Component({
  selector: 'app-audio',
  templateUrl: './audio.page.html',
  styleUrls: ['./audio.page.scss'],
})
export class AudioPage implements OnInit {
  description: string = "";
  nclips : number;
  cnclips : number;
  private file: File;
  private thumbnail: File;
  private thumbnailLink: string;
  link : string;
  toast: any;
  content: Content = new Content();
  message: string = "";

  onFileChange(fileChangeEvent) {
    this.file = fileChangeEvent.target.files[0];
  }
  onFileChangeThumbnail(fileChangeEvent) {
    this.thumbnail = fileChangeEvent.target.files[0];
  }

  constructor(private signinService: SigninService, private contentService : ContentsService, private router : Router, private navCtrl : NavController, private toastCtrl: ToastController,  public loadingController:LoadingController,  private api : Api, private http: HttpClient,  public subscriptionService: SubscriptionService,  private messages : Messages) { }

  ngOnInit() {
   this.link = "";
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
   this.content.link = this.link;
   this.content.thumbnail = this.thumbnailLink;
   this.content.title = this.signinService.title;
   this.content.type = "audio";
   this.content.description = this.description.substring(0, 500);
   this.contentService.createContent(this.content).subscribe((response) => {
      this.signinService.page = "tab1";
      this.navCtrl.navigateForward("tab1")
     });
  }
  cancel() {
   this.navCtrl.navigateBack("tab1");
  }


  async submitForm() {
    if ( this.file.size > 90096000 ) {
            this.showToast("File size restricted to less then 90MB");
            return;
    }
    if ( this.cnclips > this.nclips ) {
            this.showToast("Subscription - clips storage limit reached");
            this.navCtrl.navigateForward("subscription");
            return;
    }
    const formData = new FormData();
    formData.append("file", this.file, this.file.name);
    const rheaders = new HttpHeaders({ 'Transfer-Encoding': 'chunked' });
    this.presentLoading();
    this.http.post<UploadResponse>(this.api.upload, formData, {headers: rheaders}).subscribe((response) => {
      this.link = response.link;
    });
  }
   async submitFormThumbnail() {
    if ( this.thumbnail.size > 30096000 ) {
            this.showToast("File size restricted to less then 30MB");
            return;
    }
    if ( this.cnclips > this.nclips ) {
            this.showToast("Subscription - clips storage limit reached");
            this.navCtrl.navigateForward("subscription");
            return;
    }
    const formData = new FormData();
    formData.append("file", this.thumbnail, this.thumbnail.name);
    const rheaders = new HttpHeaders({ 'Transfer-Encoding': 'chunked' });
    this.presentLoading();
    this.http.post<UploadResponse>(this.api.upload, formData, {headers: rheaders}).subscribe((response) => {
      this.thumbnailLink = response.link;
      this.content.thumbnail = this.thumbnailLink;
    });
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
