webpackJsonp([0],{

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmindashboardPageModule", function() { return AdmindashboardPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__admindashboard__ = __webpack_require__(292);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AdmindashboardPageModule = /** @class */ (function () {
    function AdmindashboardPageModule() {
    }
    AdmindashboardPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__admindashboard__["a" /* AdmindashboardPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__admindashboard__["a" /* AdmindashboardPage */]),
            ],
        })
    ], AdmindashboardPageModule);
    return AdmindashboardPageModule;
}());

//# sourceMappingURL=admindashboard.module.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdmindashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_orders_orders__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store_orders_orderstore__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import {} from '../../../store/orders/orderstore'; 
/**
 * Generated class for the AdmindashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AdmindashboardPage = /** @class */ (function () {
    function AdmindashboardPage(navCtrl, navParams, orderService, ordersStore) {
        // this.productService.getVehicles().subscribe(res => {
        //   this.products = res
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.orderService = orderService;
        this.ordersStore = ordersStore;
    }
    AdmindashboardPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        if (this.ordersStore.myOrders.length == 0) {
            this.orderService.getorders().subscribe(function (res) {
                // this.orders=res;
                console.log(_this.orders);
            });
        }
    };
    AdmindashboardPage.prototype.filterOrders = function (status) {
        this.ordersStore.filterOrders(status);
    };
    AdmindashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-admindashboard',template:/*ion-inline-start:"E:\Programmingwork\ionicongoing\e-shopping\eshop-client\src\pages\admin\admindashboard\admindashboard.html"*/'<!--\n  Generated template for the AdmindashboardPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n   \n    <ion-title>admindashboard</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<!-- {{ordersStore.getOrders | json}} -->\n    <button (click)="filterOrders(\'pending\')"></button>\n  <ion-card *ngFor="let order of ordersStore.getOrders">\n          \n    <ion-item>\n      <ion-avatar item-start>\n        <img src="assets/imgs/logo.png">\n      </ion-avatar>\n      <h2>{{order.buyer.name}}</h2>\n      <p>{{order.orderDate}}</p>\n    </ion-item>\n  \n    <!-- <img src="img/advance-card-bttf.png"> -->\n  \n    <ion-card-content>\n     <p>{{order.status}}</p>\n     <h6>{{order.buyer.contactNo}}</h6>\n    </ion-card-content>\n\n    <ion-item>\n      <!-- <ion-icon name="cash" item-start></ion-icon> -->\n     Total Price\n      <ion-badge item-end>{{order.totalPrice}}</ion-badge>\n    </ion-item>\n\n \n<!--   \n    <ion-row>\n      <ion-col>\n        <button ion-button icon-start clear small>\n          <ion-icon name="thumbs-up"></ion-icon>\n          <div>12 Likes</div>\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button icon-start clear small>\n          <ion-icon name="text"></ion-icon>\n          <div>4 Comments</div>\n        </button>\n      </ion-col>\n      <ion-col center text-center>\n        <ion-note>\n          11h ago\n        </ion-note>\n      </ion-col>\n    </ion-row> -->\n  \n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"E:\Programmingwork\ionicongoing\e-shopping\eshop-client\src\pages\admin\admindashboard\admindashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_orders_orders__["a" /* OrdersProvider */], __WEBPACK_IMPORTED_MODULE_3__store_orders_orderstore__["a" /* OrderStore */]])
    ], AdmindashboardPage);
    return AdmindashboardPage;
}());

//# sourceMappingURL=admindashboard.js.map

/***/ })

});
//# sourceMappingURL=0.js.map