import { Component, Input, Injectable, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { BigData } from '../model/models'
import { DataService } from '../services/services'


@Component({
    templateUrl: '../templates/appartamenti.html'
})
export class AppartamentiComponent {
    title = 'appa';

    constructor(private dataService: DataService) { }
    data: BigData;

    ngOnInit () {
        this.dataService.getAllData().then(data =>{
            this.data=data as BigData;
        });
    }
}
