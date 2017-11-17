import { Component, Input, Injectable, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { Meta } from '@angular/platform-browser';
import { BigData, MetaTag } from './model/models'
import { DataService } from './services/services'


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    router:ActivatedRoute;

    constructor(private dataService: DataService, private meta: Meta, router: ActivatedRoute) {
        this.router = router;

        this.router.paramMap.subscribe(params => {
            console.log("jnajswer43rwWdnjn");
            if(this.loaded) {
                var route = this.getRoute();
                var meta;
                this.data.meta.forEach((e,i) => {

                    if(e.route === route) {
                        this.meta.addTags([
                            { name: e.name, content: e.content },
                        ]);
                    }

                });
            }
        });
    }

    title = 'Testo';
    data: BigData;
    loaded=false;



    isAdmin() {
        this.getRoute() == "admin";
    }

    getRoute() {
        var href = location.href;
        var last = href.substr(href.lastIndexOf('/') + 1)
        return last
    }


    ngOnInit () {
        this.dataService.getAllData().then(data =>{
            this.data=data as BigData;
            this.loaded = true;

        });

    }

}
