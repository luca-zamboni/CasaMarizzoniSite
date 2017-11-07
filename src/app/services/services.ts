import { Component, Input, Injectable, OnInit } from '@angular/core';
import { Apartments  } from '../model/models'
import { ItemHeader } from '../model/models'
import { BigData } from '../model/models'

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
        apartments:APARTMENTS, itemHeader:HEADER_ITEMS
}

@Injectable()
export class DataService {
    getApartments() : Apartments[]{
        return APARTMENTS;
    }

    getHeaderItems() : ItemHeader[]{
        return HEADER_ITEMS;
    }

    getAllData() : BigData{
        return BIG_DATA;
    }
}
