import { Component, OnInit } from '@angular/core';
import { SigninService } from '../services/sign-in.service';
import { User } from '../models/user';
import { UserDetails } from '../models/userdetails';
import { NavController } from '@ionic/angular'

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.page.html',
  styleUrls: ['./create-profile.page.scss'],
})
export class CreateProfilePage implements OnInit {
  constructor(private signinService: SigninService, private navCtrl: NavController ) {
	 this.signinService.getUser(this.signinService.user.login).subscribe(response => { 
		   this.signinService.user = response; 
		   this.signinService.userDetails = new UserDetails();
                   if ( this.signinService.user.email )
	 	   this.signinService.getUserDetails(this.signinService.user.email).subscribe(response => { 
                        if ( response != null )
		   		this.signinService.userDetails = response;
                        else
		   		this.signinService.userDetails = new UserDetails();
         	   });
	});
  }
  ionViewDidLoad() {
    this.signinService.getUser(this.signinService.user.login).subscribe(response => {
                   this.signinService.user = response;
                   this.signinService.userDetails = new UserDetails();
                   if ( this.signinService.user.email )
                   this.signinService.getUserDetails(this.signinService.user.email).subscribe(response => {
                        if ( response != null )
                                this.signinService.userDetails = response;
                        else
                                this.signinService.userDetails = new UserDetails();
                   });
        });
  }
  ionViewDidEnter() {
   this.signinService.getUser(this.signinService.user.login).subscribe(response => {
                   this.signinService.user = response;
                   this.signinService.userDetails = new UserDetails();
                   if ( this.signinService.user.email )
                   this.signinService.getUserDetails(this.signinService.user.email).subscribe(response => {
                        if ( response != null )
                                this.signinService.userDetails = response;
                        else
                                this.signinService.userDetails = new UserDetails();
                   });
        });

  }
  ngOnInit() {
  }
  async save() {
                   this.signinService.userDetails.email = this.signinService.user.email;
	           this.signinService.createUserDetails(this.signinService.userDetails);
                   this.sleep(1000);
		   this.navCtrl.navigateForward("tab1")
  }
  async activate() {
       this.signinService.updateSubscription(this.signinService.user.email, this.signinService.user.login);
       this.sleep(1000);
       this.navCtrl.navigateForward("tab1")
  }
 sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
   }
 cancel() {
		     this.navCtrl.navigateForward("tab1")
 }

}
