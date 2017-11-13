import { Component, Input, Injectable, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { BigData,Apartments } from '../model/models'
import { DataService } from '../services/services'


@Component({
    templateUrl: '../templates/appartamenti.html'
})
export class AppartamentiComponent {
    title = 'appa';

    constructor(private dataService: DataService) { }
    data: BigData;

    activeAppa:Apartments;

    ngOnInit () {
        this.dataService.getAllData().then(data =>{
            this.data=data as BigData;
            this.setActiveAppa(0);
        });
    }

    setActiveAppa (i:number) {
        this.activeAppa = this.data.apartments[i];
    }

}
