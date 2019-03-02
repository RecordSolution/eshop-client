webpackJsonp([1],{

/***/ 502:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProductPageModule", function() { return AddProductPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_product__ = __webpack_require__(512);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddProductPageModule = /** @class */ (function () {
    function AddProductPageModule() {
    }
    AddProductPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__add_product__["a" /* AddProductPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_product__["a" /* AddProductPage */]),
            ],
        })
    ], AddProductPageModule);
    return AddProductPageModule;
}());

//# sourceMappingURL=add-product.module.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddProductPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AddProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddProductPage = /** @class */ (function () {
    function AddProductPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AddProductPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddProductPage');
    };
    AddProductPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-product',template:/*ion-inline-start:"E:\ionic\egarments\egarments-client\eshop-client\src\pages\admin\add-product\add-product.html"*/'<!--\n\n  Generated template for the AddProductPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>addProduct</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-label>Product name</ion-label>\n\n  <ion-input [(ngModel)]="name"></ion-input>\n\n  <ion-label>Product description</ion-label>\n\n  <ion-input></ion-input>\n\n  <ion-item>\n\n    <ion-label>Product Colors</ion-label>\n\n    <ion-select [(ngModel)]="colors">\n\n        <ion-option *ngFor="" [value]="count" (ionChange)=""></ion-option>\n\n      </ion-select>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label>Product Category</ion-label>\n\n    <ion-select [(ngModel)]="category">\n\n        <ion-option *ngFor="" [value]="count" (ionChange)=""></ion-option>\n\n      </ion-select>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label>Product Gender</ion-label>\n\n    <ion-select [(ngModel)]="gender">\n\n        <ion-option *ngFor="" [value]="" (ionChange)=""></ion-option>\n\n      </ion-select>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label>Product Sizes</ion-label>\n\n    <ion-select [(ngModel)]="sizes">\n\n        <ion-option *ngFor="" [value]="" (ionChange)=""></ion-option>\n\n      </ion-select>\n\n  </ion-item>\n\n\n\n  <ion-label>Upload picture</ion-label>\n\n  \n\n\n\n</ion-content>\n\n'/*ion-inline-end:"E:\ionic\egarments\egarments-client\eshop-client\src\pages\admin\add-product\add-product.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], AddProductPage);
    return AddProductPage;
}());

//# sourceMappingURL=add-product.js.map

/***/ })

});
//# sourceMappingURL=1.js.map