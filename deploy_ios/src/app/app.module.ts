import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Api } from './api';
import { Messages } from './messages';
import { Subscription } from './models/subscription';
import { Tab1Page } from './tab1/tab1.page';
import { SafeHtmlPipe } from './safe-html.pipe';
import { SafePipe } from './safe.pipe';

@NgModule({
  declarations: [AppComponent, SafeHtmlPipe, SafePipe],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, Api, Messages, Subscription],
  bootstrap: [AppComponent],
  exports: [
        SafePipe
    ] 
})
export class AppModule {}
