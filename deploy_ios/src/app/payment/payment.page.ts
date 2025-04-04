import { Component, OnInit } from '@angular/core';
import {PaymentService} from '../services/payment.service'
import {PlayclipsService} from '../services/playclips.service'
import {SigninService} from '../services/sign-in.service'
import {Charge} from '../models/charge'
import {BlockchainTransaction} from '../models/blockchain-transaction'
import { NavController } from '@ionic/angular'

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {
   constructor(private paymentService: PaymentService, private playclipsService: PlayclipsService, private signinService: SigninService, private navCtrl: NavController) {
   }

  ngOnInit() {
  }
  cvc: string = "";
  key1: string = "";
  charge: Charge = new Charge();
  transaction: BlockchainTransaction = new BlockchainTransaction();

  async chargeCR() {
    this.paymentService.stripeToken(this.cvc).subscribe(response => {
        console.log(response);
    	this.charge.stripeToken = response; 
    });
    await this.sleep(1000);
    this.charge.amount =  this.playclipsService.playclip.price * 100;
    this.charge.description =  this.playclipsService.playclip.title;
    this.paymentService.chargeFn(this.charge).subscribe(response => {
        console.log(response);
    });
    this.playclipsService.bought(this.playclipsService.playclip).subscribe(response => {
        console.log(response);
    });
    this.navCtrl.navigateForward("tab4")
  }
  async blockchainTransaction() {
    // this.transcation.value =  this.playclipsService.playclip.price * 100;
    this.transaction.value =  String(this.playclipsService.playclip.price);
    this.transaction.fromId =  this.signinService.userDetails.key1; 
    this.transaction.fromPrivateId =  this.signinService.userDetails.key2;
    this.transaction.toId =  this.getToId(this.playclipsService.playclip.login);
    this.paymentService.blockchainTransaction(this.transaction).subscribe(response => {
        console.log(response);
    });
    this.navCtrl.navigateForward("tab4")
  }
  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }  
  getToId(login) : string {
   this.signinService.getUser(login).subscribe(response => {
        console.log(response);
        this.signinService.getUserDetails(response.email).subscribe(response2 => {
           this.key1 =  response2.key1;
           return this.key1;
        });
    });
    return this.key1; 
   }
}
