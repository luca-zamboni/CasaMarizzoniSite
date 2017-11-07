import { Component, Input, Injectable, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';



@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Testo';

    isAdmin() {
        var href = location.href;
        var last = href.substr(href.lastIndexOf('/') + 1)
        return last == "admin";
    }

}
