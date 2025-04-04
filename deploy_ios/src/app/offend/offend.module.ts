import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OffendPageRoutingModule } from './offend-routing.module';

import { OffendPage } from './offend.page';
import { SharedComponentsModule } from '../components/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedComponentsModule,
    OffendPageRoutingModule
  ],
  declarations: [OffendPage]
})
export class OffendPageModule {}
