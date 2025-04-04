import { Component, Input, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Clip } from '../../models/clip'
import { SigninService } from '../../services/sign-in.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss'],
})
export class TileComponent implements OnInit {


  @Input() item: Clip;


  constructor(public navCtrl: NavController, public signinService : SigninService, private dom: DomSanitizer) {
  }
  ngOnInit() {
  }
  viewPlayclipClip() {
   this.navCtrl.navigateForward('view-clip/' + this.item.id);
  }
  review() {
   this.navCtrl.navigateForward('edit-clip/' + this.item.id);
  }
  addToPc(clip : Clip) {
  for (let i = 0; i < this.signinService.pcCnt;  i++) {
     if (clip.link ===  this.signinService.pcClips[i].link)
       return;
  }
  this.signinService.pcClips[this.signinService.pcCnt] = clip;
  clip.disabled = true;
  this.signinService.pcCnt = this.signinService.pcCnt + 1;
 }
}
