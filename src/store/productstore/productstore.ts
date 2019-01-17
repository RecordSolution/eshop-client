import { Injectable } from '@angular/core';

import { observable, computed } from 'mobx';
@Injectable()
export class ProductStore{

    @observable  product :Array<any>=[] ;


    @computed get products() {

        return true;

    }

}