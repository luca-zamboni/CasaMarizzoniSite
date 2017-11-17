import { Component, Input, Injectable, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { BigData,Apartments,Presentation } from '../model/models'
import { DataService } from '../services/services'


@Component({
    templateUrl: '../templates/appartamenti.html'
})
export class AppartamentiComponent {
    title = 'appa';

    constructor(private dataService: DataService) { }
    data: BigData;

    presList:Presentation[] = [];

    ngOnInit () {
        this.dataService.getAllData().then(data =>{
            this.data=data as BigData;
            this.initPresentation();
        });
    }

    initPresentation () {
        var ap = this.data.apartments;
        ap.forEach((a, i) => {
            this.presList.push({
                id:a.id,
                title:a.name,
                text:a.description,
                img:a.images[0],
                titleimg:a.images[0],
                descimg:undefined,
                linkimg:a.name,
                classimg:a.name,
                imgLeft: i%2==0,
                imagesGallery:a.images,
                imagesDesc:a.imagesDesc
            })
        })
        console.log(this.presList);
    }
}
