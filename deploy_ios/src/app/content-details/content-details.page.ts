import { Component, OnInit } from '@angular/core';
import { Content } from '../models/content';
import { SigninService } from '../services/sign-in.service';
import { ContentsService } from '../services/contents.service';
import { NavController } from '@ionic/angular'
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { ClipsService } from '../services/clips.service';

@Component({
  selector: 'app-content-details',
  templateUrl: './content-details.page.html',
  styleUrls: ['./content-details.page.scss'],
})
export class ContentDetailsPage implements OnInit {
  content : Content;
  href : string;
  hide : boolean = false;
  constructor(private signinService: SigninService, 
    private contentsService: ContentsService, 
    private navCtrl: NavController,
    private router: Router,
    private dom: DomSanitizer,
    private clipsService: ClipsService) {

    this.init();

    }

  sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
  }

  ngOnInit() {
    
  }
  async init() {
    this.href = this.router.url;

    var index = this.href.lastIndexOf("/");
    var id = this.href.substring(index + 1);
    
    this.contentsService.get(id).subscribe(response => {
      this.content = response;
      this.content.base64String = "data:" + this.content.type + "/" + this.content.fileType + ";base64," + this.content.base64Bytes; 
    });

    await this.sleep(1000);
    console.log(this.content.type);

    if ( this.content.type == "audio") 
      this.content.showAudio = true;
    if ( this.content.type == "record") 
      this.content.showAudio = true;

    if (this.content.type =="image")
       this.content.showImage = true;

    if (this.content.type == "video")
       this.content.showVideo = true;

    if (this.content.type == "ytube")
       this.content.showYTube = true;

    if (this.content.type == "text")
       this.content.showText = true;
    if (this.content.type == "pdf")
    {
       this.content.showPdf = true;
       this.content.base64String  = "data:" + "application" + "/" + this.content.fileType + ";base64," + this.content.base64Bytes;
       // const iFrame1 = document.querySelector("iframe_a");
       // const iFrame1Body = iFrame1.document.querySelector("a") ;
    }
    if (this.content.type == "link")
       this.content.showLink = true;
    if (this.content.type == "appt")
       this.content.showAppt = true;
    
  }
  delete() {
    this.contentsService.publishContent("content-delete", this.content).subscribe((response) => {
    });
    this.contentsService.delete(this.content.id);
    this.navCtrl.navigateBack(`tab1`);
    this.hide = true;
  }
  unlike() {
    this.contentsService.unlike(this.content).subscribe((response) => {
      this.navCtrl.navigateForward("tab1")
     });
  }
  like() {
    this.contentsService.like(this.content).subscribe((response) => {
      this.navCtrl.navigateForward("tab1")
     });
  }
  object1() {
    this.content.object = 1;
    this.contentsService.object(this.content).subscribe((response) => {
      this.navCtrl.navigateForward("tab1")
     });
  }
  object2() {
    this.content.object = 2;
    this.contentsService.object(this.content).subscribe((response) => {
      this.navCtrl.navigateForward("tab1")
     });
  }
  archive() {
    this.content.archive = 1;
    this.contentsService.archive(this.content).subscribe((response) => {
     });
    this.hide = true;
  }

  ytVideoIdSanitizer() {
    return this.dom.bypassSecurityTrustResourceUrl(this.content.link);
  }
  async purge() {
   this.hide = false;
   this.contentsService.delete(this.content.id);
   await this.sleep(500);
   this.contentsService.getAllContents();
   await this.sleep(500);
   this.navCtrl.navigateForward("tab1")
  }
}
