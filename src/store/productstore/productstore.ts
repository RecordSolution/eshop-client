import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { observable, computed } from 'mobx-angular';

export class ProductStore{

    @observable  product :Array<any>=[] ;

    constructor(public http: HttpClient){



    }

    @computed get products() {

        return true;

    }

}