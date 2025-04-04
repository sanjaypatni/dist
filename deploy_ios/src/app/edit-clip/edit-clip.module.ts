import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditClipPageRoutingModule } from './edit-clip-routing.module';

import { EditClipPage } from './edit-clip.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditClipPageRoutingModule
  ],
  declarations: [EditClipPage]
})
export class EditClipPageModule {}
