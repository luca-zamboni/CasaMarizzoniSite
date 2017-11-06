import { Component, Input, Injectable, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';


@Component({
    selector:'section',
    templateUrl: '../templates/section.html'
})
export class SectionComponent {
    @Input() obj:any;
}
