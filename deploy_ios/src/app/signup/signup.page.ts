import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { SigninService } from '../services/sign-in.service';
import { Messages } from '../messages';
import { SubscriptionService } from '../services/subscription.service';
import { Subscription } from '../models/subscription';
import { NavController, ToastController, LoadingController } from '@ionic/angular';
import { Api } from '../api';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  data: User;
  toast: any;
  selectedRadioGroup: any;
  message: string = "Signup Error - Email used. Please try using different email.";
   private file: File;

  constructor(private signinService: SigninService, 
    private router: Router, private toastCtrl : ToastController, 
    private subscriptionService : SubscriptionService,
    private messages : Messages, private subscription: Subscription,
	    private api : Api, private http: HttpClient ,
	     public loadingController:LoadingController,
	     ) 
  {
    this.data = new User();
  }
  ngOnInit() {
  }

  onFileChange(fileChangeEvent) {
    this.file = fileChangeEvent.target.files[0];
  }

  async submitForm() {
    this.data.role = this.signinService.role;
    if ( this.data.login != undefined && this.data.password != undefined && this.data.rpassword != undefined ) {
    if ( this.data.password != this.data.rpassword ) 
     this.message = this.messages.passwordMismatch
    else
     if (this.data.login.length < 4 && this.data.login.length > 15 ) 
      this.message = this.messages.userLenght;
    else
     if (this.data.password.length < 4  ) 
      this.message = this.messages.passwordLenght;
    else
     this.signinService.create(this.data).subscribe((response) => {
      console.log(response.id);
      if ( response.id == "0" )
       this.message = this.messages.userExists;
      else
      {
       this.router.navigate(['sign-in']);
       this.message = this.messages.success;
      }
      this.showToast(this.message);
     });
    }
    else 
     this.message = this.messages.undefined;
  await this.sleep(500);
  this.showToast(this.message);
  this.subscription.username = this.data.login;
  this.subscription.cnclips = 0;
  this.subscription.nclips = 20;
  this.subscription.email = this.data.email;
  this.subscription.subscription = "basic";
  //this.subscriptionService.createSubscription(this.subscription).subscribe((response) => {
  //  console.log("subscription created");
  //});
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
 sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
 }
 async uploadFile() {
    if ( this.file.size > 30096000 ) {
            this.showToast("File size restricted to less then 30MB");
            return;
    }
    let formData = new FormData();
    formData.append("file", this.file, this.file.name);
    let rheaders = new HttpHeaders({ 'Transfer-Encoding': 'chunked' });
    this.presentLoading();
    this.http.post<UploadResponse>(this.api.upload, formData, {headers: rheaders}).subscribe((response) => {
      console.log(response);
      console.log(response.link);
      this.data.login = response.link;
      this.signinService.user.login = response.link;
      this.signinService.user.username = response.link;
    });
  }
  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      duration: 7500
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }
}
class UploadResponse {
  link: string;
}
