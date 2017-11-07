import { Component, Input, Injectable, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { BigData } from '../model/models'
import { DataService } from '../services/services'


@Component({
    templateUrl: '../templates/home.html'
})
export class HomeComponent {
    constructor(private dataService: DataService) { }
    data: BigData = this.dataService.getAllData();

    title = 'Sono nella fantasmagarica home';

}
