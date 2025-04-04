import { Component, OnInit } from '@angular/core';
import {ToastController, NavController} from '@ionic/angular'
import { Subscription } from '../models/subscription';
import { SigninService } from '../services/sign-in.service';
import { SubscriptionService } from '../services/subscription.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.page.html',
  styleUrls: ['./subscription.page.scss'],
})
export class SubscriptionPage implements OnInit {
  toast: any;
  message : string;
  sub: Subscription = new Subscription();
  ssub: Subscription = new Subscription();
  basicDesc : string = "20 clips";
  personalDesc : string = "500 clips <br\> Encrypted contents";
  teamDesc : string = "1000 clips <br\> Encrypted contents <br\> Playclips sharing";
  constructor(private toastCtrl : ToastController, private navCtrl: NavController, private signinService: SigninService, private subscriptionService: SubscriptionService, public alertController: AlertController) {  
     this.ngOnInit();
   }
   ionViewWillEnter() {
     this.ngOnInit();
   }

  async ngOnInit() {
    this.signinService.getUser(this.signinService.user.login).subscribe(response => { this.signinService.user = response});
    await this.sleep(500);  
    this.subscriptionService.get(this.signinService.user.email).subscribe(response => { this.ssub = response});
  }
  basic() {
    if (this.validate()) {
      console.log("basic");
      this.subscriptionFunc(this.signinService.user.login, 20, "basic", this.signinService.user.email)
    }
    else
      this.showToast(this.message);
  }
  personal() {
    if (this.validate()) {
      console.log("personal");
      this.subscriptionFunc(this.signinService.user.login, 500, "personal", this.signinService.user.email)
    }
    else
      this.showToast(this.message);
  }
  personalCancel() {
    if (this.validate()) {
      console.log("personal");
      this.subscriptionFunc(this.signinService.user.login, 20, "basic", this.signinService.user.email)
    }
    else
      this.showToast(this.message);
  }
  team() {
    if (this.validate()) {
      console.log("team");
      this.subscriptionFunc(this.signinService.user.login, 1000, "team", this.signinService.user.email)
    }
    else
      this.showToast(this.message);
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

   validate() {
    console.log(this.signinService.user.email);
    if ( this.signinService.user.email != undefined ) 
    {
      if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(this.signinService.user.email)) {
        return (true)
      }
      this.message = "Email is not valid!";
      return false;
    }
    else {
      this.message = "Please ensure to enter email in profile page using left top most icon !";
      return false;
    }
  }
  async subscriptionFunc(username:string, nclips: number, subscription: string,  email: string) {
    this.sub.username = username;
    this.sub.nclips = nclips;
    this.sub.subscription = subscription;
    this.sub.email = email;
    console.log(username);
    await this.presentAlert(subscription);
  }
  async presentAlert(subscription) {
        const alert = await this.alertController.create({
          header: 'Subscrible to ' + subscription + ' plan?',
          buttons: [
             {
          	text: 'Disagree',
          	handler: () => {
      			this.navCtrl.navigateBack("tabs");
          	}
             },
             {
          	text: 'Agree',
          	handler: () => {
      			this.showToast("Subscribing to " + subscription + " plan'");
    			this.subscriptionService.deleteSubscription(this.signinService.user.email);
    			console.log("deleted sub");
    			this.subscriptionService.createSubscription(this.sub).subscribe((response) => {
      			console.log("subscription created");
      			this.subscriptionService.get(this.signinService.user.email).subscribe(response => { this.ssub = response});
    		      });
          	}
             }]
        });
        await alert.present();
      }
   sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
