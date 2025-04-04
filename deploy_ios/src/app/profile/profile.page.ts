import { Component, OnInit } from '@angular/core';
import { SigninService } from '../services/sign-in.service';
import { SubscriptionService} from '../services/subscription.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
   at : String
   user : String;
   subscription : String;

  constructor(private signInService : SigninService, private subscriptionService : SubscriptionService) {
      this.ngOnInit();
   }

 async ngOnInit() {
  this.at = this.signInService.at;
  console.log(this.signInService.at);
  this.user = this.signInService.user.login;
  this.subscriptionService.get(this.signInService.user.login).subscribe((response) => {
     this.subscription  = response.subscription;
     console.log(this.subscription);
   });
   await this.sleep(500);
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

}
