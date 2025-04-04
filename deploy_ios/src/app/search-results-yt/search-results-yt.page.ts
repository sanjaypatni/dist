import { Component, OnInit, ɵɵstylePropInterpolateV } from '@angular/core';
import { SigninService } from '../services/sign-in.service';
import { IonInfiniteScroll, IonVirtualScroll } from '@ionic/angular';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-search-results-yt',
  templateUrl: './search-results-yt.page.html',
  styleUrls: ['./search-results-yt.page.scss'],
})
export class SearchResultsYTPage implements OnInit {

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  @ViewChild(IonVirtualScroll) virtualScroll: IonVirtualScroll;

  results : any;

  constructor(private signinService : SigninService) { 
      this.ytSearch();
  }
  ionViewWillEnter(){
      this.ytSearch();
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  async ytSearch() {
    var results = this.signinService.YTSearch().subscribe(response => {
      this.results = response.items;
      console.log(this.results);
    });
    await this.sleep(1000);
    
    for (var item in this.results) {
      console.log(item);
      console.log(this.results[item].id.videoId);
      console.log(this.results[item].snippet.title);
      console.log(this.results[item].snippet.thumbnails.default.url);
    }
    this.signinService.searchResults = this.results;

  }

  ngOnInit() {
      //this.ytSearch();
  }

  loadData(event) {

    console.log("load data");

    // Using settimeout to simulate api call
    setTimeout(() => {

      // load more data
      this.ytSearch()

      //Hide Infinite List Loader on Complete
      event.target.complete();

      //Rerender Virtual Scroll List After Adding New Data
      this.virtualScroll.checkEnd();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.results.length == 10) {
        event.target.disabled = true;
      }
    }, 500);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }

  add(title) {
    console.log(title);
  }
}
