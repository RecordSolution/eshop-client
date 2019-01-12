import { observable, action, autorun, computed } from 'mobx';
import { Injectable } from "@angular/core";
// import { Birthday } from '../models/birthday';  
// import { UUID } from 'angular2-uuid';

@Injectable()
export class ProfileStore {
    @observable userData: any={};

    constructor() {
        autorun(() => {
            if (localStorage.userData) {
                this.userData = localStorage.userData;
                console.log(this.userData);
            }
            localStorage.userData = this.userData; 
        });
    }


    @action clear() {
        this.userData = {};
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
        localStorage.userData = JSON.stringify(this.userData);
        console.log(this.userData);
    }


}