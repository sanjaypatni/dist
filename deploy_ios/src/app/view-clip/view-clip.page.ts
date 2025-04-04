import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Clip } from '../models/clip';
import { ClipsService } from '../services/clips.service';

@Component({
  selector: 'app-view-clip',
  templateUrl: './view-clip.page.html',
  styleUrls: ['./view-clip.page.scss'],
})
export class ViewClipPage implements OnInit {
  href: string = "";
  item: Clip = new Clip();

  constructor(private router: Router, private clipService: ClipsService) { this.ngOnInit(); }

  ngOnInit() {
    this.href = this.router.url;
    var index = this.href.lastIndexOf("/");
    var id = this.href.substring(index + 1);
    console.log(id);
    this.clipService.getClip(id).subscribe(response => {
      console.log(response);
      this.item = response;
    });

  }

}
