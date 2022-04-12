import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MainRoutingModule } from './main-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { UtilsModule } from '../utils/utils.module';
import { MainComponent } from './main.component';
import { UtilsComponent } from '../utils/utils.component';

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    BrowserModule,
    MainRoutingModule,
    HttpClientModule,
    RouterModule,
    UtilsModule
  ],
  providers: [],
  exports: [
      HttpClientModule,MainComponent

  ]
})
export class MainModule { 
}
