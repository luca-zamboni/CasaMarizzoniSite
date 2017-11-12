import { Component, Input, Injectable, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';


@Component({
    selector:'presentation',
    templateUrl: '../templates/presentation.html'
})
export class PresentationComponent {
    @Input() data:any;
}
