import { Component, OnInit } from '@angular/core';
import { Content } from '../models/content';
import { SigninService } from '../services/sign-in.service';
import { ContentsService } from '../services/contents.service';
import { NavController } from '@ionic/angular'
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-yt-add',
  templateUrl: './yt-add.page.html',
  styleUrls: ['./yt-add.page.scss'],
})
export class YtAddPage implements OnInit {
  href : string;
  publishedAt : string;
  title : string;
  thumbnail : string;
  videoId : string;

  constructor(private router : Router, 
    private signinService : SigninService, 
    private dom : DomSanitizer,
    private contentService: ContentsService) { }

  ngOnInit() {

    this.href = this.router.url;
    console.log(this.router.url);

    var index = this.href.lastIndexOf("/");
    this.publishedAt = this.href.substring(index + 1);
    for (var item in this.signinService.searchResults) {
      if ( this.publishedAt == this.signinService.searchResults[item].snippet.publishedAt) {
      this.videoId = this.signinService.searchResults[item].id.videoId;

      this.videoId = "https://www.youtube.com/embed/" + this.videoId;
      this.title = this.signinService.searchResults[item].snippet.title;
      this.thumbnail = this.signinService.searchResults[item].snippet.thumbnails.default.url;
      }
    }
  }
  ytVideoIdSanitizer() {
    console.log(this.videoId);
   return this.dom.bypassSecurityTrustResourceUrl(this.videoId);
  }
  add() {
    var content = new Content();
    var cnt = 0;
    content.link = this.videoId;
    content.title = this.title;
    content.type = "ytube";
    content.thumbnail = this.thumbnail;
    content.login = this.signinService.user.login;
    this.contentService.createContent(content).subscribe((response) => {
      var cnt = cnt + 1;
      this.signinService.page = "tab1";
      this.router.navigate(['tab1/']);
     });
/**

     this.contentService.publishContent("content-post", content).subscribe((response) => {
      var cnt = cnt + 1;
      this.router.navigate(['tab1/']);
    });
**/



  }
  cancel() {
    this.signinService.page = "tab1";
    this.router.navigate(['create-contents/']);
  }

}
