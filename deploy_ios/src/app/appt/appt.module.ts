import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApptPageRoutingModule } from './appt-routing.module';

import { ApptPage } from './appt.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApptPageRoutingModule
  ],
  declarations: [ApptPage]
})
export class ApptPageModule {}
