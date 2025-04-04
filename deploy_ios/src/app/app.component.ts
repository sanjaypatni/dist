import { Component } from '@angular/core';
import {SigninService} from './services/sign-in.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  tab1 : string = "Assets";
  tab2 : string = "Likes";
  tab3 : string = "Core";
  tab4 : string = "Playclips";
  tab5 : string = "Royalties";
  constructor(private signinService: SigninService) {
 }
}
