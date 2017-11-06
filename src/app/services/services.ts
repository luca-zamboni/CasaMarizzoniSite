import { Component, Input, Injectable, OnInit } from '@angular/core';
import { Apartments  } from '../model/models'
import { ItemHeader } from '../model/models'

const APARTMENTS : Apartments[] = [
    {
        name:"ARNICA", description:"Bellissimo", images:[]
    }
]

const HEADER_ITEMS : ItemHeader[] = [
    {
        text:"img 1", link:"assets/img/slider/slider-1.jpg"
    },{
        text:"img 1", link:"assets/img/slider/slider-2.jpg"
    }
]

@Injectable()
export class DataService {
    getApartments() : Apartments[]{
        return APARTMENTS;
    }

    getHeaderItems() : ItemHeader[]{
        return HEADER_ITEMS;
    }
}
