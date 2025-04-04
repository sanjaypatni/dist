import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateContentsPageRoutingModule } from './create-contents-routing.module';

import { CreateContentsPage } from './create-contents.page';
import { SharedComponentsModule } from '../components/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateContentsPageRoutingModule, 
    SharedComponentsModule
  ],
  declarations: [CreateContentsPage]
})
export class CreateContentsPageModule {}
