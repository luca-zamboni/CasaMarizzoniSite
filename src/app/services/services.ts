import { Component, Input, Injectable, OnInit } from '@angular/core';
import { BigData, ItemHeader,Apartments } from '../model/models'
import {HttpClient} from '@angular/common/http';

@Injectable()
export class DataService {

    constructor(private http: HttpClient) {}
    data:BigData;
    loaded=false;

    getAllData() {
        if(this.loaded) {
            var promiseLocal = new Promise((resolve, reject) => {
                resolve(this.data);
            });
            return promiseLocal;
        }
        var promiseHttp = new Promise((resolve, reject) => {
            this.http.get('/data.json').subscribe(data => {
                resolve((data) as BigData );
                this.loaded = true;
                this.data = <BigData>data;
            });
        });
        return promiseHttp;
    }
}
