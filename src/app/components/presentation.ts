import { Component, Input, Injectable, AfterViewInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { BigData,Apartments,Presentation } from '../model/models';

declare var $ :any;

@Component({
    selector:'presentation',
    templateUrl: '../templates/presentation.html'
})
export class PresentationComponent implements AfterViewInit{
    @Input() data:Presentation;

    ngAfterViewInit() {
        $('.lightbox' +this.data.id).magnificPopup({
            type: 'image',
            gallery:{enabled:true},
            titleSrc: 'title'
        });
    }

}
