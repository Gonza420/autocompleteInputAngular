import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { UtilsComponent } from './utils.component';

@NgModule({
  
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule
  ],
  declarations: [
      UtilsComponent
  ],
  providers: [],
  exports: [
      HttpClientModule,
      UtilsComponent
  ]
})
export class UtilsModule { 
    constructor(){}
}
