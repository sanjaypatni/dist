import { Component, OnInit } from '@angular/core';
import {Platform, AlertController, NavController, ToastController, LoadingController} from '@ionic/angular'
import { ContentsService } from '../services/contents.service';
import { SigninService } from '../services/sign-in.service';
import { IonInfiniteScroll, IonVirtualScroll } from '@ionic/angular';
import { ViewChild } from '@angular/core';
import { Content } from '../models/content';
import { Visit } from '../models/visit';
import { ObjectCnt } from '../models/object-cnt';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  hlink: string;
  pc_link = "https://playclips-api.com/content/listPlayclipsIonic.html";
  visit : Visit;
  objectCnt : ObjectCnt = new ObjectCnt();
  assetLink = "assets/img/assets.png"

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  @ViewChild(IonVirtualScroll) virtualScroll: IonVirtualScroll;

  host : string;
  selectedRadioGroup:any;
  selectedRadioItem:any;
   ionViewWillEnter() {
     this.contentService.getObjectCntByLogin().subscribe(response => {
       this.objectCnt = response;
      });
    if (this.signinService.user && this.signinService.selectedTab <=1 )
           this.contentService.getContents(this.signinService.type);
    else
	   this.contentService.getAllContents();
   }
  
  constructor(private signinService: SigninService, 
    private contentService: ContentsService,
    private platform: Platform,
    private navCtrl: NavController 
    ) { 
    // this.picture = this.signinService.user.login;


   this.contentService.getObjectCntByLogin().subscribe(response => {
      this.objectCnt = response;
    });

    this.signinService.platform = this.platform;
    this.signinService.page = "tab1";
    this.ionViewWillEnter();
    this.host = window.location.hostname;
    this.hlink = "assets/img/header.png";
    this.signinService.hlink = this.hlink;
    if ( this.host == "coretakeaways.com" && this.signinService.user.login == "" )
    {
     this.hlink = "assets/img/header-main1.png";
     this.signinService.user.login = "assets/img/demo.png";
     this.signinService.hlink = this.hlink;
   }
    if ( this.host == "localhost" && this.signinService.user.login == "" )
    {
     this.hlink = "assets/img/header-main1.png";
     this.signinService.user.login = "assets/img/demo.png";
     this.signinService.hlink = this.hlink;
    }
    if ( this.host == "kidsplayclips.com" && this.signinService.user.login == "" )
    {
     this.hlink = "assets/img/home_kids_1.png";
     this.signinService.user.login = "assets/img/home_kids_1.png";
     this.signinService.hlink = this.hlink;
    }
    if ( this.host == "demo-patni.com" && this.signinService.user.login == "")
    {
     this.hlink = "assets/img/header_tw.png";
     this.signinService.hlink = this.hlink;
     this.signinService.user.login = "assets/img/logo.png";
    }
    if ( this.host == "1895mccandless.com" && this.signinService.user.login == "" )
    {
     this.hlink = "assets/img/header_home_1.png";
     this.signinService.hlink = this.hlink;
     this.signinService.user.login = "assets/img/header_home_1.png";
    }
    if (this.platform.platforms().includes("android") && this.signinService.user.login == "" ) {
     this.hlink = "assets/img/header-main1.png";
     this.signinService.user.login = "assets/img/demo.png";
     this.signinService.hlink = this.hlink;
    }
    if (this.platform.platforms().includes("ios") && this.signinService.user.login == "" ) {
     this.hlink = "assets/img/header-main1.png";
     this.signinService.user.login = "assets/img/demo.png";
     this.signinService.hlink = this.hlink;
    }
    }
    ionViewDidLoad() {
     this.signinService.page = "tab1";
    }
    ngOnInit() {
     this.signinService.page = "tab1";
    }
    ionViewDidEnter()
    {
     this.signinService.page = "tab1";
    } 

    createContents() {
     this.signinService.page = "create-contents";
     this.navCtrl.navigateForward('create-contents');
    }

    signin() {
     console.log("Signin");
     this.navCtrl.navigateForward('sign-in');
     this.pc_link = this.signinService.pc_link;
    }
    signout() {
     console.log("Signin");
     this.navCtrl.navigateForward('sign-in');
    }
    chat() {
      this.navCtrl.navigateForward('chat');
    }
    offend() {
      // if ( this.signinService.user.login == "assets/img/admin.png" )
       this.navCtrl.navigateForward('offend');
    }
    purgeContents() {
      console.log("Purge");
      this.contentService.purge();
      this.contentService.getAllContents();
    }
  
  showDetails(content) {
    console.log(content.title);
    this.signinService.content = content;
    this.navCtrl.navigateForward("content-details");
  }
  playclip() {
    this.navCtrl.navigateForward("demo");
  }

  loadData(event) {

    // Using settimeout to simulate api call
    setTimeout(() => {

      // load more data

      //Hide Infinite List Loader on Complete
      event.target.complete();

      //Rerender Virtual Scroll List After Adding New Data
      this.virtualScroll.checkEnd();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.contentService.contentsData.length == 1000) {
        event.target.disabled = true;
      }
    }, 500);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }
  contentDetails(id) {
     this.navCtrl.navigateForward("/content-details/" + id);
  }
  show(id, type, link) {
/**
   if ( type == "pdf") {
    console.log(type);
    window.open(link, '_blank');
   }
   else 
**/
    this.navCtrl.navigateForward("/content-details/" + id);
  }
  showProfile() {
    console.log("profile");
    this.navCtrl.navigateForward('profile');
  }
  payment() {
    console.log("payment");
    this.navCtrl.navigateForward('payment');
  }
  createProfile() {
    console.log("create profile");
    this.navCtrl.navigateForward('create-profile');
  }
  subscribe() {
   this.navCtrl.navigateForward("subscription");
  }

}
