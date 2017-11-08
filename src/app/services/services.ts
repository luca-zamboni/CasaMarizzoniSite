import { Component, Input, Injectable, OnInit } from '@angular/core';
import { BigData, TextItem, ItemHeader,Apartments } from '../model/models'
import {HttpClient} from '@angular/common/http';

var APARTMENTS : Apartments[] = [
    {
        name:"ARNICA", description:"Bellissimo", images:[]
    }
]

var HEADER_ITEMS : ItemHeader[] = [
    {
        text:"img 1", link:"./assets/img/slider/slider-1.jpg"
    },{
        text:"img 2", link:"./assets/img/slider/slider-2.jpg"
    }
]

var BIG_DATA : BigData ={
    apartments:APARTMENTS, itemHeader:HEADER_ITEMS, generic:[
        {
            id:"paragrafo-home",
            text:"Benvenuti al sud"
        }
    ]
}

@Injectable()
export class DataService {

    constructor(private http: HttpClient) {}

    getAllData() {
        var promise = new Promise((resolve, reject) => {
            this.http.get('/data.json').subscribe(data => {
                resolve(data);
            });
        });
        return promise;
    }
}
