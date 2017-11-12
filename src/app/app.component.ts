import { Component, Input, Injectable, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { BigData } from './model/models'
import { DataService } from './services/services'


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Testo';
    data: BigData;
    loaded=false;

    isAdmin() {
        var href = location.href;
        var last = href.substr(href.lastIndexOf('/') + 1)
        return last == "admin";
    }

    constructor(private dataService: DataService) { }
    ngOnInit () {
        this.dataService.getAllData().then(data =>{

            this.data=data as BigData;
            this.loaded = true;
        });
    }

}
