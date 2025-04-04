import { Component, OnInit, Input } from '@angular/core';
import { Playclip } from '../../models/playclip'
import { PlayclipsService } from '../../services/playclips.service'
import {Platform, AlertController, NavController, ToastController, LoadingController} from '@ionic/angular'
import { ShareService } from '../../services/share.service';

@Component({
  selector: 'app-playclips',
  templateUrl: './playclips.component.html',
  styleUrls: ['./playclips.component.scss'],
})
export class PlayclipsComponent implements OnInit {

  @Input() playclip: Playclip;
  constructor(private navCtrl: NavController, private playclipsService: PlayclipsService, private shareService: ShareService) { }
  ngOnInit() {}
  play(id) {
   this.navCtrl.navigateForward('play/' + id);
  }
  buy(id) {
   this.playclipsService.playclip = this.playclip;
   this.navCtrl.navigateForward('payment');
  }
  share(id) {
   this.navCtrl.navigateForward('share/' + id);
  }
  preview(id) {
   this.navCtrl.navigateForward('preview/' + id);
  }
  delete(id) {
   this.playclipsService.delete(id);
   this.navCtrl.navigateForward('tab4/' + id);
  }
  sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
   }
   mailPlayclip(id){
   console.log("mail");
   this.shareService.mail(id).subscribe(response => {
      console.log("email");
      console.log(response);
      console.log("email");
    });
   this.shareService.text(id).subscribe(response => {
      console.log("text");
      console.log(response);
    });
  }   
  waPlayclip(id){
   console.log("wahatsapp");
   this.shareService.whatsapp(id).subscribe(response => {
      console.log("whatsapp");
      console.log(response);
    });
  }
}
