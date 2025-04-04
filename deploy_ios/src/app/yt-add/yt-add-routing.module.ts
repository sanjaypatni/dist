import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YtAddPage } from './yt-add.page';

const routes: Routes = [
  {
    path: '',
    component: YtAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YtAddPageRoutingModule {}
