import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';


import {MaterialExampleModule} from '../material.module';
import {AutocompleteFilterExample} from './autocomplete-filter-example';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {HttpClientModule} from '@angular/common/http';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AutocompleteFilterExample,AutocompleteComponent,AppComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MaterialExampleModule,
    ReactiveFormsModule,
    
  ],
  exports: [
    AppComponent,
    AutocompleteComponent
],
  providers: [],
  bootstrap: [AutocompleteFilterExample,AutocompleteComponent,AppComponent],
})
export class AppModule {}
