import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PreviewPageRoutingModule } from './preview-routing.module';
import { SharedComponentsModule } from '../components/shared-components/shared-components.module';
import { PreviewPage } from './preview.page';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PreviewPageRoutingModule,
    NgxPaginationModule,
    SharedComponentsModule
  ],
  declarations: [PreviewPage]
})
export class PreviewPageModule {}
