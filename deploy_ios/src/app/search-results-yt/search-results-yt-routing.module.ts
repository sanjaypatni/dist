import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchResultsYTPage } from './search-results-yt.page';

const routes: Routes = [
  {
    path: '',
    component: SearchResultsYTPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchResultsYTPageRoutingModule {}
