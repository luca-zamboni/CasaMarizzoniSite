import { Component, Input, Injectable, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DataService } from '../services/services'
import { ItemHeader, BigData } from '../model/models'
declare var jquery:any;
declare var $ :any;

@Component({
    selector: 'header',
    templateUrl: '../templates/header.html'
})
export class HeaderComponent implements AfterViewInit, OnInit  {

    constructor(private dataService: DataService) { }

    data: BigData;
    items: ItemHeader[];

    ngOnInit() {
        this.dataService.getAllData().then(data => {
            console.log("wat")
            this.data = <BigData>data;
            this.items = (data as BigData).itemHeader;
        });
    }

    ngAfterViewInit() {
        setTimeout(_=>{
            $(".parallax-slider").parallaxSlider({
                speedSlide: 3000,
                speedParallax: 0.5,
                description: true

            });

        });

    }
}
