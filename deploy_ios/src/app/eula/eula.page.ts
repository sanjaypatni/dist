import { Component, OnInit } from '@angular/core';
import {Platform,  NavController} from '@ionic/angular'
import {SigninService} from '../services/sign-in.service';
@Component({
  selector: 'app-eula',
  templateUrl: './eula.page.html',
  styleUrls: ['./eula.page.scss'],
})
export class EulaPage implements OnInit {
  role : string = "creator";
   selectedRadioGroup: any;
  constructor(private navCtrl: NavController, private signinService: SigninService) {
  }
  ngOnInit() {
  }
  accept() {
      this.navCtrl.navigateForward('signup');
  }
  cancel() {
      this.navCtrl.navigateForward('sign-in');
  }
  radioGroupChange(event) {
    this.selectedRadioGroup = event.detail;
    this.signinService.role = this.selectedRadioGroup.value;
 }
}
