import { Component, OnInit } from '@angular/core';
import { SigninService } from '../services/sign-in.service';
import { NavController } from '@ionic/angular'
import { Api } from '../api';

@Component({
  selector: 'app-delete-account',
  templateUrl: './delete-account.page.html',
  styleUrls: ['./delete-account.page.scss'],
})
export class DeleteAccountPage implements OnInit {
  constructor(private signinService: SigninService, private navCtrl: NavController, private api : Api) { }
  ngOnInit() {
  }
  deleteAccount() {
      this.signinService.deleteAccount(this.signinService.user.login);
      this.signinService.user.login = "https://playclips-api.com/app/assets/img/sanjay.png";
      this.navCtrl.navigateBack(`sign-in`);
  }

}
