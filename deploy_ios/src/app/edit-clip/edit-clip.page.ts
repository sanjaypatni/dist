import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ClipsService } from '../services/clips.service';
import { SigninService } from '../services/sign-in.service';
import { Clip } from '../models/clip'
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-edit-clip',
  templateUrl: './edit-clip.page.html',
  styleUrls: ['./edit-clip.page.scss'],
})
export class EditClipPage implements OnInit {
  href: string = "";
  selectedRadioGroup:any;
  //Get value on ionSelect on IonRadio item
  selectedRadioItem:any;
  radio_list : any;
  hide : boolean = false;
  clip: Clip = new Clip();
  constructor(private signinService : SigninService, private clipsService : ClipsService, private router : Router, private navCtrl : NavController, private dom: DomSanitizer ) { 
  this.init();
  }
  ngOnInit() {
  }

  radioGroupChange(event) { 
   this.selectedRadioGroup =  event.detail ;
   this.selectedRadioItem = this.selectedRadioGroup.value;
  }
  async init() {
    this.href = this.router.url;
    var index = this.href.lastIndexOf("/");
    var id = this.href.substring(index + 1);

    this.radio_list = [
      {
        id: '1',
        name: 'radio_list',
        value: '1',
        img: 'assets/img/star.png',
        disabled: false,
        checked: false,
        color: 'danger'
      }, {
        id: '2',
        name: 'radio_list',
        value: '2',
        img: 'assets/img/star.png',
        disabled: false,
        checked: false,
        color: 'danger'
      }, {
        id: '3',
        name: 'radio_list',
        value: '3',
        img: 'assets/img/star.png',
        disabled: false,
        checked: false,
        color: 'danger'
      },
      {
        id: '4',
        name: 'radio_list',
        value: '4',
        img: 'assets/img/star.img',
        disabled: false,
        checked: false,
        color: 'danger'
      },
      {
        id: '5',
        name: 'radio_list',
        value: '5',
        img: 'assets/img/star.png',
        disabled: false,
        checked: false,
        color: 'danger'
      },
    ];

  
    this.clipsService.getClip(id).subscribe(response => {
      this.clip = response;
      if ( this.clip.type == "audio")
          this.clip.showAudio = true;
      if ( this.clip.type == "record")
          this.clip.showRecord = true;

      if ( this.clip.type =="image")
      {
          this.clip.showImage = true;
          this.clip.base64String = "data:" + this.clip.type + "/" + this.clip.fileType + ";base64," + this.clip.base64Bytes; 
      }

      if (this.clip.type == "video")
          this.clip.showVideo = true;

      if (this.clip.type == "ytube")
          this.clip.showYTube = true;

      if (this.clip.type == "text")
          this.clip.showText = true;

      if (this.clip.type == "appt")
          this.clip.showAppt = true;
      if (this.clip.type == "link")
          this.clip.showLink = true;
      if (this.clip.type == "contact")
          this.clip.showContact = true;
      if (this.clip.type == "pdf")
      {
          this.clip.showPdf = true;
          this.clip.base64String  = "data:" + "application" + "/" + this.clip.fileType + ";base64," + this.clip.base64Bytes;

      }
    });
    await this.sleep(500);
    }

    sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
    delete() {
      this.clipsService.deleteClip(this.clip.id);
      this.navCtrl.navigateBack(`tab2/` + this.clip.id);
    }
   async update() {
      // this.clipsService.updateClip(this.clip.id, this.clip);

       // this.clip.rating = this.selectedRadioItem;


      this.clipsService.deleteClip(this.clip.id);
      await this.sleep(500);
      this.clipsService.createClip(this.clip).subscribe(response => {
      });
      this.navCtrl.navigateBack('tab2');
    }
    ytVideoIdSanitizer() {
     return this.dom.bypassSecurityTrustResourceUrl(this.clip.link);
    }
    archive() {
      this.clipsService.archive(this.clip).subscribe((response) => {
       });
      this.hide = true;
    }
    async purge() {
    this.hide = false;
    this.clipsService.deleteClip(this.clip.id);
    await this.sleep(500);
    this.clipsService.getList();
    await this.sleep(500);
    this.navCtrl.navigateForward("tab2")
    }
    oneStar() {
     this.clip.rating = 1;
    }
    twoStar() {
     this.clip.rating = 2;
    }
    threeStar() {
     this.clip.rating = 3;
    }
    fourStar() {
     this.clip.rating = 4;
    }
    fiveStar() {
     this.clip.rating = 5;
    }
}
