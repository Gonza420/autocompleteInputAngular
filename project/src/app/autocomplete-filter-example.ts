import { HttpClient } from '@angular/common/http';
import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable, Subject} from 'rxjs';
import {debounceTime, distinctUntilChanged, filter, map, startWith} from 'rxjs/operators';
import { RestService } from './rest.service';

/**
 * @title Filter autocomplete
 */
@Component({
  selector: 'autocomplete-filter-example',
  templateUrl: 'autocomplete-filter-example.html',
  styleUrls: ['autocomplete-filter-example.css'],
})
export class AutocompleteFilterExample implements OnInit {

  @Output() onSelect = new EventEmitter();
  
  // variables
  myControl = new FormControl();
  // query: string[] = ["Italy", "Spain", "Portugal", "Macedonia"];
  options: string[] = [];
  filteredOptions: Observable<string[]>;
  searchTerm$ = new Subject<string>();
  timeoutTimer: any;
  inputValue: any;

  constructor( protected restService: RestService )
  { }

  ngOnInit() {

    // example code
    // this.filteredOptions = this.myControl.valueChanges.pipe(
    //   startWith(''),
    //   map(value => this._filter(value)),
    // );

    // my code
    this.watcherSearchTerm();
    // init time out
    this.initTimeOut();
  }

  // example methods
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  // my methods
  watcherSearchTerm() {
    this.searchTerm$.pipe(
      debounceTime(50),
      distinctUntilChanged(),
      filter((term) => term != undefined && term.length >= 1))
      .subscribe((result: any) => {
        console.log("CUALQUIER COSA", result)
        if (this.timeoutTimer) {
          clearTimeout(this.timeoutTimer);
          this.timeoutTimer = undefined;
        }
        //query
        // this.options = this.query;
        this.getItem(result);

      });
  }


  onInputChange() {
    var inputValue = (<HTMLInputElement>document.getElementById('inputAutocomplete')).value;


    if (!inputValue || inputValue.trim() == '') {
      this.initTimeOut();
      return;
    }


    this.searchTerm$.next(inputValue);

  }

  
  selected(value: any) {
    this.inputValue = value;
    console.log("EMITER", value);
    this.onSelect.emit(value);
  }

  getItem(item: string) {
    
    if (!item || item.trim() == '') {
      this.restService.getItems().subscribe(
        result => this.options = result
      );
    } else {
      this.restService.getItemByQuery(item).subscribe(
        result => this.options = result
      );
    }
  }

  initTimeOut() {
    this.timeoutTimer = setTimeout(() => {
      //query
      // this.options = this.query;
      this.getItem("");
    }, 500);
  }






}


/**  Copyright 2022 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */