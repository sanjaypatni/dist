import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewClipPage } from './view-clip.page';

const routes: Routes = [
  {
    path: '',
    component: ViewClipPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewClipPageRoutingModule {}
