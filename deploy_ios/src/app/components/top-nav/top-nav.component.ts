import { Component, OnInit } from '@angular/core';
import { SigninService } from '../../services/sign-in.service';
import { ContentsService } from '../../services/contents.service';
import { ClipsService } from '../../services/clips.service';
import { Output, EventEmitter } from '@angular/core'; 
import {Platform, AlertController, NavController, ToastController, LoadingController} from '@ionic/angular'
import { Api } from '../../api';
import {Messages} from '../../messages'

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss'],
})
export class TopNavComponent implements OnInit {
  
  title: string = "";
  message: string = "";
  toast: any;
  platforms: any;

  tabs_item = [
      {
        id: '1',
        name: 'radio_list',
        value: 'media',
        text: 'MEDIA',
        disabled: false,
        checked: false,
        color: 'dark',
        media_widget: true,
        text_widget: false
       },
       {
        id: '2',
        name: 'radio_list',
        value: 'text',
        text: 'TEXTUAL',
        disabled: false,
        checked: false,
        color: 'dark',
        text_widget: true,
        media_widget: false
     },
     {
        id: '3',
        name: 'radio_list',
        value: 'text',
        text: 'CONNECT',
        disabled: false,
        checked: false,
        color: 'dark',
        text_widget: true,
        media_widget: false
     },

     {
        id: '4',
        name: 'radio_list',
        value: 'all',
        text: 'ALL',
        disabled: false,
        checked: false,
        color: 'dark',
        text_widget: false,
        media_widget: false
     }
    ];

  constructor(private toastCtrl: ToastController, private api : Api,private signinService: SigninService, private contentService: ContentsService, private clipsService: ClipsService, public navCtrl: NavController, private messages: Messages, private platform: Platform ) { 
     if (this.platform.platforms().includes("ios"))
     this.platforms= "ios";
    if (this.platform.platforms().includes("android"))
     this.platforms= "android";

}

  ngOnInit() {}

   
  itemClick(i) {
   this.signinService.selectedTab = i;
   if (i == 0)
   {
     this.signinService.showMediaWidgets = true;
     this.signinService.showTextWidgets = false;
     this.signinService.showConnectWidgets = false;
     if ( this.signinService.type == "audio" || this.signinService.type == "record" ||  this.signinService.type == "video" || this.signinService.type == "ytube"    )
    {
     if ( this.signinService.page == "tab1" )
     	this.contentService.getContents(this.signinService.type);
     if ( this.signinService.page == "tab2" )
     	this.getClipsByType(this.signinService.type);
    }
    else 
    {
     this.signinService.type = "video"; 
     this.signinService.video = true;     
     this.signinService.ytube = false;     
     this.signinService.record = false;     
     this.signinService.audio = false;     
     if ( this.signinService.page == "tab1" )
     	this.contentService.getContents(this.signinService.type);
     if ( this.signinService.page == "tab2" )
     	this.getClipsByType(this.signinService.type);
    }
   }
   if ( i == 1)  
   {
     this.signinService.showMediaWidgets = false;
     this.signinService.showTextWidgets = true;
     this.signinService.showConnectWidgets = false;
     if ( this.signinService.type == "text" || this.signinService.type == "image" ||  this.signinService.type == "pdf" || this.signinService.type == "link"    )
    {
     if ( this.signinService.page == "tab1" )
     	this.contentService.getContents(this.signinService.type);
     if ( this.signinService.page == "tab2" )
     	this.getClipsByType(this.signinService.type);
    }
    else 
    {
     this.signinService.type = "pdf"; 
     this.signinService.pdf = true;     
     this.signinService.text = false;     
     this.signinService.link = false;     
     this.signinService.image = false;     
     if ( this.signinService.page == "tab1" )
     	this.contentService.getContents(this.signinService.type);
     if ( this.signinService.page == "tab2" )
     	this.getClipsByType(this.signinService.type);
    }
   }
   if ( i == 2)  
   {
     this.signinService.showMediaWidgets = false;
     this.signinService.showTextWidgets = false;
     this.signinService.showConnectWidgets = true;
     if ( this.signinService.type == "contact" || this.signinService.type == "appt" ||  this.signinService.type == "chat" || this.signinService.type == "todo"    )
    {
     if ( this.signinService.page == "tab1" )
     	this.contentService.getContents(this.signinService.type);
     if ( this.signinService.page == "tab2" )
     	this.getClipsByType(this.signinService.type);
    }
    else
    {
     this.signinService.type = "contact"; 
     this.signinService.contact = true;     
     this.signinService.todo = false;     
     this.signinService.chat = false;     
     this.signinService.appt = false;     
     if ( this.signinService.page == "tab1" )
     	this.contentService.getContents(this.signinService.type);
     if ( this.signinService.page == "tab2" )
     	this.getClipsByType(this.signinService.type);
    }
   }
   if ( i == 3)  
   {
    if (this.signinService.page == "tab1" ) 
     this.contentService.getAllContents();
    if (this.signinService.page == "tab2" ) 
     this.getClips();
  this.signinService.video = true;
  this.signinService.audio = false;
  this.signinService.record = false;
  this.signinService.ytube = false;
  this.signinService.text = false;
  this.signinService.pdf = false;
  this.signinService.image = false;
  this.signinService.link = false;
  this.signinService.chat = false;
  this.signinService.todo = false;
  this.signinService.appt = false;
  this.signinService.contact = false;
   }
  }
  validate() {
    if ( this.title != undefined ) {
     if (this.title.length < 4 )
      this.message = this.messages.titleLenght;
    }
    else
      this.message = this.messages.titleRequired;
  }
 video() {
    this.navCtrl.navigateForward("video");
 }
 link() {
   this.navCtrl.navigateForward("link");
 }
 appt() {
   this.navCtrl.navigateForward("appt");
 }
 audio() {
   this.navCtrl.navigateForward("audio");
 }
 pdf() {
   this.navCtrl.navigateForward("pdf");
 }
 image() {
   this.navCtrl.navigateForward("image");
 }
 text() {
   this.navCtrl.navigateForward("text");
 }
 contact() {
   this.navCtrl.navigateForward("contact");
 }
 todo() {
   this.navCtrl.navigateForward("todo");
 }
 chat() {
   this.navCtrl.navigateForward("chat");
 }
 youTube() {
    if (this.signinService.logged) 
      this.navCtrl.navigateForward("search-results-yt");
 }
 record() {
      this.signinService.page = "tab1";
      window.open(this.api.audio +  this.signinService.user.login + "&title=" + this.signinService.title + "&platform=" + this.platforms , "_self");
 }
 showToast(message : string) {
  this.toast = this.toastCtrl.create({
    message: message,
    duration: 3000
  }).then((toastData) => {
    toastData.present();
  });
 }
 
 getClips() {
    this.clipsService.getList().subscribe(response => {
      this.signinService.clipData = response;
      for (let clip of this.signinService.clipData) {
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
  getClipsByType(type) {
    this.clipsService.getClipsByType(type).subscribe(response => {
      this.signinService.clipData = response;
      for (let clip of this.signinService.clipData) {
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
   toggleVideo()  {
    console.log("Video");
    if ( this.signinService.video )
    {
     this.signinService.video = false;
     if (this.signinService.page == "tab1")
       this.contentService.getContents("video1");
     if (this.signinService.page == "tab2")
       this.getClipsByType("video1");
    }
    else
    {
     this.signinService.video = true;
     if (this.signinService.page == "create-content")
       this.video();
     if (this.signinService.page == "tab1")
       this.contentService.getContents("video");
     if (this.signinService.page == "tab2")
       this.getClipsByType("video");
     this.signinService.audio = false;
     this.signinService.record = false;
     this.signinService.ytube = false;
     this.signinService.type = "video";
   }
  }
   toggleYtube()  {
    console.log("ytube");
    if ( this.signinService.ytube )
    {
     this.signinService.ytube = false;
     if (this.signinService.page == "tab1")
       this.contentService.getContents("ytube1");
     if (this.signinService.page == "tab2")
       this.getClipsByType("ytube1");
    }
    else
    {
     this.signinService.video = false;
     this.signinService.audio = false;
     this.signinService.record = false;
     this.signinService.ytube = true;
     if (this.signinService.page == "create-content")
       this.youTube();
     if (this.signinService.page == "tab1")
       this.contentService.getContents("ytube");
     if (this.signinService.page == "tab2")
       this.getClipsByType("ytube");
     this.signinService.type = "ytube";
   }
 }
   toggleAudio()  {
    console.log("Audio");
    if ( this.signinService.audio )
    {
     this.signinService.audio = false;
     if (this.signinService.page == "tab1")
       this.contentService.getContents("audio1");
     if (this.signinService.page == "tab2")
       this.getClipsByType("audio1");
    }
    else
    {
     this.signinService.video = false;
     this.signinService.audio = true;
     if (this.signinService.page == "create-content")
       this.audio();
     if (this.signinService.page == "tab1")
       this.contentService.getContents("audio");
     if (this.signinService.page == "tab2")
       this.getClipsByType("audio");
     this.signinService.type = "audio";
     this.signinService.record = false;
     this.signinService.ytube = false;
   }
 }
   toggleRecord()  {
    console.log("Record");
    if ( this.signinService.record )
    {
     this.signinService.record = false;
     if (this.signinService.page == "tab1")
       this.contentService.getContents("record1");
     if (this.signinService.page == "tab2")
       this.getClipsByType("record1");
    }
    else
    {
     this.signinService.video = false;
     this.signinService.audio = false;
     this.signinService.record = true;
     if (this.signinService.page == "create-content")
       this.record();
     if (this.signinService.page == "tab1")
       this.contentService.getContents("record");
     if (this.signinService.page == "tab2")
       this.getClipsByType("record");
     this.signinService.type = "record";
     this.signinService.ytube = false;
   }
 }
   toggleLink()  {
    console.log("Link");
    if ( this.signinService.link )
    {
     this.signinService.link = false;
     if (this.signinService.page == "tab1")
       this.contentService.getContents("link1");
     if (this.signinService.page == "tab2")
       this.getClipsByType("link1");
    }
    else
    {
     this.signinService.link = true;
     if (this.signinService.page == "create-content")
       this.link();
     if (this.signinService.page == "tab1")
       this.contentService.getContents("link");
     if (this.signinService.page == "tab2")
       this.getClipsByType("link");
     this.signinService.type = "link";
     this.signinService.text = false;
     this.signinService.pdf = false;
     this.signinService.image = false;
   }
 }
   toggleText()  {
    console.log("Text");
    if ( this.signinService.text )
    {
     this.signinService.text = false;
     if (this.signinService.page == "tab1")
       this.contentService.getContents("text1");
     if (this.signinService.page == "tab2")
       this.getClipsByType("text1");
    }
    else
    {
     this.signinService.link = false;
     this.signinService.text = true;
     if (this.signinService.page == "create-content")
       this.text();
     if (this.signinService.page == "tab1")
       this.contentService.getContents("text");
     if (this.signinService.page == "tab2")
       this.getClipsByType("text");
     this.signinService.type = "text";
        
     this.signinService.pdf = false;
     this.signinService.image = false;
   }
 }
   togglePdf()  {
    console.log("Pdf");
    if ( this.signinService.pdf )
    {
     this.signinService.pdf = false;
     if (this.signinService.page == "tab1")
       this.contentService.getContents("pdf1");
     if (this.signinService.page == "tab2")
       this.getClipsByType("pdf1");
    }
    else
    {
     this.signinService.link = false;
     this.signinService.text = false;
     this.signinService.pdf = true;
     if (this.signinService.page == "create-content")
       this.pdf();
     if (this.signinService.page == "tab1")
       this.contentService.getContents("ytube");
     if (this.signinService.page == "tab2")
       this.getClipsByType("pdf");
     this.signinService.image = false;
     this.signinService.type = "pdf";
   }
 }
   toggleImage()  {
    console.log("Image");
    if ( this.signinService.image )
    {
     this.signinService.image = false;
     if (this.signinService.page == "tab1")
       this.contentService.getContents("image1");
     if (this.signinService.page == "tab2")
       this.getClipsByType("image1");
    }
    else
    {
     this.signinService.link = false;
     this.signinService.text = false;
     this.signinService.pdf = false;
     this.signinService.image = true;
     if (this.signinService.page == "create-content")
       this.image();
     if (this.signinService.page == "tab1")
       this.contentService.getContents("image");
     if (this.signinService.page == "tab2")
       this.getClipsByType("image");
     this.signinService.type = "image";
   }
 }
   toggleContact()  {
    console.log("Contact");
    if ( this.signinService.contact )
    {
     this.signinService.contact = false;
     if (this.signinService.page == "tab1")
       this.contentService.getContents("contact1");
     if (this.signinService.page == "tab2")
       this.getClipsByType("contact1");
    }
    else
    {
     this.signinService.appt = false;
     this.signinService.todo = false;
     this.signinService.chat = false;
     this.signinService.contact = true;
     if (this.signinService.page == "create-content")
       this.contact();
     if (this.signinService.page == "tab1")
       this.contentService.getContents("contact");
     if (this.signinService.page == "tab2")
       this.getClipsByType("contact");
     this.signinService.type = "contact";
   }
 }
   toggleTodo()  {
    console.log("Todo");
    if ( this.signinService.todo )
    {
     this.signinService.todo = false;
     if (this.signinService.page == "tab1")
       this.contentService.getContents("todo1");
     if (this.signinService.page == "tab2")
       this.getClipsByType("todo1");
    }
    else
    {
     this.signinService.appt = false;
     this.signinService.todo = true;
     this.signinService.chat = false;
     this.signinService.contact = false;
     if (this.signinService.page == "create-content")
       this.todo();
     if (this.signinService.page == "tab1")
       this.contentService.getContents("todo");
     if (this.signinService.page == "tab2")
       this.getClipsByType("todo");
     this.signinService.type = "todo";
   }
 }
   toggleAppt()  {
    console.log("Appt");
    if ( this.signinService.appt )
    {
     this.signinService.appt = false;
     if (this.signinService.page == "tab1")
       this.contentService.getContents("contact1");
     if (this.signinService.page == "tab2")
       this.getClipsByType("contact1");
    }
    else
    {
     this.signinService.appt = true;
     this.signinService.todo = false;
     this.signinService.chat = false;
     this.signinService.contact = false;
     if (this.signinService.page == "create-content")
       this.appt();
     if (this.signinService.page == "tab1")
       this.contentService.getContents("appt");
     if (this.signinService.page == "tab2")
       this.getClipsByType("appt");
     this.signinService.type = "appt";
   }
 }
   toggleChat()  {
    console.log("Chat");
    if ( this.signinService.chat )
    {
     this.signinService.chat = false;
     if (this.signinService.page == "tab1")
       this.contentService.getContents("chat1");
     if (this.signinService.page == "tab2")
       this.getClipsByType("chat1");
    }
    else
    {
     this.signinService.appt = false;
     this.signinService.todo = false;
     this.signinService.chat = true;
     this.signinService.contact = false;
     if (this.signinService.page == "create-content")
       this.chat();
     if (this.signinService.page == "tab1")
       this.contentService.getContents("chat");
     if (this.signinService.page == "tab2")
       this.getClipsByType("chat");
     this.signinService.type = "chat";
   }
 }
}
