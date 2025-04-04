import { Component, OnInit, Input } from '@angular/core';
import { ObjectCnt } from '../../models/object-cnt';
import { SigninService } from '../../services/sign-in.service';
import { Api } from '../../api';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-object',
  templateUrl: './object.component.html',
  styleUrls: ['./object.component.scss'],
})
export class ObjectComponent implements OnInit {
  @Input() item: ObjectCnt;;

  constructor(private signinService: SigninService, private navCtrl: NavController, private api : Api) { }

  ngOnInit() {}

  block(login) {
    // this.signinService.deleteAccount(login);
    if (this.signinService.user.login == "assets/img/admin.png")
    {
        this.signinService.blockUser(login);
    	this.navCtrl.navigateBack("sign-in?login=" + login);
    }
    else
    	this.navCtrl.navigateBack(`sign-in?login=assets/img/admin.png`);

  }

}
