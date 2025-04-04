import { Component } from '@angular/core';
import { SigninService } from '../services/sign-in.service';
import { HttpClient } from '@angular/common/http';
import { Clip } from '../models/clip';
import { Api } from '../api';
import { ClipsService } from '../services/clips.service';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { DomSanitizer } from '@angular/platform-browser';

declare var slideRight: any;
declare var slideLeft: any;
declare var slideLength: any;
declare var sliderContainer: any;
declare function changeSlideUp(): any;
declare function changeSlideDown(): any;

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})

export class Tab3Page {
  
  cnt : number = 1;
  pcClips: Clip[] = [];
  pcCnt: number = 0;
  clipData: any;
  clipData1: any;
  clipReviewed: Clip[] = [];
  clipReviewed1: Clip[] = [];
  hlink: String;
  clips : Clip[];
  activeSlideIndex = 0;
  slidesLength = 4;
  
  constructor(public signinService : SigninService, public clipsService : ClipsService, public navCtrl: NavController, public alertController : AlertController,  private dom: DomSanitizer  ) {
   this.hlink =  this.signinService.hlink; 
    
 }
 addToPc(clip : Clip) {
  console.log(clip);
  for (let i = 0; i < this.signinService.pcCnt;  i++) {
     if (clip.link ==  this.signinService.pcClips[i].link)
       return;
  }
  this.signinService.pcClips[this.signinService.pcCnt] = clip;
  clip.disabled = true;
  this.signinService.pcCnt = this.signinService.pcCnt + 1;
 }
 async ionViewWillEnter() {
    if (this.signinService.user) 
    {
     await this.getClips();
   }
 }
 async getClips() {
    this.clipReviewed1 = [];
    this.clipReviewed = [];
    this.clipsService.getList().subscribe(response => {
      this.clipData1 = response;
      for (let clip of this.clipData1) {
         clip.playType = "clipvl";
         clip.active = "panel active";
         clip.base64String = "data:" + clip.type + "/" + clip.fileType + ";base64," + clip.base64Bytes;
         clip.srating = "*";
         if ( clip.rating > 3 ) {
           clip.showItem = true;
             var i:number;
             for (i=0; i<clip.rating-1; i++){
         	clip.srating = "*" + clip.srating;
            }
         }
         if ( clip.rating == 4 || clip.rating == 5 )
          {
            clip.showItem = true;
            this.clipReviewed1.push(clip);
          }
      }
    });
    this.clipsService.getList().subscribe(response => {
      this.clipData = response;
      i = 0;
      for (let clip of this.clipData) {
         if ( i % 2 == 0 )
          clip.playType = "clipvreven";
         else
          clip.playType = "clipvrodd";
         i = i + 1;
         clip.active = "panel active";
         clip.base64String = "data:" + clip.type + "/" + clip.fileType + ";base64," + clip.base64Bytes;  
         clip.showItem = false;
         clip.srating = "*";
         if ( clip.rating > 3 ) {
           clip.showItem = true;
             var i:number;
             for (i=0; i<clip.rating-1; i++){
         	clip.srating = "*" + clip.srating;
            }

        if ( clip.type == "audio")
          clip.showAudio = true;

        if ( clip.type =="image")
          clip.showImage = true;

        if (clip.type == "video")
          clip.showVideo = true;

        if (clip.type == "ytube")
          clip.showYTube = true;
        if (clip.type == "text")
          clip.showText = true;
        if (clip.type == "record")
          clip.showRecord = true;
        if (clip.type == "todo")
          clip.showTodo = true;
        if (clip.type == "appt")
          clip.showAppt = true;
        if (clip.type == "pdf")
          clip.showPdf= true;
        if (clip.type == "link")
          clip.showLink = true;
        if (clip.type == "contact")
          clip.showContact = true;
        if (clip.type == "chat")
          clip.showChat = true;

        if (clip.rating == 1 )
          clip.srating1 = true;
        if (clip.rating == 2 )
          clip.srating2 = true;
        if (clip.rating == 3 )
          clip.srating3 = true;
        if (clip.rating == 4 )
          clip.srating4 = true;
        if (clip.rating == 5 )
          clip.srating5 = true;
        
        if ( clip.rating == 4 || clip.rating == 5 )
          clip.showItem = true;

        this.clipReviewed.push(clip);

        }
       }
    });
   }
  async email(link) {
   console.log("email");
   const alert = await this.alertController.create({
    header: 'EMAIL LINK',
    subHeader: 'Enter email',
    inputs: [
    {
        name: 'email',
        type: 'text'
    }],    
    buttons: [
        {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
                console.log('Confirm Cancel');
            }
        }, 
        {
            text: 'Send',
            handler: (alertData) => { //takes the data 
                console.log(alertData.email);
                console.log(link);
		this.clipsService.emailClip(alertData.email, link).subscribe(response => {
				console.log(response);
                });
            }
        }
    ]
   });
   await alert.present();
  }
  async text(link) {
   console.log("text");
   const alert = await this.alertController.create({
    header: 'TEXT LINK',
    subHeader: 'To Be Implemented',
    inputs: [
    {
        name: 'text',
        type: 'text'
    }],
    buttons: [
        {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
                console.log('Confirm Cancel');
            }
        },
        {
            text: 'Ok',
            handler: (alertData) => { //takes the data
                console.log(alertData.phone);
                console.log(link);
		this.clipsService.textClip(alertData.phone, link).subscribe(response => {
			console.log(response);
                });
            }
        }
    ]
   });
   await alert.present();
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
  share() {
    this.navCtrl.navigateForward('share');
  }
  createContents() {
     this.navCtrl.navigateForward('create-contents');
    }
   createProfile() {
    console.log("create profile");
    this.navCtrl.navigateForward('create-profile');
  }
  createPc() {
     this.cnt = this.cnt + 1;     
     this.navCtrl.navigateForward('create-pc/' + this.cnt );
  }
upButton() {
 console.log("Change Slide Up");
 changeSlideUp();
}
downButton() {
 console.log("Change Slide Down");
 changeSlideDown();
}
subscribe() {
   this.navCtrl.navigateForward("subscription");
  }

}
