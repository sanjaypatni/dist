import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateContentsPage } from './create-contents.page';

const routes: Routes = [
  {
    path: '',
    component: CreateContentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateContentsPageRoutingModule {}
