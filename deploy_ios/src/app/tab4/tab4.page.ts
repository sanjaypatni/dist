import { Component, OnInit } from '@angular/core';
import { PlayclipsService } from '../services/playclips.service';
import { SigninService } from '../services/sign-in.service';
import { Playclip } from '../models/playclip';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  hlink: string;
  pcLink: string = "assets/img/playclips.png";
 
  constructor(private playclipsService: PlayclipsService, private signinService: SigninService, public navCtrl: NavController) {
    this.hlink = "assets/img/header.png";
    this.signinService.page = "tab4";
  }
  ngOnInit() {
	this.getPlayclips();
    	this.signinService.page = "tab4";
  }
  ionViewDidEnter()
  {
	this.getPlayclips();
    	this.signinService.page = "tab4";
  }
  ionViewDidLoad()
  {
	this.getPlayclips();
    	this.signinService.page = "tab4";
  }
  playclipsData: any;
  playclipsA: Playclip[] = [];
  getPlayclips() {
    this.playclipsService.getPlayclips().subscribe(response => {
      this.playclipsA.length = 0
      console.log(response);
      this.playclipsData = response;
      console.log("Playclips Data");
      console.log(this.playclipsData);
      for (let pc of this.playclipsData.playclips) { 
        console.log(pc);
        this.playclipsA.push(pc);
      }
    });
  }
  purgePlayclips() {
      console.log("Purge");
      this.playclipsService.purge();
      this.getPlayclips();
      this.navCtrl.navigateForward('tab1');
  }
  signout() {
     console.log("Signin");
     this.navCtrl.navigateForward('sign-in');
    }
  subscribe() {
   this.navCtrl.navigateForward("subscription");
  }
  createProfile() {
    console.log("create profile");
    this.navCtrl.navigateForward('create-profile');
  }

 createContents() {
     this.signinService.page = "create-contents";
     this.navCtrl.navigateForward('create-contents');
    }
  
}
