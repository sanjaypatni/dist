import { Component, OnInit } from '@angular/core';
import {Platform, AlertController, NavController, ToastController, LoadingController} from '@ionic/angular'
import { Playclip } from '../models/playclip';
import { Clip } from '../models/clip';
import { PlayclipsService } from '../services/playclips.service';
import { Router } from '@angular/router';

declare var slideRight: any;
declare var slideLeft: any;
declare var slideLength: any;
declare var sliderContainer: any;
declare function changeSlideUp(): any;
declare function changeSlideDown(): any;

@Component({
  selector: 'app-preview',
  templateUrl: './preview.page.html',
  styleUrls: ['./preview.page.scss'],
})
export class PreviewPage implements OnInit {

  playclip: Playclip = new Playclip();
  playclip1: Playclip = new Playclip();
  href: string = "";
  public count = 0;
  hide : boolean = true;


  public itemsPerPage = 2;


  public currentPage = 1;

  constructor( private navCtrl: NavController,  private router: Router, private playclipsService: PlayclipsService ) {
   this.init();
  }

  ngOnInit() {
  }

  public onChange(event): void {
    console.log(event);
    this.currentPage = event;
  }


  async ionViewWillEnter() {
      this.init();
  }

  async init() {
    this.href = this.router.url;
    console.log(this.router.url);
    var index = this.href.lastIndexOf("/");
    var id = this.href.substring(index + 1);
    console.log(id);
    console.log(index);

    this.playclipsService.getPlayclip(id).subscribe(response => {
      console.log(response);
      this.playclip = response;
      this.playclipsService.getPlayclip(id).subscribe(response => {
       console.log(response);
       this.playclip1 = response;
       this.processClips(this.playclip.clips, this.playclip1.clips);
     });
    });
 }
  archive() {
   console.log("archive");
    this.playclipsService.archive(this.playclip).subscribe((response) => {
     });
    this.hide = true;
  }
  async purge() {
   this.hide = false;
   this.playclipsService.delete(this.playclip.id);
   await this.sleep(500);
   this.playclipsService.getPlayclips();
   await this.sleep(500);
   this.navCtrl.navigateForward("tab4")
  }
  sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
  }

  clipData: any;
  clipData1: any;
  clipReviewed: Clip[] = [];
  clipReviewed1: Clip[] = [];

 processClips(clips, clips1) {
    this.clipReviewed1 = [];
    this.clipReviewed = [];
    this.clipData1 = clips1;
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
            if ( this.clipReviewed1.length < 1 )
             this.clipReviewed1.push(clip);
          }
     }
     console.log("processedClips");
     this.clipData = clips;
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
     console.log("processedClips2");
   }
upButton() {
 console.log("Change Slide Up");
 changeSlideUp();
}
downButton() {
 console.log("Change Slide Down");
 changeSlideDown();
}
}
