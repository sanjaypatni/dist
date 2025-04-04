import { Component, OnInit } from '@angular/core';
import {Platform, AlertController, NavController, ToastController, LoadingController} from '@ionic/angular'
import { SigninService } from '../services/sign-in.service';
import { PlayclipsService } from '../services/playclips.service';
import { IonInfiniteScroll, IonVirtualScroll } from '@ionic/angular';
import { ViewChild } from '@angular/core';
import {Messages} from '../messages'
import {Playclip} from '../models/playclip'
import {Clip} from '../models/clip'

@Component({
  selector: 'app-create-pc',
  templateUrl: './create-pc.page.html',
  styleUrls: ['./create-pc.page.scss'],
})
export class CreatePcPage implements OnInit {
@ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
@ViewChild(IonVirtualScroll) virtualScroll: IonVirtualScroll;
  ngOnInit() {
  }
  selectedRadioGroup:any;
  selectedRadioItem:any;
  message: string = "";
  mlink : string = "";
  title: string;
  description: string;
  createdBy: string;
  toast: any;
  playclip : Playclip = new Playclip();
  constructor(private signinService: SigninService, private playclipsService: PlayclipsService, private toastCtrl: ToastController, private navCtrl: NavController,  private messages : Messages) {
   
  }
  delete(link) {
     for (let i = 0; i<this.signinService.pcClips.length; i++)
      this.signinService.pcClips[i].ilink = link;
     const uClips = this.signinService.pcClips.filter(this.deleteItem);
     this.signinService.pcClips = uClips;
     this.signinService.pcCnt = this.signinService.pcCnt - 1;
    }
   deleteItem(item) {
     return item.ilink != item.link;
   }
   savePc() {
     this.validate();
     if ( this.message.length > 0 )
     {
      this.showToast(this.message);
      this.message = "";
      return;
     }
     this.playclip = new Playclip();
     this.playclip.login = this.signinService.user.login;
     this.playclip.title = this.title;
     this.playclip.description = this.description;
     this.playclip.createdBy = this.createdBy;
     this.playclip.clips = this.signinService.pcClips;
     for (let i = 0; i<this.signinService.pcClips.length; i++)
      this.playclip.price = this.playclip.price + this.signinService.pcClips[i].price; 
     this.playclip.thumbnail = this.signinService.pcClips[0].thumbnail;
     this.playclipsService.createPlayclips(this.playclip).subscribe((response) => {
      this.message = this.messages.success;
      this.showToast(this.message);
      this.navCtrl.navigateForward("tab4")
    });
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
      if (this.signinService.pcClips.length == 1000) {
        event.target.disabled = true;
      }
    }, 500);
  }
  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }
  showToast(message : string) {
  this.toast = this.toastCtrl.create({
    message: message,
    duration: 3000
  }).then((toastData) => {
    toastData.present();
  });
 }
 validate() {
    if ( this.title != undefined ) {
     if (this.title.length < 4 )
      this.message = this.messages.titleLenght;
    }
    else
      this.message = this.messages.titleRequired;
  }

}

