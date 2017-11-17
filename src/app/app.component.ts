import { Component, Input, Injectable, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { Meta } from '@angular/platform-browser';
import { BigData } from './model/models'
import { DataService } from './services/services'


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    constructor(private dataService: DataService, private meta: Meta) { }

    title = 'Testo';
    data: BigData;
    loaded=false;

    isAdmin() {
        var href = location.href;
        var last = href.substr(href.lastIndexOf('/') + 1)
        return last == "admin";
    }


    ngOnInit () {
        this.dataService.getAllData().then(data =>{

            this.data=data as BigData;
            this.loaded = true;
        });

        this.meta.addTags([
            { name: 'twitter:title', content: 'Content Title' },
            { property: 'og:title', content: 'Content Title' }
        ]);
    }

}
