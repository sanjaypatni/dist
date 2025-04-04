import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OffendPage } from './offend.page';

const routes: Routes = [
  {
    path: '',
    component: OffendPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OffendPageRoutingModule {}
