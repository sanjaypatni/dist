import { Component, OnInit } from '@angular/core';
import {Platform, AlertController, NavController, ToastController, LoadingController} from '@ionic/angular'
import { Playclip } from '../models/playclip';
import { User } from '../models/user';
import { PlayclipsService } from '../services/playclips.service';
import { SigninService } from '../services/sign-in.service';
import { ShareService } from '../services/share.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-share',
  templateUrl: './share.page.html',
  styleUrls: ['./share.page.scss'],
})

export class SharePage implements OnInit {

  playclip: Playclip = new Playclip();
  href: string = "";
  users: any;
  susers: User[] = [];


  ngOnInit() {
  }

  async init() {
    this.href = this.router.url;
    console.log(this.router.url);
    var index = this.href.lastIndexOf("/");
    var id = this.href.substring(index + 1);
    console.log(id);
    console.log(index);
    console.log(this.signinService.user.login);

    this.playclipsService.getPlayclip(id).subscribe(response => {
      console.log(response);
      this.playclip = response;
      console.log(this.playclip.title);
    });
 }
  indeterminateState: boolean;
  checkParent: boolean;
  constructor( private navCtrl: NavController,  private router: Router, private playclipsService: PlayclipsService, private signinService: SigninService, private shareService: ShareService ) {
    this.init();
    this.signinService.getUsers().subscribe(response => {
      console.log(response);
      this.users = response; 
    });

  }
  checkCheckbox() {
    setTimeout(() => {
      this.users.forEach(item => {
        item.isUserSelected = this.checkParent;
      });
    });
  }
  verifyEvent() {
    const allItems = this.users.length;
    let selected = 0;
    this.users.map(item => {
      if (item.isUserSelected) selected++;
    });
    if (selected > 0 && selected < allItems) {
      // One item is selected among all checkbox elements
      this.indeterminateState = true;
      this.checkParent = false;
    } else if (selected == allItems) {
      // All item selected
      this.checkParent = true;
      this.indeterminateState = false;
    } else {
      // No item is selected
      this.indeterminateState = false;
      this.checkParent = false;
    }
  }
  smsPlayclip(){
   console.log("sms");
    this.shareService.sms().subscribe(response => {
      console.log(response);
    });
  }
  mailPlayclip(){
   console.log("mail");
   console.log(this.playclip.id);
   this.shareService.mail(this.playclip.id).subscribe(response => {
      console.log("mail");
      console.log(response);
    });
   this.shareService.text(this.playclip.id).subscribe(response => {
      console.log("text");
      console.log(response);
    });
  }
  sharePlayclip() {
   this.susers = []; 
   this.users.map(item => {
      if (item.isUserSelected)  { console.log(item); this.susers.push(item); }
    });
    console.log(this.susers);
    this.playclip.users = this.susers;
    console.log(this.playclip);
    this.playclipsService.createPlayclips(this.playclip).subscribe((response) => {
      this.navCtrl.navigateForward("tab4")
    });

  }
}
