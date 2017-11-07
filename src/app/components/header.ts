import { Component, Input, Injectable, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DataService } from '../services/services'
import { ItemHeader } from '../model/models'
declare var jquery:any;
declare var $ :any;

@Component({
    selector: 'header',
    templateUrl: '../templates/header.html'
})
export class HeaderComponent implements AfterViewInit  {

    constructor(private dataService: DataService) { }

    items: ItemHeader[] = this.dataService.getHeaderItems();

    ngAfterViewInit() {
        console.log(this.items);
        $(".parallax-slider").parallaxSlider({

    		speedSlide: 3000,
    		speedParallax: 0.5,
    		description: true

    	});
    }
}
