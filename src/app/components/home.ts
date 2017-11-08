import { Component, Input, Injectable, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { BigData } from '../model/models'
import { DataService } from '../services/services'


@Component({
    templateUrl: '../templates/home.html'
})
export class HomeComponent implements OnInit {

    constructor(private dataService: DataService) { }
    data: BigData;

    ngOnInit () {
        this.dataService.getAllData().then(function(data){
            console.log(data,"jnjansd");
        });
    }


    title = 'Sono nella fantasmagarica home';

}
