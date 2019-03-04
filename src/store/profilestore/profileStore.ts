import { observable, autorun, action, computed } from 'mobx';
// import {  } from 'mobx';
import { Injectable } from "@angular/core";
// import { Birthday } from '../models/birthday';  
// import { UUID } from 'angular2-uuid';

@Injectable()
export class ProfileStore {
    @observable userData: any;
    
    constructor() {
        autorun(() => {
            if (JSON.parse(localStorage.getItem('userData')) && JSON.parse(localStorage.getItem('userData')) != {}) {
                let obj = JSON.parse(localStorage.getItem('userData'));;
                if (obj && obj.accountType) {
                    this.userData = obj;
                }
                console.log(this.userData);
            }
            else if (this.userData) {
                window.localStorage.setItem('userData', JSON.stringify(this.userData));
            }

        });
    }


    @action clear() {
        this.userData = null;
        localStorage.removeItem('userData');
    }

    @action setUserData(loginData) {
        this.userData = {
            userId: loginData.id,
            accessTokken: loginData.accessTokken,
            name: loginData.name,
            accountType: loginData.role,
            ProfileImage: (loginData.ProfileImage ? loginData.ProfileImage : 'assets/imgs/avatar.png'),
            contactNo: loginData.contactNo,
            address: loginData.address
        }
        window.localStorage.setItem('userData', JSON.stringify(this.userData));
        console.log(this.userData);
    }

    @computed get currentUserData() {
        return this.userData;
    }

}