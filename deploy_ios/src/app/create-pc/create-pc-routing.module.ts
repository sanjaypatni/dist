import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreatePcPage } from './create-pc.page';

const routes: Routes = [
  {
    path: '',
    component: CreatePcPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreatePcPageRoutingModule {}
