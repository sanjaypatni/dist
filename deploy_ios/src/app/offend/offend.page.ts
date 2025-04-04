import { Component, OnInit } from '@angular/core';
import { ObjectCnt } from '../models/object-cnt';
import { ContentsService } from '../services/contents.service';

@Component({
  selector: 'app-offend',
  templateUrl: './offend.page.html',
  styleUrls: ['./offend.page.scss'],
})
export class OffendPage implements OnInit {

  objectCntList: any;

  constructor(private contentService: ContentsService) { }

  ngOnInit() {
    this.contentService.getObjectCnt().subscribe(response => {
       this.objectCntList = response;
       console.log(response);
      });
  }
  ionViewWillEnter() {
    this.contentService.getObjectCnt().subscribe(response => {
       this.objectCntList = response;
    });
  }
  delete(login) {
   console.log(login);
  }

}
