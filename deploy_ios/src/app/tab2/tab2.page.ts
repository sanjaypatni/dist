import { Component } from '@angular/core';
import { SigninService } from '../services/sign-in.service';
import { HttpClient } from '@angular/common/http';
import { Clip } from '../models/clip';
import { Api } from '../api';
import { ClipsService } from '../services/clips.service';
import { NavController } from '@ionic/angular';
import { DomSanitizer } from '@angular/platform-browser';

declare var idx: any;
declare function changeImage(): any;
declare function resetInterval(): any;

@Component({
  selector: 'app-home',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  hlink: String;
  clips : Clip[];
  imagesCar : string = "";
  showMediaWidgets : boolean = true;
  showTextWidgets : boolean = false;
  radio_list_media : any;
  radio_list_text : any;
  radio_list_current : any;
  selectedTab : any;
  tabs_item: any;
  selectedRadioGroup:any;
  selectedRadioItem:any;
  public count = 0;
  public itemsPerPage = 1;
  public currentPage = 1;


  constructor(public signinService : SigninService, public clipsService : ClipsService, public navCtrl: NavController, private dom: DomSanitizer  ) {
   this.hlink =  this.signinService.hlink; 
    this.signinService.page = "tab2";
    
 }

 ionViewWillEnter() {
    this.signinService.page = "tab2";
    this.getClips();

  } 
 ionViewDidEnter() {
    this.signinService.page = "tab2";
    this.getClips();
  } 
  public onChange(event): void {
    console.log(event);
    this.currentPage = event;
  }
  signin() {
    console.log("Signin");
    this.navCtrl.navigateForward('sign-in');
  }
  signout() {
    console.log("Signin");
    this.navCtrl.navigateForward('sign-in');
  }
  showProfile() {
    console.log("profile");
    this.navCtrl.navigateForward('profile');
  }
  ytVideoIdSanitizer(link) {
    console.log(link);
    return this.dom.bypassSecurityTrustResourceUrl(link);
  }
  chat() {
    this.navCtrl.navigateForward('chat');
  }
  createContents() {
     this.navCtrl.navigateForward('create-contents');
  }
  createProfile() {
    console.log("create profile");
    this.navCtrl.navigateForward('create-profile');
  }
  purgeClips() {
      console.log("Purge");
      this.clipsService.purge();
      this.getClips();
     this.navCtrl.navigateForward('tab1');
  }
  getClips() {
    this.imagesCar = "";
    this.clipsService.getList().subscribe(response => {
      this.signinService.clipData = response;
      for (let clip of this.signinService.clipData) {
        clip.playType = "clip";
        if ( clip.type == "audio")
          clip.showAudio = true;

        if ( clip.type =="image")
          clip.showImage = true;

        if (clip.type == "video")
          clip.showVideo = true;

        if (clip.type == "ytube")
          clip.showYTube = true;
        if (clip.type == "pdf")
          clip.showPdf = true;
        if (clip.type == "contact")
          clip.showContact = true;
        if (clip.type == "todo")
          clip.showTodo = true;
        if (clip.type == "chat")
          clip.showChat = true;
        if (clip.type == "link")
          clip.showLink = true;
        if (clip.type == "text")
          clip.showText = true;
        if (clip.type == "record")
          clip.showRecord = true;
        if (clip.type == "appt")
          clip.showAppt = true;
       }
    });
   }
   left() {
    console.log(idx);
    idx--;
    changeImage();
    resetInterval();
   }
   right() {
    console.log(idx);
    idx++;
    changeImage();
    resetInterval();
   }
   subscribe() {
   this.navCtrl.navigateForward("subscription");
  }
}
