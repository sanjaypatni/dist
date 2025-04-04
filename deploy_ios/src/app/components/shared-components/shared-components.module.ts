import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TileComponent } from '../tile/tile.component';
import { TopNavComponent } from '../top-nav/top-nav.component';
import { ObjectComponent } from '../object/object.component';
import { PlayclipsComponent } from '../playclips/playclips.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule
  ],
  declarations: [TileComponent, TopNavComponent, PlayclipsComponent, ObjectComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [TileComponent, TopNavComponent, PlayclipsComponent, ObjectComponent]
})
export class SharedComponentsModule {}
