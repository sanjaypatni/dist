import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YtAddPageRoutingModule } from './yt-add-routing.module';

import { YtAddPage } from './yt-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YtAddPageRoutingModule
  ],
  declarations: [YtAddPage]
})
export class YtAddPageModule {}
