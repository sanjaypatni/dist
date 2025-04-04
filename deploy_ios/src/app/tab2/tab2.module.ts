import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';

import { Tab2PageRoutingModule } from './tab2-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedComponentsModule } from '../components/shared-components/shared-components.module';
import { SafeHtmlPipe } from '../safe-html.pipe';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab2PageRoutingModule,
    NgxPaginationModule,
    SharedComponentsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [Tab2Page, SafeHtmlPipe]
})
export class Tab2PageModule {}
