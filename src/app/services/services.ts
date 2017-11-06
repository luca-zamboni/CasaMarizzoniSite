import { Component, Input, Injectable, OnInit } from '@angular/core';
import { Apartments } from '../model/models'


const APARTMENTS : Apartments[] = [
    {
        name:"ARNICA", description:"Bellissimo", images:[]
    }
]

@Injectable()
export class ApartamentService {
    getApartments() : Apartments[]{
        return APARTMENTS;
    }
}
