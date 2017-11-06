import { Component, Input, Injectable, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

export class MenuItem {
    route:string
    text:string
}

const ITEMS : MenuItem[] = [
    {route:"home", text:"Home"},
    {route:"appartamenti", text:"Appartamenti"}
]

@Component({
    selector:'menu',
    templateUrl:'../templates/menu.html'
})
export class MenuComponent {
    title = "Casa Marizzoni"
    items = ITEMS;
}
