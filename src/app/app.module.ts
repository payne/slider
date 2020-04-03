import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxBootstrapSliderModule } from 'ngx-bootstrap-slider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Slider1Component } from './slider1/slider1.component';

@NgModule({
  declarations: [
    AppComponent,
    Slider1Component
  ],
  imports: [
    BrowserModule,
    NgxBootstrapSliderModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
