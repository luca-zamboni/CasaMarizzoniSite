import { Component, Input, Injectable, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Apartments } from '../model/models'
import { DataService } from '../services/services'


@Component({
    templateUrl: '../templates/home.html'
})
export class HomeComponent {
    constructor(private appaService: DataService) { }

    appa: Apartments[] = this.appaService.getApartments();
    title = 'Sono nella fantasmagarica home';
}
