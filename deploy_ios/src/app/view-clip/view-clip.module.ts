import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewClipPageRoutingModule } from './view-clip-routing.module';

import { ViewClipPage } from './view-clip.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewClipPageRoutingModule
  ],
  declarations: [ViewClipPage]
})
export class ViewClipPageModule {}
