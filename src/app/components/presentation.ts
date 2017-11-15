import { Component, Input, Injectable, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { BigData,Apartments,Presentation } from '../model/models';


@Component({
    selector:'presentation',
    templateUrl: '../templates/presentation.html'
})
export class PresentationComponent {
    @Input() data:Presentation[];
}
