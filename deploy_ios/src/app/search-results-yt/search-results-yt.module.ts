import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchResultsYTPageRoutingModule } from './search-results-yt-routing.module';

import { SearchResultsYTPage } from './search-results-yt.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchResultsYTPageRoutingModule
  ],
  declarations: [SearchResultsYTPage]
})
export class SearchResultsYTPageModule {}
