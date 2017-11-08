import { Component, Input, Injectable, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { BigData } from '../model/models'
import { DataService } from '../services/services'
import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule
} from '@angular/material';


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


}
