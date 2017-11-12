import { Component, Input, Injectable, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { BigData } from '../model/models'
import { DataService } from '../services/services'
import { PipeTransform, Pipe } from '@angular/core';
import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule
} from '@angular/material';


@Pipe({name: 'keys'})
export class KeysPipe implements PipeTransform {
    transform(value, args:string[]) : any {
      let keys = [];
      for (let key in value) {
        keys.push({key: key, value: value[key]});
      }
      return keys;
    }
}

@Component({
    selector:'admin',
    templateUrl: '../templates/admin.html'
})
export class AdminComponent  implements OnInit {

    constructor(private dataService: DataService) { }
    data: BigData = undefined;

    ngOnInit () {
        this.dataService.getAllData().then(data =>{
            this.data = <BigData> data;
        });
    }

    salvaGeneric (key1, key2, value) {
        console.log(key1, key2, value)
        this.data.generic[key1][key2] = value;
    }

}
