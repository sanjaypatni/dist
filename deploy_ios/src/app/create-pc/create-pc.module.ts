import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreatePcPageRoutingModule } from './create-pc-routing.module';

import { CreatePcPage } from './create-pc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreatePcPageRoutingModule
  ],
  declarations: [CreatePcPage]
})
export class CreatePcPageModule {}
