import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditClipPage } from './edit-clip.page';

const routes: Routes = [
  {
    path: '',
    component: EditClipPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditClipPageRoutingModule {}
