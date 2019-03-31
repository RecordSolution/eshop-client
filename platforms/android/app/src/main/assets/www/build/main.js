webpackJsonp([12],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdmindashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_orders_orders__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store_orders_orderstore__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__order_details_order_details__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_popover_popover__ = __webpack_require__(254);
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
    function AdmindashboardPage(navCtrl, navParams, orderService, ordersStore, popoverCtrl) {
        // this.productService.getVehicles().subscribe(res => {
        //   this.products = res
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.orderService = orderService;
        this.ordersStore = ordersStore;
        this.popoverCtrl = popoverCtrl;
    }
    AdmindashboardPage.prototype.ionViewDidLoad = function () {
        //  if(this.ordersStore.myOrders.length==0){
        var _this = this;
        this.orderService.getorders().subscribe(function (res) {
            _this.orders = res;
            console.log(_this.orders);
        });
        // }
    };
    AdmindashboardPage.prototype.filterOrders = function (status) {
        // this.ordersStore.filterOrders(status);
    };
    AdmindashboardPage.prototype.productDetails = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__order_details_order_details__["a" /* OrderDetailsPage */]);
    };
    AdmindashboardPage.prototype.action1 = function () {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_5__components_popover_popover__["a" /* PopoverComponent */]);
        popover.present();
    };
    AdmindashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-admindashboard',template:/*ion-inline-start:"E:\ionic\egarments\egarments-client\eshop-client\src\pages\admin\admindashboard\admindashboard.html"*/'<!--\n\n  Generated template for the AdmindashboardPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar style="position:absolute">\n\n    <button ion-button menuToggle start>\n\n      <ion-icon name="menu"></ion-icon>\n\n  </button>\n\n \n\n    <ion-title>admindashboard</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="action1()">\n\n        <ion-icon name="more"></ion-icon>\n\n    </button>\n\n  </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n<!-- {{ordersStore.getOrders | json}} -->\n\n    <!-- <button (click)="filterOrders(\'pending\')"></button> -->\n\n  <ion-card (click)="productDetails()" *ngFor="let order of ordersStore.getOrders">\n\n          \n\n    <ion-item>\n\n      <ion-avatar item-start>\n\n        <img src="assets/imgs/logo.png">\n\n      </ion-avatar>\n\n      <h2>{{order.buyer.name}}</h2>\n\n      <p>{{order.orderDate}}</p>\n\n    </ion-item>\n\n  \n\n    <!-- <img src="img/advance-card-bttf.png"> -->\n\n  \n\n    <ion-card-content>\n\n     <p>{{order.status}}</p>\n\n     <h6>{{order.buyer.contactNo}}</h6>\n\n    </ion-card-content>\n\n\n\n    <ion-item>\n\n     \n\n     Total Price\n\n      <ion-badge item-end>{{order.totalPrice}}</ion-badge>\n\n    </ion-item>\n\n\n\n \n\n  \n\n    <ion-row>\n\n      <ion-col>\n\n        <button ion-button icon-start clear small>\n\n          <!-- <ion-icon name="thumbs-up"></ion-icon> -->\n\n          <div (click)="productDetails()" >Show Details</div>\n\n        </button>\n\n      </ion-col>\n\n     \n\n    </ion-row>\n\n  \n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\ionic\egarments\egarments-client\eshop-client\src\pages\admin\admindashboard\admindashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_orders_orders__["a" /* OrdersProvider */],
            __WEBPACK_IMPORTED_MODULE_3__store_orders_orderstore__["a" /* OrderStore */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */]])
    ], AdmindashboardPage);
    return AdmindashboardPage;
}());

//# sourceMappingURL=admindashboard.js.map

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store_orders_orderstore__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OrdersProvider = /** @class */ (function () {
    function OrdersProvider(http, ordersStore) {
        this.http = http;
        this.ordersStore = ordersStore;
        console.log('Hello OrdesProvider Provider');
        this.getorders();
    }
    OrdersProvider.prototype.getorders = function (value) {
        var _this = this;
        return this.http.get('./../assets/orders.json').pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (data) {
            console.log('Orders', data.orders);
            _this.ordersStore.setOrders(data.orders);
            return data.orders;
        }));
    };
    OrdersProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__store_orders_orderstore__["a" /* OrderStore */]])
    ], OrdersProvider);
    return OrdersProvider;
}());

//# sourceMappingURL=orders.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddProductPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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
    AddProductPage.prototype.filepicker = function (event) {
        console.log(event);
    };
    AddProductPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-product',template:/*ion-inline-start:"E:\ionic\egarments\egarments-client\eshop-client\src\pages\admin\add-product\add-product.html"*/'<!--\n\n  Generated template for the AddProductPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>addProduct</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-item>\n\n    <ion-label>Product name</ion-label>\n\n    <!-- <ion-list> -->\n\n    <ion-input type="text" [(ngModel)]="name"></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label>Short Description</ion-label>\n\n    <!-- <ion-list> -->\n\n    <ion-input type="text" [(ngModel)]="name"></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label>Detail Description</ion-label>\n\n    <!-- <ion-list> -->\n\n    <textarea type="text" [(ngModel)]="name"></textarea>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label>Price</ion-label>\n\n    <!-- <ion-list> -->\n\n    <ion-input type="text" [(ngModel)]="name"></ion-input>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label>Product Colors</ion-label>\n\n    <ion-select>\n\n      <ion-option>SM</ion-option>\n\n      <ion-option>MD</ion-option>\n\n      <ion-option>LG</ion-option>\n\n      <ion-option>XL</ion-option>\n\n    </ion-select>\n\n  </ion-item>\n\n  <!-- <ion-item> <input class="input" [value]="color" [style.background]="color" [cpPosition]="\'bottom\'"\n\n      [(colorPicker)]="color" />\n\n    <button ion-button>\n\n      Add\n\n    </button>\n\n  </ion-item> -->\n\n  <ion-item>\n\n    <input type="file" (change)="filepicker($event)">\n\n  </ion-item>\n\n\n\n  <!-- </ion-list> -->\n\n  <!-- <ion-label>Product description</ion-label>\n\n  <ion-input></ion-input>\n\n  <ion-item>\n\n    <ion-label>Product Colors</ion-label>\n\n    <ion-select>\n\n        <ion-option *ngFor="" [value]="count" (ionChange)=""></ion-option>\n\n      </ion-select>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label>Product Category</ion-label>\n\n    <ion-select >\n\n        <ion-option *ngFor="" [value]="count" (ionChange)=""></ion-option>\n\n      </ion-select>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label>Product Gender</ion-label>\n\n    <ion-select >\n\n        <ion-option *ngFor="" [value]="" (ionChange)=""></ion-option>\n\n      </ion-select>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label>Product Sizes</ion-label>\n\n    <ion-select >\n\n        <ion-option *ngFor="" [value]="" (ionChange)=""></ion-option>\n\n      </ion-select>\n\n  </ion-item>\n\n\n\n  <ion-label>Upload picture</ion-label>\n\n  <ion-input type="file"></ion-input> -->\n\n\n\n</ion-content>'/*ion-inline-end:"E:\ionic\egarments\egarments-client\eshop-client\src\pages\admin\add-product\add-product.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], AddProductPage);
    return AddProductPage;
}());

//# sourceMappingURL=add-product.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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
 * Generated class for the OrderDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OrderDetailsPage = /** @class */ (function () {
    function OrderDetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    OrderDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OrderDetailsPage');
    };
    OrderDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-order-details',template:/*ion-inline-start:"E:\ionic\egarments\egarments-client\eshop-client\src\pages\admin\order-details\order-details.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Order Detail\n\n    </ion-title>\n\n   \n\n\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-card>\n\n      <!-- <ion-card-header >\n\n          Header\n\n        </ion-card-header> -->\n\n      <img src="../../assets/imgs/logo.png" >\n\n\n\n      <ion-item>\n\n          Product Name\n\n          <ion-badge item-end color="secondary">260k</ion-badge>\n\n        </ion-item>\n\n         <ion-item>\n\n             Price\n\n            <ion-badge item-end color="secondary">260k</ion-badge>\n\n          </ion-item>\n\n\n\n          <ion-item>\n\n             Selected Size\n\n             <ion-badge item-end color="secondary">260k</ion-badge>\n\n           </ion-item>\n\n           <ion-item>\n\n              Selected Color\n\n                  <ion-badge item-end color="secondary">260k</ion-badge>\n\n                </ion-item>\n\n  \n\n  </ion-card>\n\n\n\n\n\n  <ion-card>\n\n      <!-- <ion-card-header >\n\n          Header\n\n        </ion-card-header> -->\n\n      <img src="../../assets/imgs/logo.png" >\n\n\n\n      <ion-item>\n\n          Product Name\n\n          <ion-badge item-end color="secondary">260k</ion-badge>\n\n        </ion-item>\n\n         <ion-item>\n\n            Price\n\n            <ion-badge item-end color="secondary">260k</ion-badge>\n\n          </ion-item>\n\n\n\n          <ion-item>\n\n         Selected Size\n\n             <ion-badge item-end color="secondary">260k</ion-badge>\n\n           </ion-item>\n\n           <ion-item>\n\n              Selected Color\n\n                  <ion-badge item-end color="secondary">260k</ion-badge>\n\n                </ion-item>\n\n     \n\n  </ion-card>\n\n\n\n  <ion-card>\n\n    \n\n      <ion-item>\n\n      \n\n          Order ID\n\n          <ion-badge item-end color="secondary">260k</ion-badge>\n\n        </ion-item>\n\n        <ion-item>\n\n         \n\n            Staus\n\n            <ion-badge item-end color="secondary">260k</ion-badge>\n\n          </ion-item>\n\n    \n\n          <ion-item>\n\n            \n\n              Order Date\n\n              <ion-badge item-end color="secondary">260k</ion-badge>\n\n            </ion-item>\n\n            <ion-item>\n\n             \n\n                Buyer Name\n\n                <ion-badge item-end color="secondary">260k</ion-badge>\n\n              </ion-item>\n\n              <ion-item>\n\n               \n\n                  Email\n\n                  <ion-badge item-end color="secondary">260k</ion-badge>\n\n                </ion-item>\n\n                <ion-item>\n\n                \n\n                    Contact No\n\n                    <ion-badge item-end color="secondary">260k</ion-badge>\n\n                  </ion-item>\n\n                  <ion-item>\n\n                    Address\n\n                      <ion-badge item-end color="secondary">260k</ion-badge>\n\n                    </ion-item>\n\n\n\n                    <ion-item>\n\n                        Total Price\n\n                          <ion-badge item-end >260k</ion-badge>\n\n                        </ion-item>\n\n    \n\n                  \n\n    \n\n                        <button ion-button full color="secondary">Approve</button>\n\n                        <button ion-button full color="danger">Cancel</button>\n\n  \n\n  </ion-card>\n\n \n\n                \n\n</ion-content>\n\n'/*ion-inline-end:"E:\ionic\egarments\egarments-client\eshop-client\src\pages\admin\order-details\order-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], OrderDetailsPage);
    return OrderDetailsPage;
}());

//# sourceMappingURL=order-details.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_products_products__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__product_details_product_details__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store_productstore_productstore__ = __webpack_require__(49);
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
 * Generated class for the MenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MenPage = /** @class */ (function () {
    function MenPage(navCtrl, navParams, productStore, productService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.productStore = productStore;
        this.productService = productService;
        this.products = [];
        this.category = '';
        this.productService.getProducts().subscribe(function (res) {
            // this.products = res;
        });
    }
    MenPage.prototype.ionViewDidLoad = function () {
        this.category = this.navParams.get('category');
        console.log('ionViewDidLoad MenPage');
    };
    MenPage.prototype.showDetails = function (product) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__product_details_product_details__["a" /* ProductDetailsPage */], { 'data': product });
    };
    MenPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-men',template:/*ion-inline-start:"E:\ionic\egarments\egarments-client\eshop-client\src\pages\buyer\men\men.html"*/'<!--\n\n  Generated template for the MenPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>men</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content>\n\n<ion-card class="card" *ngFor="let product of productStore.products">\n\n\n\n  <ion-item>\n\n    <!-- <ion-avatar item-start>\n\n      <img src="assets/imgs/firstCategory.png">\n\n    </ion-avatar> -->\n\n    <h2>{{product.name}}</h2>\n\n    <p>{{product.description}}</p>\n\n  </ion-item>\n\n\n\n  <img src="{{product.images[0].url}}">\n\n\n\n  <ion-card-content>\n\n    <p>Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.</p>\n\n  </ion-card-content>\n\n\n\n  <ion-row>\n\n    <ion-col>\n\n      <button ion-button icon-start clear small>\n\n        <ion-icon class="ap-colorr" name="cash"></ion-icon>\n\n        <div>Price </div><span>{{product.price}}</span>\n\n      </button>\n\n    </ion-col>\n\n    <ion-col>\n\n      <button class="buy-button" ion-button icon-start (click)="showDetails(product)">\n\n        BUY\n\n        <!-- <ion-icon name="text"></ion-icon>\n\n        <div>4 Comments</div> -->\n\n      </button>\n\n    </ion-col>\n\n    <!-- <ion-col center text-center>\n\n      <ion-note>\n\n        11h ago\n\n      </ion-note>\n\n    </ion-col> -->\n\n  </ion-row>\n\n\n\n</ion-card>\n\n</ion-content>'/*ion-inline-end:"E:\ionic\egarments\egarments-client\eshop-client\src\pages\buyer\men\men.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__store_productstore_productstore__["a" /* ProductStore */],
            __WEBPACK_IMPORTED_MODULE_2__providers_products_products__["a" /* ProductsProvider */]])
    ], MenPage);
    return MenPage;
}());

//# sourceMappingURL=men.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_models_ordered__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store_orders_orderstore__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store_productstore_productstore__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__store_profilestore_profileStore__ = __webpack_require__(76);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProductDetailsPage = /** @class */ (function () {
    function ProductDetailsPage(navCtrl, orderStore, navParams, productStore, profileStore) {
        this.navCtrl = navCtrl;
        this.orderStore = orderStore;
        this.navParams = navParams;
        this.productStore = productStore;
        this.profileStore = profileStore;
        this.order = new __WEBPACK_IMPORTED_MODULE_2__shared_models_ordered__["a" /* OrderModel */]();
        // this.details = this.navParams.get('data');
    }
    ProductDetailsPage.prototype.ionViewDidLoad = function () {
        this.details = this.navParams.get('data');
        console.log('ionViewDidLoad ProductDetailsPage', this.details);
    };
    ProductDetailsPage.prototype.getQuantity = function (count) {
    };
    ProductDetailsPage.prototype.onChange = function () {
    };
    ProductDetailsPage.prototype.onBuy = function () {
        console.log("order her ===>", JSON.stringify(this.order));
        console.log("product her ===>", this.details);
        console.log("Profile", JSON.stringify(this.profile));
        var order = {
            addressToDeliver: this.profileStore.userData.address,
            buyer: this.profile,
            color: this.order.color,
            cutomerContact: this.profile.contactNo.toString(),
            orderDate: new Date(),
            size: this.order.size,
            quantity: this.order.quantity,
            orderType: 'general',
            status: 'pending',
            totalPrice: this.details.price,
            selectedproducts: this.details
        };
        this.orderStore.addNewOrder(order);
    };
    ProductDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-product-details',template:/*ion-inline-start:"E:\ionic\egarments\egarments-client\eshop-client\src\pages\buyer\product-details\product-details.html"*/'<!--\n\n  Generated template for the ProductDetailsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>product-details</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n    <ion-card *ngIf="details">\n\n\n\n        <ion-item>\n\n          <!-- <ion-avatar item-start>\n\n            <img src="assets/imgs/firstCategory.png">\n\n          </ion-avatar> -->\n\n          <h2>{{details.name}}</h2>\n\n          <p>{{details.shortDescription}}</p>\n\n        </ion-item>\n\n      \n\n        \n\n        <div>\n\n            <ion-slides>\n\n                <ion-slide *ngFor="let image of details.images">\n\n                    <img src="{{image.url}}">\n\n                </ion-slide>\n\n              </ion-slides>\n\n      </div>\n\n        <ion-card-content>\n\n          <p>{{details.description}}</p>\n\n        </ion-card-content>\n\n      \n\n        <ion-row>\n\n          <!-- <ion-col>\n\n            <button ion-button icon-start clear small>\n\n              <ion-icon name="thumbs-up"></ion-icon>\n\n              <p>Select Quantity</p>\n\n            </button>\n\n          </ion-col> -->\n\n          <ion-col>\n\n              <ion-item>\n\n                  <ion-label>Quantity</ion-label>\n\n                  <ion-input type="number" [(ngModel)]="order.quantity"></ion-input>\n\n                  <!-- <ion-select [(ngModel)]="order.quantity">\n\n                      <ion-option *ngFor="let count of details.availableQuantity" [value]="count" (ionChange)="getQuantity(count)">{{count}}</ion-option>\n\n                    </ion-select> -->\n\n                </ion-item>\n\n                <ion-item>\n\n                <ion-label>Color</ion-label>\n\n                <ion-select [(ngModel)]="order.color">\n\n                    <ion-option *ngFor="let color of details.colors" [value]="color">{{color}} <div style=" width: 10px; height:10px" [ngStyle]="{background:\'color\'}"></div></ion-option>\n\n                  </ion-select>\n\n                <!-- <ion-select [(ngModel)]="number">\n\n                  <ion-option *ngFor="let count of quantity" value="count"></ion-option>\n\n                </ion-select> -->\n\n              </ion-item>\n\n\n\n              <ion-item>\n\n                  <ion-label>Avaliable Sizes</ion-label>\n\n                  <ion-select [(ngModel)]="order.size">\n\n                      <ion-option *ngFor="let size of details.sizes" [value]="size">{{size}} <div style=" width: 10px; height:10px" [ngStyle]="{background:\'color\'}"></div></ion-option>\n\n                    </ion-select>\n\n                  <!-- <ion-select [(ngModel)]="number">\n\n                    <ion-option *ngFor="let count of quantity" value="count"></ion-option>\n\n                  </ion-select> -->\n\n                </ion-item>\n\n\n\n                <ion-item>\n\n                    <ion-label>Address</ion-label>\n\n                    <ion-toggle [(ngModel)]="order.addressToDeliver" checked="true"></ion-toggle>\n\n                  </ion-item>\n\n\n\n                  <ion-item>\n\n                      <ion-label>Different Address</ion-label>\n\n                      <ion-toggle [(ngModel)]="order.addressToDeliver"></ion-toggle>\n\n                    </ion-item>\n\n                \n\n                    <textarea *ngIf="changeAddress"  placeholder="Enter Change Address Here"class="addressArea"name="different-address" ></textarea>\n\n      \n\n                    \n\n\n\n                    <ion-label>Price  <span float-right>{{details.price}}</span></ion-label>\n\n\n\n                    <button ion-button block color="secondary" (click)="onBuy()">Buy</button>\n\n                  \n\n                  </ion-col>\n\n\n\n                \n\n        </ion-row>\n\n                  \n\n           \n\n      </ion-card>\n\n\n\n    \n\n\n\n \n\n</ion-content>\n\n'/*ion-inline-end:"E:\ionic\egarments\egarments-client\eshop-client\src\pages\buyer\product-details\product-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__store_orders_orderstore__["a" /* OrderStore */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__store_productstore_productstore__["a" /* ProductStore */],
            __WEBPACK_IMPORTED_MODULE_5__store_profilestore_profileStore__["a" /* ProfileStore */]])
    ], ProductDetailsPage);
    return ProductDetailsPage;
}());

//# sourceMappingURL=product-details.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserOrdersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_orders_orders__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store_orders_orderstore__ = __webpack_require__(34);
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
 * Generated class for the UserOrdersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UserOrdersPage = /** @class */ (function () {
    function UserOrdersPage(navCtrl, orderService, ordersStore, navParams) {
        this.navCtrl = navCtrl;
        this.orderService = orderService;
        this.ordersStore = ordersStore;
        this.navParams = navParams;
        this.orders = [];
    }
    UserOrdersPage.prototype.ionViewDidLoad = function () {
        //  if(this.ordersStore.myOrders.length==0){
        var _this = this;
        this.orderService.getorders().subscribe(function (res) {
            _this.orders = res;
            console.log(_this.orders);
        });
        // }
    };
    UserOrdersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-user-orders',template:/*ion-inline-start:"E:\ionic\egarments\egarments-client\eshop-client\src\pages\buyer\user-orders\user-orders.html"*/'<!--\n\n  Generated template for the UserOrdersPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>user-orders</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-card (click)="productDetails()" *ngFor="let order of ordersStore.getOrders">\n\n          \n\n        <ion-item>\n\n          <ion-avatar item-start>\n\n            <img src="assets/imgs/logo.png">\n\n          </ion-avatar>\n\n          <h2>{{order.buyer.name}}</h2>\n\n          <p>{{order.orderDate}}</p>\n\n        </ion-item>\n\n      \n\n        <!-- <img src="img/advance-card-bttf.png"> -->\n\n      \n\n        <ion-card-content>\n\n         <p>{{order.status}}</p>\n\n         <h6>{{order.buyer.contactNo}}</h6>\n\n        </ion-card-content>\n\n    \n\n        <ion-item>\n\n         \n\n         Total Price\n\n          <ion-badge item-end>{{order.totalPrice}}</ion-badge>\n\n        </ion-item>\n\n    \n\n     \n\n      \n\n        <ion-row>\n\n          <ion-col>\n\n            <button ion-button icon-start clear small>\n\n              \n\n              <div (click)="productDetails()" >Show Details</div>\n\n            </button>\n\n          </ion-col>\n\n         \n\n        </ion-row>\n\n      \n\n      </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\ionic\egarments\egarments-client\eshop-client\src\pages\buyer\user-orders\user-orders.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_orders_orders__["a" /* OrdersProvider */],
            __WEBPACK_IMPORTED_MODULE_3__store_orders_orderstore__["a" /* OrderStore */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], UserOrdersPage);
    return UserOrdersPage;
}());

//# sourceMappingURL=user-orders.js.map

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__buyer_categories_categories__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__buyer_customDesign_custom_design_custom_design_home__ = __webpack_require__(80);
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
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    SignupPage.prototype.goBuyerHomePage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__buyer_customDesign_custom_design_custom_design_home__["a" /* CustomDesignHomePage */]);
    };
    SignupPage.prototype.Signup = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__buyer_categories_categories__["a" /* CategoriesPage */]);
    };
    SignupPage.prototype.login = function () {
        this.navCtrl.setRoot('LoginPage');
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"E:\ionic\egarments\egarments-client\eshop-client\src\pages\membership\signup\signup.html"*/'<!--\n\n  Generated template for the SignupPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar align-title="center">\n\n    <ion-title >Sign Up</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="register">\n\n\n\n  \n\n    <div class="card" style="height : 60%;">\n\n\n\n        <img src="../../../assets/imgs/logo.png" alt="Avatar" >\n\n        <div class="container">\n\n            <input class="inputfields"  type="text" placeholder="Enter Name here">\n\n          <input class="inputfields" type="text" placeholder="Enter Email here">\n\n          <input class="inputfields" type="password" placeholder="Enter password here"> \n\n        </div>\n\n        <button ion-button class="loginbtn"color="medium" (click)="logIn()" block>Signup</button>\n\n      </div>\n\n     <ion-label class="signuplbl"> <a (click)="login()">Member?Login Here</a></ion-label>\n\n\n\n<!-- \n\n  <div class="logo">\n\n    <img class="logo-img" src="assets/imgs/logo.png">\n\n  </div>\n\n  \n\n  <ion-card class="card">\n\n  \n\n    <ion-card-content>\n\n    <ion-list>\n\n  \n\n      <ion-input  class="loginfields" placeholder=" User Name "  type="text" value=""></ion-input>\n\n      \n\n        <ion-input  class="loginfields" placeholder=" Email "  type="text" value=""></ion-input>\n\n      \n\n        <ion-input class="loginfields" placeholder=" Password "  type="text" value=""></ion-input>\n\n      \n\n        <ion-input  class="loginfields" placeholder="Re-type Password " type="password" value=""></ion-input>\n\n   \n\n        <ion-input  class="loginfields" placeholder="Contact info " type="password" value=""></ion-input>\n\n   \n\n        <ion-input  class="loginfields" placeholder=" Address" type="password" value=""></ion-input>\n\n   \n\n    <div class="login" >\n\n      <button ion-button color="primary" (click)="Signup()" block>Signup</button>\n\n    </div>\n\n    </ion-list>\n\n    </ion-card-content>\n\n  \n\n  </ion-card>\n\n  \n\n  <div class="signin">\n\n  \n\n    <a (click)="signup()">Alrady a Member?</a>\n\n  </div> -->\n\n\n\n  <!-- <ion-list>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Username</ion-label>\n\n      <ion-input type="text" value=""></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Email</ion-label>\n\n      <ion-input type="Email" value=""></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label floating>Password</ion-label>\n\n      <ion-input type="password" value=""></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label floating>Re-type Password</ion-label>\n\n      <ion-input type="password" value=""></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label floating>Contact Info</ion-label>\n\n      <ion-input type="number" value=""></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label floating>Address</ion-label>\n\n      <ion-textarea type="text" value=""></ion-textarea>\n\n    </ion-item>\n\n\n\n  </ion-list>\n\n\n\n  <div padding>\n\n    <button ion-button color="primary" (click)="goBuyerHomePage()" block>Sign Up</button>\n\n  </div> -->\n\n\n\n</ion-content>\n\n<!-- <ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>signup</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="main">\n\n\n\n    <ion-input class="input" type="text" placeholder="Username"> </ion-input>\n\n    <ion-input class="input" type="text" placeholder="Email"> </ion-input>\n\n    <ion-input class="input" type="text" placeholder="Password"></ion-input> \n\n    <ion-input class="input" type="text" placeholder="Re-type-Password"></ion-input>\n\n    <ion-input class="input" type="text" placeholder="Contact"></ion-input>\n\n    <ion-input class="inputaddress"  id="address"type="text" placeholder="Address"> </ion-input>\n\n   <button>Sign Up</button>\n\n   <ion-label>Already Registered?</ion-label>\n\n\n\n</ion-content> -->\n\n'/*ion-inline-end:"E:\ionic\egarments\egarments-client\eshop-client\src\pages\membership\signup\signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CutomDesignCategorySelectorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store_productstore_productstore__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_products_products__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__customDesign_custom_design_custom_design_home__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_shared_shared__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_custom_design_custom_product_selection_custom_product_selection__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__store_orders_orderstore__ = __webpack_require__(34);
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
 * Generated class for the CutomDesignCategorySelectorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CutomDesignCategorySelectorPage = /** @class */ (function () {
    //   validation_messages = {
    //       'name': [
    //       { type: 'text', message: 'Please enter your name.' }
    //     ],
    //     'email': [
    //       { type: 'text', message: 'Please enter your email.' }
    //     ],
    //     'ph': [
    //       { type: 'text', message: 'Please enter your Mobile #.' }
    //     ],
    //     'cat': [
    //       { type: 'text', message: 'Please select  Category.' }
    //     ],
    //     'dressCat': [
    //       { type: 'text', message: 'Please select dress Category.' }
    //     ]
    // }
    function CutomDesignCategorySelectorPage(navCtrl, alertCtrl, productStore, navParams, productsProvider, formBuilder, sharedService, orderStore) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.productStore = productStore;
        this.navParams = navParams;
        this.productsProvider = productsProvider;
        this.formBuilder = formBuilder;
        this.sharedService = sharedService;
        this.orderStore = orderStore;
        this.fashionCategory = '';
        this.dressCategory = '';
        this.dressDesignes = [];
        this.fasionDesignes = [];
        this.submitted = false;
        this.designForm = this.formBuilder.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required],
            email: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required],
            ph: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required],
            cat: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required],
            dressCat: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required],
            gender: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required]
        });
        // Initial value for the field.
        // this.form.get('myField').setValue('11223344/55');
    }
    CutomDesignCategorySelectorPage.prototype.ngOnInit = function () {
        var _this = this;
        this.sharedService.getdressCategories().subscribe(function (res) {
            console.log(res);
            _this.dressDesignes = res;
        });
        this.sharedService.getFashionCategories().subscribe(function (res) {
            console.log(res);
            _this.fasionDesignes = res;
        });
    };
    CutomDesignCategorySelectorPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad CutomDesignCategorySelectorPage');
        this.productsProvider.getSvgs().subscribe(function (res) {
            _this.svgs = res;
            console.log(res);
        });
        screen.orientation.lock('landscape');
    };
    CutomDesignCategorySelectorPage.prototype.onDressCategorySelection = function (cat) {
        this.dressCategory = cat;
        this.getSelectedDress();
        debugger;
    };
    CutomDesignCategorySelectorPage.prototype.onFashionCategorySelection = function (cat) {
        this.fashionCategory = cat;
        this.getSelectedDress();
        debugger;
    };
    CutomDesignCategorySelectorPage.prototype.getSelectedDress = function () {
        this.selectedProduct = this.productStore.getproductForCustomDesign(this.dressCategory, this.fashionCategory);
        console.log(this.selectedProduct);
        if (this.selectedProduct) {
            this.showDetails();
        }
    };
    CutomDesignCategorySelectorPage.prototype.showDetails = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__customDesign_custom_design_custom_design_home__["a" /* CustomDesignHomePage */], { 'data': this.selectedProduct });
    };
    CutomDesignCategorySelectorPage.prototype.forgotpassword = function () {
        var alert = this.alertCtrl.create({
            title: 'Forgot Password',
            inputs: [
                {
                    name: 'email',
                    placeholder: 'Enter Email Address',
                    type: 'text'
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'Cancel',
                    handler: function (data) {
                    }
                },
                {
                    cssClass: 'ok',
                    text: 'ok',
                    handler: function (data) {
                    }
                }
            ]
        });
        alert.present();
    };
    CutomDesignCategorySelectorPage.prototype.onSubmit = function () {
        debugger;
        this.submitted = true;
        // stop here if form is invalid
        if (this.designForm.invalid) {
            this.orderStore.customDesignOrder.name = this.designForm.controls.name.value;
            this.orderStore.customDesignOrder.email = this.designForm.controls.email.value;
            this.orderStore.customDesignOrder.ph = this.designForm.controls.ph.value;
            this.orderStore.customDesignOrder.gender = this.designForm.controls.gender.value;
            this.orderStore.customDesignOrder.dressCategory = this.designForm.controls.dressCat.value;
            this.orderStore.customDesignOrder.fashionCategory = this.designForm.controls.cat.value;
            // return;
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__components_custom_design_custom_product_selection_custom_product_selection__["a" /* CustomProductSelectionComponent */]);
        }
        else {
            this.orderStore.customDesignOrder.name = this.designForm.controls.name.value;
            this.orderStore.customDesignOrder.email = this.designForm.controls.email.value;
            this.orderStore.customDesignOrder.ph = this.designForm.controls.ph.value;
            this.orderStore.customDesignOrder.gender = this.designForm.controls.gender.value;
            this.orderStore.customDesignOrder.dressCategory = this.designForm.controls.dressCat.value;
            this.orderStore.customDesignOrder.fashionCategory = this.designForm.controls.cat.value;
        }
        // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.designForm.value))
    };
    CutomDesignCategorySelectorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cutom-design-category-selector',template:/*ion-inline-start:"E:\ionic\egarments\egarments-client\eshop-client\src\pages\buyer\cutom-design-category-selector\cutom-design-category-selector.html"*/'<!--\n\n  Generated template for the CutomDesignCategorySelectorPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Cutom Design</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="modal-content">\n\n\n\n            <!-- <input ion-input class="inputfields"  type="text" placeholder="Enter Name">\n\n            <input ion-input class="inputfields" type="email" placeholder="Enter Email">\n\n            <input ion-input class="inputfields" type="text" placeholder="Enter Mobile #">\n\n            <select ion-select value="brown" okText="Okay" cancelText="Dismiss">\n\n                <option ion-select-option value="brown">Brown</option>\n\n              </select>\n\n              <select value="brown" okText="Okay" cancelText="Dismiss">\n\n                  <option value="brown">Brown</option>\n\n                \n\n                </select> -->\n\n                <form novalidate [formGroup]="designForm" (ngSubmit)="onSubmit()">\n\n                  <input class="inputfields" type="test" placeholder="enter your naem">\n\n                          <ion-item class="form-group">\n\n                              <ion-label floating>\n\n                                \n\n                                Fashion Category\n\n                              </ion-label>\n\n                              <ion-select class="form-control" formControlName="cat" [class.error]="!designForm.controls.cat.valid && designForm.controls.cat.dirty">\n\n                                  \n\n                                  <ion-option *ngFor="let fcat of fasionDesignes" value="{{fcat.key}}">{{fcat.key }}</ion-option>\n\n                                </ion-select>\n\n                              <!-- <ion-input type="text" value="" formControlName ="cat" ></ion-input> -->\n\n                            </ion-item>\n\n                            <ion-item  *ngIf="!designForm.controls.cat.valid &&\n\n                      designForm.controls.cat.dirty"\n\n                      class="validator-error">\n\n                          <!-- <div class="error" *ngIf="form.get(\'name\').hasError(\'required\') && form.get(\'name\').touched"> -->\n\n                            Please select atleast one Category\n\n                          <!-- </div> -->\n\n                      </ion-item>\n\n                            <ion-item class="form-group">\n\n                                <ion-label floating>\n\n                                 \n\n                                  Dress Category\n\n                                </ion-label>\n\n                                <ion-select class="form-control" formControlName="dressCat" [class.error]="!designForm.controls.dressCat.valid && designForm.controls.dressCat.dirty">\n\n                                    <ion-option *ngFor="let cat of dressDesignes" value="{{cat.key}}">{{cat.key}}</ion-option>\n\n                                  </ion-select>\n\n                                <!-- <ion-input type="text" value="" formControlName ="dressCat"></ion-input> -->\n\n                              </ion-item>\n\n                              <ion-item  *ngIf="!designForm.controls.dressCat.valid &&\n\n                              designForm.controls.dressCat.dirty"\n\n                              class="validator-error">\n\n                                  <!-- <div class="error" *ngIf="form.get(\'name\').hasError(\'required\') && form.get(\'name\').touched"> -->\n\n                                    Please select alteast one dress type.\n\n                                  <!-- </div> -->\n\n                              </ion-item>\n\n                              <ion-item class="form-group">\n\n                                <ion-label floating>\n\n                                 \n\n                                  Gender\n\n                                </ion-label>\n\n                                <ion-select  class="form-control" formControlName="gender" [class.error]="!designForm.controls.gender.valid && designForm.controls.gender.dirty">\n\n                                    <ion-option  value="male">Male</ion-option>\n\n                                    <ion-option  value="female">Female</ion-option>\n\n                                  </ion-select>\n\n                                <!-- <ion-input type="text" value="" formControlName ="dressCat"></ion-input> -->\n\n                              </ion-item>\n\n                              <ion-item  *ngIf="!designForm.controls.gender.valid &&\n\n                              designForm.controls.gender.dirty"\n\n                              class="validator-error">\n\n                                  <!-- <div class="error" *ngIf="form.get(\'name\').hasError(\'required\') && form.get(\'name\').touched"> -->\n\n                                    Please select gender.\n\n                                  <!-- </div> -->\n\n                              </ion-item>\n\n                              <button  ion-button>\n\n                                  Next\n\n                              </button>\n\n                    <!-- <ion-item> -->\n\n                        <!-- <ion-label stacked>My Field Label</ion-label>\n\n                    <ion-input type="text"  formControlName="myField" value="" placeholder="Enter Name"></ion-input> -->\n\n                    <!-- </ion-item> -->\n\n          \n\n              </form>\n\n          <!-- <ion-form>\n\n\n\n            <ion-input type="text" placeholder="Enter Name"></ion-input>\n\n            <ion-input type="email" placeholder="Enter Email"></ion-input>\n\n            <ion-input type="text" placeholder="Enter Mobile "></ion-input>\n\n            <ion-select value="brown" okText="Okay" cancelText="Dismiss">\n\n                <ion-option value="brown">Brown</ion-option>\n\n              </ion-select>\n\n              <ion-select value="brown" okText="Okay" cancelText="Dismiss">\n\n                  <ion-option value="brown">Brown</ion-option>\n\n                </ion-select>\n\n              </ion-form> -->\n\n\n\n\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col class="column gendar-column" size="4">\n\n        <div>\n\n          <p style="float: left">Gendar</p>\n\n          <br><br><br>\n\n          <img class="gendar" src="/assets/icon/man-icon.png">\n\n        </div>\n\n        <div>\n\n          <img class="gendar" src="/assets/icon/women-icon.png">\n\n        </div>\n\n\n\n      </ion-col>\n\n      <ion-col class="column" size="4">\n\n        <p style="float: left"> Dress Type</p>\n\n        <custom-dress-category-selector (selectedCategory)="onDressCategorySelection($event)">\n\n        </custom-dress-category-selector>\n\n      </ion-col>\n\n      <ion-col class="column" size="4">\n\n        <p style="float: left"> Style Type</p>\n\n        <custom-fashion-category-selector (selectedCategory)="onFashionCategorySelection($event)">\n\n        </custom-fashion-category-selector>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n</ion-content>'/*ion-inline-end:"E:\ionic\egarments\egarments-client\eshop-client\src\pages\buyer\cutom-design-category-selector\cutom-design-category-selector.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__store_productstore_productstore__["a" /* ProductStore */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_products_products__["a" /* ProductsProvider */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_6__providers_shared_shared__["a" /* SharedProvider */],
            __WEBPACK_IMPORTED_MODULE_8__store_orders_orderstore__["a" /* OrderStore */]])
    ], CutomDesignCategorySelectorPage);
    return CutomDesignCategorySelectorPage;
}());

//# sourceMappingURL=cutom-design-category-selector.js.map

/***/ }),

/***/ 211:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 211;

/***/ }),

/***/ 253:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-custom-assets/add-custom-assets.module": [
		506,
		1
	],
	"../pages/admin/add-product/add-product.module": [
		507,
		11
	],
	"../pages/admin/admindashboard/admindashboard.module": [
		508,
		10
	],
	"../pages/admin/order-details/order-details.module": [
		510,
		9
	],
	"../pages/buyer/categories/categories.module": [
		509,
		8
	],
	"../pages/buyer/customDesign/custom-design/custom-design-home.module": [
		511,
		7
	],
	"../pages/buyer/customDesign/design-canvas/design-canvas.module": [
		512,
		0
	],
	"../pages/buyer/cutom-design-category-selector/cutom-design-category-selector.module": [
		517,
		6
	],
	"../pages/buyer/men/men.module": [
		513,
		5
	],
	"../pages/buyer/product-details/product-details.module": [
		514,
		4
	],
	"../pages/buyer/user-orders/user-orders.module": [
		515,
		3
	],
	"../pages/membership/signup/signup.module": [
		516,
		2
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 253;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store_orders_orderstore__ = __webpack_require__(34);
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
 * Generated class for the PopoverComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var PopoverComponent = /** @class */ (function () {
    function PopoverComponent(ordersStore) {
        this.ordersStore = ordersStore;
        this.text = ['pending', 'completed', 'rejected'];
    }
    PopoverComponent.prototype.filterList = function (list) {
        this.ordersStore.filterOrders(list);
    };
    PopoverComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'popover',template:/*ion-inline-start:"E:\ionic\egarments\egarments-client\eshop-client\src\components\popover\popover.html"*/'<!-- Generated template for the PopoverComponent component -->\n\n<div >\n\n<ul *ngFor="let list of text">\n\n  <li (click)="filterList(list)">{{list}}</li>\n\n</ul>\n\n</div>\n\n'/*ion-inline-end:"E:\ionic\egarments\egarments-client\eshop-client\src\components\popover\popover.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__store_orders_orderstore__["a" /* OrderStore */]])
    ], PopoverComponent);
    return PopoverComponent;
}());

//# sourceMappingURL=popover.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomProductSelectionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_products_products__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_buyer_customDesign_custom_design_custom_design_home__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store_orders_orderstore__ = __webpack_require__(34);
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
 * Generated class for the CustomProductSelectionComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var CustomProductSelectionComponent = /** @class */ (function () {
    function CustomProductSelectionComponent(productService, navCtrl, orderStore) {
        this.productService = productService;
        this.navCtrl = navCtrl;
        this.orderStore = orderStore;
        this.products = [];
    }
    CustomProductSelectionComponent.prototype.ngOnInit = function () {
        var _this = this;
        // console.log(orderStore.customDesignOrder);
        debugger;
        this.productService.getProducts().subscribe(function (res) {
            if (res && res.length > 0) {
                for (var i = 0; i < res.length; i++) {
                    if ((res[i].dressCategory == _this.orderStore.customDesignOrder.dressCategory) && (res[i].fashionCategory == _this.orderStore.customDesignOrder.fashionCategory) && (res[i].gendar == _this.orderStore.customDesignOrder.gender)) {
                        debugger;
                        _this.products.push(res[i]);
                    }
                }
            }
            // this.products=   _.filter(res, { 'dressCategory': this.orderStore.customDesignOrder.dressCategory, 'fashionCategory': this.orderStore.customDesignOrder.fashionCategory,'gendar':this.orderStore.customDesignOrder.gender });
            console.log(_this.products);
        });
    };
    CustomProductSelectionComponent.prototype.goToFinalCustomView = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_buyer_customDesign_custom_design_custom_design_home__["a" /* CustomDesignHomePage */]);
    };
    CustomProductSelectionComponent.prototype.selectedArticle = function (item) {
        this.orderStore.customDesignOrder.selectedItem = item;
        this.slectedItem = item;
    };
    CustomProductSelectionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'custom-product-selection',template:/*ion-inline-start:"E:\ionic\egarments\egarments-client\eshop-client\src\components\custom-design\custom-product-selection\custom-product-selection.html"*/'<!--\n\n  Generated template for the CutomDesignCategorySelectorPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar>\n\n      <ion-title class="product-selection-header">Cutom Design <ion-icon name="checkmark" *ngIf="slectedItem" (click)="goToFinalCustomView()"></ion-icon></ion-title>\n\n      \n\n    </ion-navbar>\n\n  \n\n  </ion-header>\n\n  \n\n  \n\n  <ion-content padding class="modal-content">\n\n    <ion-grid>\n\n        <ion-row *ngIf="products && products.length > 0">\n\n              <ion-col *ngFor="let product of products" size="6" col-6>\n\n                  <!-- <ion-thumbnail slot="start" size="50"  > -->\n\n                     <img src=" {{product.images[0].url}}" class="thumbnail-image" (click)="selectedArticle(product)" [ngClass]="slectedItem && slectedItem.id == product.id ? \'selected\' : \'\'">\n\n                   <!-- </ion-thumbnail> -->\n\n               </ion-col>\n\n          </ion-row>\n\n          <ion-row *ngIf="products && products.length <= 0">\n\n            No Record Found.\n\n          </ion-row>\n\n    </ion-grid>\n\n    \n\n  \n\n  </ion-content>'/*ion-inline-end:"E:\ionic\egarments\egarments-client\eshop-client\src\components\custom-design\custom-product-selection\custom-product-selection.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_products_products__["a" /* ProductsProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__store_orders_orderstore__["a" /* OrderStore */]])
    ], CustomProductSelectionComponent);
    return CustomProductSelectionComponent;
}());

//# sourceMappingURL=custom-product-selection.js.map

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_signup__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__buyer_categories_categories__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_membership_membership__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__model_login__ = __webpack_require__(498);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__admin_admindashboard_admindashboard__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, alertCtrl, membershipService) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.membershipService = membershipService;
        this.userCredentials = new __WEBPACK_IMPORTED_MODULE_5__model_login__["a" /* LoginModel */]();
    }
    LoginPage.prototype.ngOnInit = function () {
    };
    LoginPage.prototype.forgotpassword = function () {
        var alert = this.alertCtrl.create({
            title: 'Forgot Password',
            inputs: [
                {
                    name: 'email',
                    placeholder: 'Enter Email Address',
                    type: 'text'
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'Cancel',
                    handler: function (data) {
                    }
                },
                {
                    cssClass: 'ok',
                    text: 'ok',
                    handler: function (data) {
                    }
                }
            ]
        });
        alert.present();
    };
    LoginPage.prototype.signup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__signup_signup__["a" /* SignupPage */]);
        console.log("here");
    };
    LoginPage.prototype.logIn = function () {
        var _this = this;
        this.membershipService.login(this.userCredentials).subscribe(function (res) {
            if (res) {
                if (res.role == 'buyer') {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__buyer_categories_categories__["a" /* CategoriesPage */]);
                }
                else {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__admin_admindashboard_admindashboard__["a" /* AdmindashboardPage */]);
                }
            }
            else {
                _this.showError('login failed');
            }
        }, function (error) {
            _this.showError(error.message);
        });
    };
    LoginPage.prototype.showError = function (error) {
        alert(error);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"E:\ionic\egarments\egarments-client\eshop-client\src\pages\membership\login\login.html"*/'<ion-content class="main">\n\n\n\n    <div class="card" style="height : 50%;">\n\n\n\n        <img src="../../../assets/imgs/logo.png" alt="Avatar" >\n\n        <div class="container">\n\n            <input class="inputfields" [(ngModel)]="userCredentials.email" type="text" placeholder="Enter Email here">\n\n          <input class="inputfields" [(ngModel)]="userCredentials.password" type="password" placeholder="Enter password here">\n\n          <ion-label>Forgot your password?</ion-label>   \n\n        </div>\n\n        <button ion-button class="loginbtn"color="medium" (click)="logIn()" block>Sign In</button>\n\n      </div>\n\n     <ion-label class="signuplbl"> <a (click)="signup()">New?Signup Here</a></ion-label>\n\n\n\n<!-- <div class="logo">\n\n  <img class="logo-img" src="assets/imgs/logo.png">\n\n</div>\n\n\n\n<ion-card class="card">\n\n\n\n  <ion-card-content>\n\n  <ion-list>\n\n\n\n\n\n      <ion-input [(ngModel)]="userCredentials.email" class="loginfields" placeholder="Enter Email Here"  type="text" value=""></ion-input>\n\n    \n\n     \n\n      <ion-input [(ngModel)]="userCredentials.password" class="loginfields" placeholder="Enter Password Here" type="password" value=""></ion-input>\n\n  <div class="forgotpassword">\n\n\n\n    <a (click)="forgotpassword()">Forgot Password ?</a>\n\n  </div>\n\n  <div class="login" >\n\n    <button ion-button color="primary" (click)="logIn()" block>Sign In</button>\n\n  </div>\n\n  </ion-list>\n\n  </ion-card-content>\n\n\n\n</ion-card>\n\n\n\n<div class="signup">\n\n\n\n  <a (click)="signup()">Signup</a>\n\n</div> -->\n\n  <!-- <ion-list>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Username</ion-label>\n\n      <ion-input [(ngModel)]="userCredentials.email" type="text" value=""></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Password</ion-label>\n\n      <ion-input [(ngModel)]="userCredentials.password" type="password" value=""></ion-input>\n\n    </ion-item>\n\n\n\n  </ion-list>\n\n<a (click)="forgotpassword()">Forgot Password ?</a>\n\n\n\n  <div padding>\n\n    <button ion-button color="primary" (click)="logIn()" block>Sign In</button>\n\n  </div>\n\n  <div padding>\n\n    <button ion-button color="primary"  (click)="signup()" block>Sign Up</button>\n\n  </div> -->\n\n<!-- <p (click)="signup()" >signup</p> -->\n\n</ion-content>\n\n'/*ion-inline-end:"E:\ionic\egarments\egarments-client\eshop-client\src\pages\membership\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_membership_membership__["a" /* MembershipProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MembershipProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store_profilestore_profileStore__ = __webpack_require__(76);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the MembershipProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var MembershipProvider = /** @class */ (function () {
    function MembershipProvider(http, profileStore) {
        this.http = http;
        this.profileStore = profileStore;
        console.log('Hello MembershipProvider Provider');
    }
    MembershipProvider.prototype.login = function (userCredentials) {
        var _this = this;
        return this.http.get('./../assets/membership.json').pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (res) {
            var ifUser = res.user.find(function (x) { return x.email == userCredentials.email && x.password == userCredentials.password; });
            if (ifUser) {
                _this.profileStore.setUserData(ifUser);
                return ifUser;
            }
            else {
                return false;
            }
        }));
    };
    MembershipProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__store_profilestore_profileStore__["a" /* ProfileStore */]])
    ], MembershipProvider);
    return MembershipProvider;
}());

//# sourceMappingURL=membership.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(424);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderStore; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_buyer_customDesign_model_custom_design_view_model__ = __webpack_require__(445);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrderStore = /** @class */ (function () {
    function OrderStore() {
        var _this = this;
        this.myOrders = [];
        this.filteredOrders = [];
        this.filter = '';
        this.customDesignOrder = new __WEBPACK_IMPORTED_MODULE_2__pages_buyer_customDesign_model_custom_design_view_model__["a" /* CustomDesignViewModel */]();
        Object(__WEBPACK_IMPORTED_MODULE_0_mobx__["b" /* autorun */])(function () {
            if (JSON.parse(localStorage.getItem('orders')) && JSON.parse(localStorage.getItem('orders')) != {}) {
                var obj = JSON.parse(localStorage.getItem('orders'));
                ;
                if (obj && obj.accountType) {
                    _this.filteredOrders = obj;
                }
                console.log(_this.filteredOrders);
            }
            else if (_this.filteredOrders) {
                window.localStorage.setItem('orders', JSON.stringify(_this.filteredOrders));
            }
        });
    }
    OrderStore.prototype.addNewOrder = function (order) {
        this.myOrders.push(order);
    };
    OrderStore.prototype.clear = function () {
        this.myOrders = [];
        this.filter = '';
        this.filteredOrders = [];
    };
    OrderStore.prototype.setOrders = function (orders) {
        this.myOrders = orders;
        window.localStorage.setItem('products', JSON.stringify(orders));
        if (this.filter && this.filter != '') {
            this.filterOrders(this.filter);
        }
        else {
            this.filteredOrders = orders;
        }
    };
    OrderStore.prototype.filterOrders = function (status) {
        console.log(status);
        if (status) {
            this.filter = status;
            this.filteredOrders = this.myOrders.filter(function (x) { return x.status == status; });
            // return this.filteredOrders;
        }
        else {
            this.filteredOrders = this.myOrders;
        }
    };
    Object.defineProperty(OrderStore.prototype, "getOrders", {
        get: function () {
            // return this.myOrders;
            return this.filteredOrders;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_mobx__["d" /* observable */],
        __metadata("design:type", Array)
    ], OrderStore.prototype, "myOrders", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_mobx__["d" /* observable */],
        __metadata("design:type", Array)
    ], OrderStore.prototype, "filteredOrders", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_mobx__["d" /* observable */],
        __metadata("design:type", String)
    ], OrderStore.prototype, "filter", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_mobx__["d" /* observable */],
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__pages_buyer_customDesign_model_custom_design_view_model__["a" /* CustomDesignViewModel */])
    ], OrderStore.prototype, "customDesignOrder", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_mobx__["a" /* action */],
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], OrderStore.prototype, "addNewOrder", null);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_mobx__["a" /* action */],
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], OrderStore.prototype, "clear", null);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_mobx__["a" /* action */],
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], OrderStore.prototype, "setOrders", null);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_mobx__["a" /* action */],
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], OrderStore.prototype, "filterOrders", null);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_mobx__["c" /* computed */],
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], OrderStore.prototype, "getOrders", null);
    OrderStore = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], OrderStore);
    return OrderStore;
}());

//# sourceMappingURL=orderstore.js.map

/***/ }),

/***/ 424:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(497);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_membership_login_login__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_buyer_categories_categories__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_membership_signup_signup__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_buyer_men_men__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_membership_membership__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_products_products__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common_http__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_orders_orders__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__store_orders_orderstore__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__store_productstore_productstore__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_buyer_product_details_product_details__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__store_profilestore_profileStore__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_buyer_customDesign_custom_design_custom_design_home__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_shared_shared__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_admin_admindashboard_admindashboard__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_admin_order_details_order_details__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_ngx_color_picker__ = __webpack_require__(499);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__directives_dragable_dragable__ = __webpack_require__(500);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ionic_long_press__ = __webpack_require__(501);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_angular2_draggable__ = __webpack_require__(502);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_custom_design_custom_fashion_category_selector_custom_fashion_category_selector__ = __webpack_require__(503);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_custom_design_custom_dress_category_selector_custom_dress_category_selector__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_custom_design_custom_assets_custom_assets__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_popover_popover__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_buyer_cutom_design_category_selector_cutom_design_category_selector__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_buyer_user_orders_user_orders__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_admin_add_product_add_product__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_custom_design_custom_product_selection_custom_product_selection__ = __webpack_require__(267);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// import { SplashScreen } from '@ionic-native/splash-screen';
// import { StatusBar } from '@ionic-native/status-bar';


















// import { ScreenOrientation } from "@ionic-native/screen-orientation";






// import { PopoverController } from 'ionic-angular';





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_membership_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_membership_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_buyer_categories_categories__["a" /* CategoriesPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_buyer_men_men__["a" /* MenPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_buyer_product_details_product_details__["a" /* ProductDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_buyer_customDesign_custom_design_custom_design_home__["a" /* CustomDesignHomePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_admin_admindashboard_admindashboard__["a" /* AdmindashboardPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_admin_order_details_order_details__["a" /* OrderDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_21__directives_dragable_dragable__["a" /* AbsoluteDragDirective */],
                __WEBPACK_IMPORTED_MODULE_24__components_custom_design_custom_fashion_category_selector_custom_fashion_category_selector__["a" /* CustomFashionCategorySelectorComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_custom_design_custom_dress_category_selector_custom_dress_category_selector__["a" /* CustomDressCategorySelectorComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_custom_design_custom_assets_custom_assets__["a" /* CustomAssetsComponent */],
                __WEBPACK_IMPORTED_MODULE_27__components_popover_popover__["a" /* PopoverComponent */],
                __WEBPACK_IMPORTED_MODULE_28__pages_buyer_cutom_design_category_selector_cutom_design_category_selector__["a" /* CutomDesignCategorySelectorPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_buyer_user_orders_user_orders__["a" /* UserOrdersPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_admin_add_product_add_product__["a" /* AddProductPage */],
                __WEBPACK_IMPORTED_MODULE_31__components_custom_design_custom_product_selection_custom_product_selection__["a" /* CustomProductSelectionComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/add-custom-assets/add-custom-assets.module#AddCustomAssetsPageModule', name: 'AddCustomAssetsPage', segment: 'add-custom-assets', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/admin/add-product/add-product.module#AddProductPageModule', name: 'AddProductPage', segment: 'add-product', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/admin/admindashboard/admindashboard.module#AdmindashboardPageModule', name: 'AdmindashboardPage', segment: 'admindashboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/buyer/categories/categories.module#CategoriesPageModule', name: 'CategoriesPage', segment: 'categories', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/admin/order-details/order-details.module#OrderDetailsPageModule', name: 'OrderDetailsPage', segment: 'order-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/buyer/customDesign/custom-design/custom-design-home.module#CustomDesignHomePageModule', name: 'CustomDesignHomePage', segment: 'custom-design-home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/buyer/customDesign/design-canvas/design-canvas.module#DesignCanvasPageModule', name: 'DesignCanvasPage', segment: 'design-canvas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/buyer/men/men.module#MenPageModule', name: 'MenPage', segment: 'men', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/buyer/product-details/product-details.module#ProductDetailsPageModule', name: 'ProductDetailsPage', segment: 'product-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/buyer/user-orders/user-orders.module#UserOrdersPageModule', name: 'UserOrdersPage', segment: 'user-orders', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/membership/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/buyer/cutom-design-category-selector/cutom-design-category-selector.module#CutomDesignCategorySelectorPageModule', name: 'custom-category-selector', segment: 'app', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_20_ngx_color_picker__["a" /* ColorPickerModule */],
                __WEBPACK_IMPORTED_MODULE_23_angular2_draggable__["a" /* AngularDraggableModule */],
                __WEBPACK_IMPORTED_MODULE_22_ionic_long_press__["a" /* LongPressModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_membership_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_membership_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_buyer_categories_categories__["a" /* CategoriesPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_buyer_men_men__["a" /* MenPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_buyer_product_details_product_details__["a" /* ProductDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_buyer_customDesign_custom_design_custom_design_home__["a" /* CustomDesignHomePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_admin_admindashboard_admindashboard__["a" /* AdmindashboardPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_admin_order_details_order_details__["a" /* OrderDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_24__components_custom_design_custom_fashion_category_selector_custom_fashion_category_selector__["a" /* CustomFashionCategorySelectorComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_custom_design_custom_dress_category_selector_custom_dress_category_selector__["a" /* CustomDressCategorySelectorComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_custom_design_custom_assets_custom_assets__["a" /* CustomAssetsComponent */],
                __WEBPACK_IMPORTED_MODULE_27__components_popover_popover__["a" /* PopoverComponent */],
                __WEBPACK_IMPORTED_MODULE_28__pages_buyer_cutom_design_category_selector_cutom_design_category_selector__["a" /* CutomDesignCategorySelectorPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_buyer_user_orders_user_orders__["a" /* UserOrdersPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_admin_add_product_add_product__["a" /* AddProductPage */],
                __WEBPACK_IMPORTED_MODULE_31__components_custom_design_custom_product_selection_custom_product_selection__["a" /* CustomProductSelectionComponent */]
            ],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_8__providers_membership_membership__["a" /* MembershipProvider */],
                __WEBPACK_IMPORTED_MODULE_9__providers_products_products__["a" /* ProductsProvider */],
                __WEBPACK_IMPORTED_MODULE_11__providers_orders_orders__["a" /* OrdersProvider */],
                __WEBPACK_IMPORTED_MODULE_12__store_orders_orderstore__["a" /* OrderStore */],
                __WEBPACK_IMPORTED_MODULE_15__store_profilestore_profileStore__["a" /* ProfileStore */],
                __WEBPACK_IMPORTED_MODULE_17__providers_shared_shared__["a" /* SharedProvider */],
                __WEBPACK_IMPORTED_MODULE_13__store_productstore_productstore__["a" /* ProductStore */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 445:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomDesignViewModel; });
var CustomDesignViewModel = /** @class */ (function () {
    function CustomDesignViewModel() {
        this.colors = [];
        this.images = [];
        this.sizes = [];
        this.selectedItem = {};
        this.name = "";
        this.email = "";
        this.ph = 0;
        this.fashionCategory = "";
        this.dressCategory = "";
        this.gender = "";
        this.price = 0;
        this.standardSize = "";
    }
    return CustomDesignViewModel;
}());

//# sourceMappingURL=custom-design-view.model.js.map

/***/ }),

/***/ 449:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderModel; });
var OrderModel = /** @class */ (function () {
    function OrderModel() {
    }
    return OrderModel;
}());

//# sourceMappingURL=ordered.js.map

/***/ }),

/***/ 450:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomDesignSelectionModel; });
var CustomDesignSelectionModel = /** @class */ (function () {
    function CustomDesignSelectionModel() {
        this.selectedColor = '';
        this.size = '';
        this.AvailableSizes = ['SM', 'MD', 'LG', 'XL'];
        this.selectedDressType = '';
    }
    return CustomDesignSelectionModel;
}());

//# sourceMappingURL=custom_design-details.model.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductStore; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(446);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mobx__ = __webpack_require__(146);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductStore = /** @class */ (function () {
    function ProductStore() {
        var _this = this;
        this.allProducts = [];
        this.customProducts = [];
        this.customAssets = [];
        Object(__WEBPACK_IMPORTED_MODULE_2_mobx__["b" /* autorun */])(function () {
            if (JSON.parse(localStorage.getItem('products')) && JSON.parse(localStorage.getItem('products')) != {}) {
                var obj = JSON.parse(localStorage.getItem('products'));
                ;
                if (obj && obj.accountType) {
                    _this.allProducts = obj;
                }
                console.log(_this.allProducts);
            }
            else if (_this.allProducts) {
                window.localStorage.setItem('products', JSON.stringify(_this.allProducts));
            }
        });
    }
    ProductStore.prototype.clear = function () {
        this.allProducts = null;
        localStorage.removeItem('userData');
    };
    ProductStore.prototype.saveProducts = function (products) {
        this.allProducts = products.slice();
        window.localStorage.setItem('products', JSON.stringify(this.allProducts));
    };
    Object.defineProperty(ProductStore.prototype, "products", {
        get: function () {
            return this.allProducts;
        },
        enumerable: true,
        configurable: true
    });
    ProductStore.prototype.seveCustomAssets = function (assets) {
        console.log('custom assets', assets);
        this.customAssets = assets.slice();
    };
    Object.defineProperty(ProductStore.prototype, "getCustomAssets", {
        get: function () {
            return this.customAssets;
        },
        enumerable: true,
        configurable: true
    });
    ProductStore.prototype.seveCustomProducts = function (products) {
        console.log("get custom products", products);
        this.customProducts = products.slice();
    };
    ProductStore.prototype.getproductForCustomDesign = function (dressCategory, fashionCategory) {
        var p = this.customProducts.find(function (x) { return x.dressCategory == dressCategory.key && x.fashionCategory == fashionCategory.key; });
        return p;
    };
    __decorate([
        __WEBPACK_IMPORTED_MODULE_2_mobx__["d" /* observable */],
        __metadata("design:type", Array)
    ], ProductStore.prototype, "allProducts", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_2_mobx__["d" /* observable */],
        __metadata("design:type", Array)
    ], ProductStore.prototype, "customProducts", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_2_mobx__["d" /* observable */],
        __metadata("design:type", Array)
    ], ProductStore.prototype, "customAssets", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_2_mobx__["a" /* action */],
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ProductStore.prototype, "clear", null);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_2_mobx__["a" /* action */],
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Array]),
        __metadata("design:returntype", void 0)
    ], ProductStore.prototype, "saveProducts", null);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_2_mobx__["c" /* computed */],
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], ProductStore.prototype, "products", null);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_2_mobx__["a" /* action */],
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ProductStore.prototype, "seveCustomAssets", null);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_2_mobx__["c" /* computed */],
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], ProductStore.prototype, "getCustomAssets", null);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_2_mobx__["a" /* action */],
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ProductStore.prototype, "seveCustomProducts", null);
    ProductStore = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ProductStore);
    return ProductStore;
}());

//# sourceMappingURL=productstore.js.map

/***/ }),

/***/ 497:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_membership_login_login__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_buyer_categories_categories__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_shared_shared__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_admin_admindashboard_admindashboard__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__store_profilestore_profileStore__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_buyer_cutom_design_category_selector_cutom_design_category_selector__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_buyer_user_orders_user_orders__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_admin_add_product_add_product__ = __webpack_require__(172);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { StatusBar } from '@ionic-native/status-bar';
// import { SplashScreen } from '@ionic-native/splash-screen';


// import { CustomDesignHomePage } from '../pages/buyer/customDesign/custom-design/custom-design-home';






// import { DesignCanvasPage } from '../pages/buyer/customDesign/design-canvas/design-canvas';
var MyApp = /** @class */ (function () {
    function MyApp(platform, 
    // statusBar: StatusBar,
    // splashScreen: SplashScreen,
    profileStore, sharedService) {
        var _this = this;
        this.profileStore = profileStore;
        this.sharedService = sharedService;
        platform.ready().then(function () {
            if (localStorage.getItem('userData')) {
                var data = JSON.parse(localStorage.getItem('userData'));
                if (data && data.accessTokken) {
                    // this.navCtrl.setRoot(CategoriesPage);
                    if (data.accountType == 'buyer') {
                        _this.rootPage = __WEBPACK_IMPORTED_MODULE_3__pages_buyer_categories_categories__["a" /* CategoriesPage */];
                    }
                    else {
                        _this.rootPage = __WEBPACK_IMPORTED_MODULE_3__pages_buyer_categories_categories__["a" /* CategoriesPage */];
                    }
                }
                else {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_3__pages_buyer_categories_categories__["a" /* CategoriesPage */];
                }
            }
            else {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_3__pages_buyer_categories_categories__["a" /* CategoriesPage */];
            }
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            // statusBar.styleDefault();
            // splashScreen.hide();
        });
        this.pagesForMenu();
    }
    MyApp.prototype.pagesForMenu = function () {
        // if (this.profileStore.currentUserData && this.profileStore.currentUserData.accountType == 'buyer') {
        //   this.pages = [
        //     { title: 'Home', component: CategoriesPage },
        //     { title: 'Custom Design', component: CustomDesignHomePage },
        //     { title: 'LogOut', component: LoginPage }
        //   ];
        // } else if(this.profileStore.currentUserData && this.profileStore.currentUserData.accountType == 'admin'){
        //   this.pages = [
        //     { title: 'Orders', component: AdmindashboardPage },
        //     { title: 'Products', component: AdmindashboardPage },
        //     { title: 'LogOut', component: LoginPage }
        //   ];
        // }
    };
    MyApp.prototype.ngOnChanges = function () {
        this.pagesForMenu();
    };
    MyApp.prototype.initializeApp = function () {
    };
    MyApp.prototype.openPage = function (pageName) {
        if (pageName == 'home') {
            this.nav.push(__WEBPACK_IMPORTED_MODULE_3__pages_buyer_categories_categories__["a" /* CategoriesPage */]);
        }
        else if (pageName == 'customDesign') {
            this.nav.push(__WEBPACK_IMPORTED_MODULE_7__pages_buyer_cutom_design_category_selector_cutom_design_category_selector__["a" /* CutomDesignCategorySelectorPage */]);
        }
        else if (pageName == 'add-product') {
            this.nav.push(__WEBPACK_IMPORTED_MODULE_9__pages_admin_add_product_add_product__["a" /* AddProductPage */]);
        }
        else if (pageName == 'adminOrders') {
            this.nav.push(__WEBPACK_IMPORTED_MODULE_5__pages_admin_admindashboard_admindashboard__["a" /* AdmindashboardPage */]);
        }
        else if (pageName == 'adminProducts') {
            this.nav.push(__WEBPACK_IMPORTED_MODULE_5__pages_admin_admindashboard_admindashboard__["a" /* AdmindashboardPage */]);
        }
        else if (pageName == 'buyer-orders') {
            this.nav.push(__WEBPACK_IMPORTED_MODULE_8__pages_buyer_user_orders_user_orders__["a" /* UserOrdersPage */]);
        }
        else if (pageName == 'logout') {
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__pages_membership_login_login__["a" /* LoginPage */]);
            localStorage.clear();
            // this.nav.setRoot(page.component);
            this.sharedService.clearStores();
        }
        //   // Reset the content nav to have just this page
        //   // we wouldn't want the back button to show in this scenario
        //   this.nav.setRoot(page.component);
        //   if (page.title == 'LogOut') {
        //     localStorage.clear();
        //     this.nav.setRoot(page.component);
        //     this.sharedService.clearStores();
        //   }else{
        //     this.nav.push(page.component);
        //   }
        //   // this.activePage = page;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\ionic\egarments\egarments-client\eshop-client\src\app\app.html"*/'<ion-menu [content]="content"  type="push" side="left" class="my-sidemenu">\n\n        <ion-header>\n\n          <ion-toolbar>\n\n            <ion-title>Menu</ion-title>\n\n          </ion-toolbar>\n\n        </ion-header>\n\n      \n\n        <ion-content>\n\n          <ion-list>\n\n            <button *ngIf="profileStore.currentUserData && profileStore.currentUserData.accountType==\'buyer\'" menuClose ion-item  (click)="openPage(\'home\')" >\n\n                Home\n\n            </button>\n\n            <!-- <button *ngIf="profileStore.currentUserData &&  profileStore.currentUserData.accountType==\'buyer\'" menuClose ion-item  (click)="openPage(\'customDesign\')" >\n\n              Custom Design\n\n          </button> -->\n\n          <button  menuClose ion-item  (click)="openPage(\'customDesign\')" >\n\n            Custom Design\n\n        </button>\n\n        <button  menuClose ion-item  (click)="openPage(\'buyer-orders\')" >\n\n            My Orders\n\n        </button>\n\n        <button  menuClose ion-item  (click)="openPage(\'add-product\')" >\n\n          Add Product\n\n      </button>\n\n          <button *ngIf="profileStore.currentUserData && profileStore.currentUserData.accountType==\'admin\'" menuClose ion-item  (click)="openPage(\'adminOrders\')" >\n\n            Orders\n\n        </button>\n\n        <button *ngIf="profileStore.currentUserData && profileStore.currentUserData.accountType==\'admin\'" menuClose ion-item  (click)="openPage(\'adminProducts\')" >\n\n          Products\n\n        </button>\n\n          <button  menuClose ion-item  (click)="openPage(\'logout\')" >\n\n            Logout\n\n        </button>\n\n          </ion-list>\n\n        </ion-content>\n\n      \n\n      </ion-menu>\n\n      \n\n      <!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n      <!-- <ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>  -->\n\n      \n\n      \n\n      <ion-nav [root]="rootPage" #content swipeBackEnabled="false" class="my-navbar"></ion-nav>\n\n      \n\n      \n\n      \n\n      \n\n      <!-- <ion-menu [content]="content">\n\n        <ion-header>\n\n          <ion-toolbar>\n\n            <ion-title>Recipes App</ion-title>\n\n          </ion-toolbar>\n\n        </ion-header>\n\n        \n\n        <ion-content>\n\n          <ion-list>\n\n            <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n              {{p.title}}\n\n            </button>\n\n          </ion-list>\n\n        </ion-content>\n\n      </ion-menu> -->'/*ion-inline-end:"E:\ionic\egarments\egarments-client\eshop-client\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_6__store_profilestore_profileStore__["a" /* ProfileStore */],
            __WEBPACK_IMPORTED_MODULE_4__providers_shared_shared__["a" /* SharedProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 498:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginModel; });
var LoginModel = /** @class */ (function () {
    function LoginModel() {
        this.email = '';
        this.password = '';
    }
    return LoginModel;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 500:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbsoluteDragDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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
 * Generated class for the AbsoluteDragDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
var AbsoluteDragDirective = /** @class */ (function () {
    function AbsoluteDragDirective(element, renderer, domCtrl) {
        this.element = element;
        this.renderer = renderer;
        this.domCtrl = domCtrl;
        console.log('Hello AbsoluteDragDirective Directive');
    }
    AbsoluteDragDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.renderer.setElementStyle(this.element.nativeElement, 'position', 'absolute');
        this.renderer.setElementStyle(this.element.nativeElement, 'left', this.startLeft + 'px');
        this.renderer.setElementStyle(this.element.nativeElement, 'top', this.startTop + 'px');
        var hammer = new window['Hammer'](this.element.nativeElement);
        hammer.get('pan').set({ direction: window['Hammer'].DIRECTION_ALL });
        hammer.on('pan', function (ev) {
            _this.handlePan(ev);
        });
    };
    AbsoluteDragDirective.prototype.handlePan = function (ev) {
        var _this = this;
        var newLeft = ev.center.x;
        var newTop = ev.center.y;
        this.domCtrl.write(function () {
            _this.renderer.setElementStyle(_this.element.nativeElement, 'left', newLeft + 'px');
            _this.renderer.setElementStyle(_this.element.nativeElement, 'top', newTop + 'px');
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('startLeft'),
        __metadata("design:type", Object)
    ], AbsoluteDragDirective.prototype, "startLeft", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('startTop'),
        __metadata("design:type", Object)
    ], AbsoluteDragDirective.prototype, "startTop", void 0);
    AbsoluteDragDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[absolute-drag]' // Attribute selector
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Renderer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* DomController */]])
    ], AbsoluteDragDirective);
    return AbsoluteDragDirective;
}());

//# sourceMappingURL=dragable.js.map

/***/ }),

/***/ 503:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomFashionCategorySelectorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_shared_shared__ = __webpack_require__(78);
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
 * Generated class for the CustomFashionCategorySelectorComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var CustomFashionCategorySelectorComponent = /** @class */ (function () {
    function CustomFashionCategorySelectorComponent(sharedService) {
        this.sharedService = sharedService;
        this.fasionDesignes = [];
        this.selectedCategory = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        console.log('Hello CustomFashionCategorySelectorComponent Component');
        this.text = 'Hello World';
    }
    CustomFashionCategorySelectorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sharedService.getFashionCategories().subscribe(function (res) {
            console.log(res);
            _this.fasionDesignes = res;
        });
    };
    CustomFashionCategorySelectorComponent.prototype.onSelectCategory = function (selectedCategory) {
        this.selectedItem = selectedCategory;
        this.selectedCategory.emit(selectedCategory);
        // alert('selected category is '+ selectedCategory.key);
    };
    CustomFashionCategorySelectorComponent.prototype.isSelectedItem = function (cat) {
        return this.selectedItem == cat ? true : false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], CustomFashionCategorySelectorComponent.prototype, "selectedCategory", void 0);
    CustomFashionCategorySelectorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'custom-fashion-category-selector',template:/*ion-inline-start:"E:\ionic\egarments\egarments-client\eshop-client\src\components\custom-design\custom-fashion-category-selector\custom-fashion-category-selector.html"*/'<!-- Generated template for the CustomFashionCategorySelectorComponent component -->\n\n<!-- <div class="flex"> -->\n\n    <ion-list class="chip-list" *ngFor="let cat of fasionDesignes"  (click)="onSelectCategory(cat)">\n\n        <ion-item text-wrap no-lines>\n\n          <ion-chip class="chip-size" item-content>\n\n              <img class="icon" [class.selected-item]="isSelectedItem(cat)" src="{{cat.menIcon}}">\n\n            <ion-label>{{cat.key}}</ion-label>\n\n            <!-- <ion-icon name="heart" color="primary"></ion-icon> -->\n\n           \n\n          </ion-chip>\n\n        </ion-item>\n\n      </ion-list>\n\n  <!-- <div *ngFor="let cat of fasionDesignes"  (click)="onSelectCategory(cat)" [class.selected-item]="isSelectedItem(cat)">\n\n    <img class="cat" src="/assets/imgs/avatar.png">\n\n    <label>{{cat.key}}</label>\n\n  </div> -->\n\n<!-- </div> -->'/*ion-inline-end:"E:\ionic\egarments\egarments-client\eshop-client\src\components\custom-design\custom-fashion-category-selector\custom-fashion-category-selector.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_shared_shared__["a" /* SharedProvider */]])
    ], CustomFashionCategorySelectorComponent);
    return CustomFashionCategorySelectorComponent;
}());

//# sourceMappingURL=custom-fashion-category-selector.js.map

/***/ }),

/***/ 504:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomDressCategorySelectorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_shared_shared__ = __webpack_require__(78);
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
 * Generated class for the CustomDressCategorySelectorComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var CustomDressCategorySelectorComponent = /** @class */ (function () {
    function CustomDressCategorySelectorComponent(sharedService) {
        this.sharedService = sharedService;
        this.dressDesignes = [];
        this.selectedCategory = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    CustomDressCategorySelectorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sharedService.getdressCategories().subscribe(function (res) {
            console.log(res);
            _this.dressDesignes = res;
        });
    };
    CustomDressCategorySelectorComponent.prototype.onSelectCategory = function (selectedCategory) {
        this.selectedItem = selectedCategory;
        this.selectedCategory.emit(selectedCategory);
        // alert('selected category is '+ selectedCategory.key);
    };
    CustomDressCategorySelectorComponent.prototype.isSelectedItem = function (cat) {
        return this.selectedItem == cat ? true : false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], CustomDressCategorySelectorComponent.prototype, "selectedCategory", void 0);
    CustomDressCategorySelectorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'custom-dress-category-selector',template:/*ion-inline-start:"E:\ionic\egarments\egarments-client\eshop-client\src\components\custom-design\custom-dress-category-selector\custom-dress-category-selector.html"*/'<!-- Generated template for the CustomDressCategorySelectorComponent component -->\n\n<!-- <div class="flex"> -->\n\n    <ion-list class="chip-list" *ngFor="let cat of dressDesignes"  (click)="onSelectCategory(cat)" >\n\n        <ion-item text-wrap no-lines>\n\n          <ion-chip class="chip-size" item-content color="black">\n\n            <!-- <ion-icon name="heart" color="primary"></ion-icon> -->\n\n            <img [class.selected-item]="isSelectedItem(cat)" class="icon" src="{{cat.menIcon}}">\n\n            <ion-label>{{cat.key}}</ion-label>\n\n          </ion-chip>\n\n        </ion-item>\n\n      </ion-list>\n\n  <!-- <div *ngFor="let cat of dressDesignes" (click)="onSelectCategory(cat)" [class.selected-item]="isSelectedItem(cat)">\n\n    <label>{{cat.key}}</label>\n\n    <img  class="cat" src="/assets/imgs/avatar.png">\n\n    \n\n  </div>\n\n</div> -->'/*ion-inline-end:"E:\ionic\egarments\egarments-client\eshop-client\src\components\custom-design\custom-dress-category-selector\custom-dress-category-selector.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_shared_shared__["a" /* SharedProvider */]])
    ], CustomDressCategorySelectorComponent);
    return CustomDressCategorySelectorComponent;
}());

//# sourceMappingURL=custom-dress-category-selector.js.map

/***/ }),

/***/ 505:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomAssetsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
 * Generated class for the CustomAssetsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var CustomAssetsComponent = /** @class */ (function () {
    function CustomAssetsComponent() {
        this.allCustomAssets = [];
        this.onAssetsSelection = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.onCancel = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.seletedItem = '';
        this.errorMessage = '';
        console.log('Hello CustomAssetsComponent Component');
    }
    CustomAssetsComponent.prototype.onSelection = function (item) {
        this.seletedItem = item;
        // this.onAssetsSelection.emit(item);
    };
    CustomAssetsComponent.prototype.close = function () {
        this.onCancel.emit(false);
    };
    CustomAssetsComponent.prototype.onConfirm = function () {
        var _this = this;
        if (this.seletedItem) {
            this.onAssetsSelection.emit(this.seletedItem);
        }
        else {
            this.errorMessage = 'please select atleast one item';
            setTimeout(function () {
                _this.errorMessage = '';
            }, 2000);
        }
    };
    CustomAssetsComponent.prototype.ifSelected = function (item) {
        if (item == this.seletedItem) {
            return true;
        }
        else {
            return false;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], CustomAssetsComponent.prototype, "allCustomAssets", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], CustomAssetsComponent.prototype, "onAssetsSelection", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], CustomAssetsComponent.prototype, "onCancel", void 0);
    CustomAssetsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'custom-assets',template:/*ion-inline-start:"E:\ionic\egarments\egarments-client\eshop-client\src\components\custom-design\custom-assets\custom-assets.html"*/'<!-- Generated template for the CustomAssetsComponent component -->\n\n<div class="inner-popup">\n\n    <div class="assets">\n\n <img  class="images" [class.selected-item]="ifSelected(item)" *ngFor="let item of allCustomAssets" src="{{item.icon}}" (click)="onSelection(item)">\n\n</div>\n\n <p *ngIf="errorMessage && errorMessage!=\'\'">{{errorMessage}}</p>\n\n <div class="action">\n\n <button ion-button (click)="onConfirm()">OK</button>\n\n <button ion-button (click)="close()">cancel</button>\n\n</div>\n\n</div>\n\n\n\n'/*ion-inline-end:"E:\ionic\egarments\egarments-client\eshop-client\src\components\custom-design\custom-assets\custom-assets.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], CustomAssetsComponent);
    return CustomAssetsComponent;
}());

//# sourceMappingURL=custom-assets.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store_productstore_productstore__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the ProfuctsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ProductsProvider = /** @class */ (function () {
    function ProductsProvider(http, productStore) {
        this.http = http;
        this.productStore = productStore;
        console.log('Hello ProfuctsProvider Provider');
        this.getProducts();
    }
    ProductsProvider.prototype.getProducts = function (value) {
        var _this = this;
        return this.http.get('./../assets/products.json').
            pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (data) {
            console.log('profucts', data.products);
            _this.productStore.saveProducts(data.products);
            return data.products;
        }));
    };
    ProductsProvider.prototype.getSvgs = function (value) {
        var _this = this;
        // debugger
        return this.http.get('/assets/custom-design-products.json').
            // return this.http.get('/assets/custom-products.json').
            pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (data) {
            _this.productStore.seveCustomProducts(data.customProducts);
            return data.customProducts;
        }));
    };
    ProductsProvider.prototype.getDesigingAssets = function () {
        var _this = this;
        return this.http.get('/assets/custom-assets.json').
            pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (data) {
            // this.productStore.seveCustomAssets(data.customAssets);
            // return data.customAssets;
            _this.productStore.seveCustomAssets(data.customDesignProducts);
            return data.customDesignProducts;
        }));
    };
    ProductsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__store_productstore_productstore__["a" /* ProductStore */]])
    ], ProductsProvider);
    return ProductsProvider;
}());

//# sourceMappingURL=products.js.map

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileStore; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import {  } from 'mobx';

// import { Birthday } from '../models/birthday';  
// import { UUID } from 'angular2-uuid';
var ProfileStore = /** @class */ (function () {
    function ProfileStore() {
        var _this = this;
        Object(__WEBPACK_IMPORTED_MODULE_0_mobx__["b" /* autorun */])(function () {
            if (JSON.parse(localStorage.getItem('userData')) && JSON.parse(localStorage.getItem('userData')) != {}) {
                var obj = JSON.parse(localStorage.getItem('userData'));
                ;
                if (obj && obj.accountType) {
                    _this.userData = obj;
                }
                console.log(_this.userData);
            }
            else if (_this.userData) {
                window.localStorage.setItem('userData', JSON.stringify(_this.userData));
            }
        });
    }
    ProfileStore.prototype.clear = function () {
        this.userData = null;
        localStorage.removeItem('userData');
    };
    ProfileStore.prototype.setUserData = function (loginData) {
        this.userData = {
            userId: loginData.id,
            accessTokken: loginData.accessTokken,
            name: loginData.name,
            accountType: loginData.role,
            ProfileImage: (loginData.ProfileImage ? loginData.ProfileImage : 'assets/imgs/avatar.png'),
            contactNo: loginData.contactNo,
            address: loginData.address
        };
        window.localStorage.setItem('userData', JSON.stringify(this.userData));
        console.log(this.userData);
    };
    Object.defineProperty(ProfileStore.prototype, "currentUserData", {
        get: function () {
            return this.userData;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_mobx__["d" /* observable */],
        __metadata("design:type", Object)
    ], ProfileStore.prototype, "userData", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_mobx__["a" /* action */],
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ProfileStore.prototype, "clear", null);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_mobx__["a" /* action */],
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ProfileStore.prototype, "setUserData", null);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_mobx__["c" /* computed */],
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], ProfileStore.prototype, "currentUserData", null);
    ProfileStore = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ProfileStore);
    return ProfileStore;
}());

//# sourceMappingURL=profileStore.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store_profilestore_profileStore__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store_orders_orderstore__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the SharedProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var SharedProvider = /** @class */ (function () {
    function SharedProvider(http, profileStore, adminOrdersStore) {
        this.http = http;
        this.profileStore = profileStore;
        this.adminOrdersStore = adminOrdersStore;
        console.log('Hello SharedProvider Provider');
    }
    SharedProvider.prototype.clearStores = function () {
        // this.profileStore.clear();
        // this.adminOrdersStore.clear();
    };
    SharedProvider.prototype.getFashionCategories = function () {
        return this.http.get('./../assets/custom-fashion-categories.json').
            pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function (data) {
            console.log('fashion', data);
            return data.fashionCategories;
        }));
    };
    SharedProvider.prototype.getdressCategories = function () {
        return this.http.get('./../assets/dress-category.json').
            pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function (data) {
            console.log('profucts', data);
            return data.dressCategories;
        }));
    };
    SharedProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__store_profilestore_profileStore__["a" /* ProfileStore */],
            __WEBPACK_IMPORTED_MODULE_3__store_orders_orderstore__["a" /* OrderStore */]])
    ], SharedProvider);
    return SharedProvider;
}());

//# sourceMappingURL=shared.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__men_men__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_products_products__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store_productstore_productstore__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CategoriesPage = /** @class */ (function () {
    function CategoriesPage(navCtrl, productService, navParams, productStore) {
        this.navCtrl = navCtrl;
        this.productService = productService;
        this.navParams = navParams;
        this.productStore = productStore;
    }
    CategoriesPage.prototype.ionViewDidLoad = function () {
        this.getProducts();
        console.log('ionViewDidLoad CategoriesPage');
    };
    CategoriesPage.prototype.goToProductsPage = function (category) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__men_men__["a" /* MenPage */], { 'Category': category });
        // this.navCtrl.push(MenPage);
    };
    CategoriesPage.prototype.getProducts = function () {
        // this.productService.getProducts().then(res => {
        //   // this.productStore.saveProducts(res);
        // })
    };
    CategoriesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-categories',template:/*ion-inline-start:"E:\ionic\egarments\egarments-client\eshop-client\src\pages\buyer\categories\categories.html"*/'<!--\n\n  Generated template for the CategoriesPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>E Garments</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <div class="card-background-page">\n\n    <ion-card class="card-categories" (click)="goToProductsPage(\'Stylish Trends\')">\n\n      <img src="assets/design-assets/men-category.png" />\n\n      <div class="card-title">Stylish Trends</div>\n\n      <div class="card-subtitle">41 Listings</div>\n\n    </ion-card>\n\n\n\n    <ion-card class="card-categories"  (click)="goToProductsPage(\'Seasonal\')">\n\n      <img src="assets/design-assets/women-category.png" />\n\n      <div class="card-title">Seasonal</div>\n\n      <div class="card-subtitle">64 Listings</div>\n\n    </ion-card>\n\n\n\n    <ion-card class="card-categories" (click)="goToProductsPage(\'Most Rated\')">\n\n      <img src="assets/design-assets/cat-4.png" />\n\n      <div class="card-title">Most Rated</div>\n\n      <div class="card-subtitle">72 Listings</div>\n\n    </ion-card>\n\n\n\n    <ion-card class="card-categories" (click)="goToProductsPage(\'New Arrivals\')">\n\n      <img src="assets/design-assets/cat-5.png" />\n\n      <div class="card-title">New Arrivals</div>\n\n      <div class="card-subtitle">72 Listings</div>\n\n    </ion-card>\n\n    <ion-card class="card-categories" (click)="goToProductsPage(\'Top Trending\')">\n\n      <img src="assets/design-assets/women-category.png" />\n\n      <div class="card-title">Top Trending</div>\n\n      <div class="card-subtitle">64 Listings</div>\n\n    </ion-card>\n\n\n\n    <ion-card class="card-categories" (click)="goToProductsPage(\'Functions\')">\n\n      <img src="assets/design-assets/cat-4.png" />\n\n      <div class="card-title">Functions</div>\n\n      <div class="card-subtitle">72 Listings</div>\n\n    </ion-card>\n\n\n\n    <ion-card class="card-categories" (click)="goToProductsPage(\'Party\')">\n\n      <img src="assets/design-assets/cat-5.png" />\n\n      <div class="card-title">Party</div>\n\n      <div class="card-subtitle">72 Listings</div>\n\n    </ion-card>\n\n    <ion-card class="card-categories" (click)="goToProductsPage(\'Marriage\')">\n\n      <img src="assets/design-assets/men-category.png" />\n\n      <div class="card-title">Marriage</div>\n\n      <div class="card-subtitle">41 Listings</div>\n\n    </ion-card>\n\n\n\n    <ion-card class="card-categories" (click)="goToProductsPage(\'Culture Dresses\')">\n\n      <img src="assets/design-assets/women-category.png" />\n\n      <div class="card-title">Culture Dresses</div>\n\n      <div class="card-subtitle">64 Listings</div>\n\n    </ion-card>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"E:\ionic\egarments\egarments-client\eshop-client\src\pages\buyer\categories\categories.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_products_products__["a" /* ProductsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__store_productstore_productstore__["a" /* ProductStore */]])
    ], CategoriesPage);
    return CategoriesPage;
}());

//# sourceMappingURL=categories.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomDesignHomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_custom_design_details_model__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store_productstore_productstore__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_products_products__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__store_orders_orderstore__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_html2canvas__ = __webpack_require__(451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_html2canvas___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_html2canvas__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { ScreenOrientation } from 'ionic-native';
// import {ScreenOrientation} from "@ionic-native/screen-orientation";





var CustomDesignHomePage = /** @class */ (function () {
    function CustomDesignHomePage(navCtrl, productStore, navParams, alertCtrl, productsProvider, orderStore) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.productStore = productStore;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.productsProvider = productsProvider;
        this.orderStore = orderStore;
        this.fashionCategory = '';
        this.dressCategory = '';
        this.color = "black";
        this.showAssets = false;
        this.dragableAssets = [];
        this.dragableBackAssets = [];
        this.inBounds = true;
        this.backInBounds = true;
        this.edge = {
            top: true,
            bottom: true,
            left: true,
            right: true
        };
        this.backEdge = {
            top: true,
            bottom: true,
            left: true,
            right: true
        };
        this.imageRotate = function (index, view) {
            if (view == 'front') {
                if (_this.dragableAssets[index].rotate >= 0 && _this.dragableAssets[index].rotate < 270) {
                    _this.dragableAssets[index].rotate = _this.dragableAssets[index].rotate + 90;
                }
                else {
                    _this.dragableAssets[index].rotate = 0;
                }
            }
            else if (view == 'back') {
                if (_this.dragableBackAssets[index].rotate >= 0 && _this.dragableBackAssets[index].rotate < 270) {
                    _this.dragableBackAssets[index].rotate = _this.dragableBackAssets[index].rotate + 90;
                }
                else {
                    _this.dragableBackAssets[index].rotate = 0;
                }
            }
        };
        this.customDesignSelectionModel = new __WEBPACK_IMPORTED_MODULE_2__model_custom_design_details_model__["a" /* CustomDesignSelectionModel */]();
    }
    CustomDesignHomePage.prototype.onEventLog = function (colorPicker, event) {
        console.log(colorPicker, event);
        this.customDesignSelectionModel.selectedColor = event;
    };
    CustomDesignHomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        // this.customAssets = [{icon:'/assets/imgs/pocket-icon.png'}, {icon:'/assets/imgs/avatar.png'}, {icon:'/assets/imgs/logo.png'}]
        // this.customAssets = ['/assets/imgs/pocket-icon.png', '/assets/imgs/avatar.png', '/assets/imgs/logo.png']
        // ScreenOrientation.lockOrientation('landscape')
        //====> for svg custom design
        // this.selectedProduct = this.navParams.get('data');
        // or image custom designs
        this.selectedProduct = this.orderStore.customDesignOrder.selectedItem;
        console.log('ionViewDidLoad CustomDesignPage');
        this.productsProvider.getDesigingAssets().subscribe(function (res) {
            debugger;
            _this.customAssets = res.slice();
            //   this.svgs= res;
            //   console.log(res)
        });
        screen.orientation.lock('landscape');
    };
    CustomDesignHomePage.prototype.ionViewDidLeave = function () {
        screen.orientation.lock('portrait');
        console.log('ionViewDidLeave CustomDesignPage');
    };
    CustomDesignHomePage.prototype.matchImage = function (side) {
        var _this = this;
        console.log(this.selectedProduct);
        var image = this.selectedProduct.images.find(function (x) { return x.color == _this.color && x.side == side; });
        if (image) {
            return image.img;
        }
        //  return image.img;
    };
    // onFashionCategorySelection(cat) {
    //   this.fashionCategory = cat;
    //   this.getSelectedDress();
    // }
    // onDressCategorySelection(cat) {
    //   this.dressCategory = cat;
    //   this.getSelectedDress();
    // }
    // getSelectedDress() {
    //   this.selectedProduct = this.productStore.getproductForCustomDesign(this.dressCategory, this.fashionCategory);
    //   console.log(this.selectedProduct);
    // }
    CustomDesignHomePage.prototype.selectColor = function (selectedColor) {
        this.color = selectedColor;
    };
    CustomDesignHomePage.prototype.onCustomAssetSelection = function (item) {
        if (item) {
            item.rotate = '';
            item.rotate = 0;
            item.isRotateIcon = false;
            this.showAssets = false;
            if (this.assetView == 'front') {
                this.dragableAssets.push(item);
            }
            else if (this.assetView == 'back') {
                this.dragableBackAssets.push(item);
            }
        }
    };
    CustomDesignHomePage.prototype.active = function (item) {
        this.selectedToResize = item;
    };
    CustomDesignHomePage.prototype.selectAssets = function (view) {
        this.showAssets = true;
        this.assetView = view;
    };
    CustomDesignHomePage.prototype.closePopup = function () {
        this.showAssets = false;
    };
    CustomDesignHomePage.prototype.setBadge = function (size) {
        this.selectedToResize.width = size;
    };
    CustomDesignHomePage.prototype.checkEdge = function (event) {
        this.edge = event;
        console.log('edge:', event);
    };
    CustomDesignHomePage.prototype.checkBackEdge = function (event) {
        this.backEdge = event;
        console.log('backEdge:', event);
    };
    CustomDesignHomePage.prototype.forgotpassword = function () {
        var alert = this.alertCtrl.create({
            title: 'Extra Instructions',
            inputs: [
                {
                    name: 'details',
                    placeholder: 'Enter Details',
                    type: 'text'
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'Cancel',
                    handler: function (data) {
                    }
                },
                {
                    cssClass: 'ok',
                    text: 'ok',
                    handler: function (data) {
                    }
                }
            ]
        });
        alert.present();
    };
    CustomDesignHomePage.prototype.downloadImage = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_6_html2canvas___default()(this.frontScreen.nativeElement, {
            useCORS: true,
            scale: 5,
            width: 300,
            height: 300
        }).then(function (canvas) {
            _this.frontCanvas.nativeElement.src = canvas.toDataURL();
            // document.getElementById('test').appendChild(canvas);
            // this.downloadLink.nativeElement.href = canvas.toDataURL('image/png');
            // this.downloadLink.nativeElement.download = 'marble-diagram.png';
            // this.downloadLink.nativeElement.click();
        });
        __WEBPACK_IMPORTED_MODULE_6_html2canvas___default()(this.backScreen.nativeElement, {
            useCORS: true,
            scale: 5,
            width: 300,
            height: 300
        }).then(function (canvas) {
            _this.backCanvas.nativeElement.src = canvas.toDataURL();
            // document.getElementById('test').appendChild(canvas);
            // this.downloadLink.nativeElement.href = canvas.toDataURL('image/png');
            // this.downloadLink.nativeElement.download = 'marble-diagram.png';
            // this.downloadLink.nativeElement.click();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('itemSlider'),
        __metadata("design:type", Object)
    ], CustomDesignHomePage.prototype, "itemSlider", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('frontScreen'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], CustomDesignHomePage.prototype, "frontScreen", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('backScreen'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], CustomDesignHomePage.prototype, "backScreen", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('frontCanvas'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], CustomDesignHomePage.prototype, "frontCanvas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('backCanvas'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], CustomDesignHomePage.prototype, "backCanvas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('downloadLink'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], CustomDesignHomePage.prototype, "downloadLink", void 0);
    CustomDesignHomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'custom-design',template:/*ion-inline-start:"E:\ionic\egarments\egarments-client\eshop-client\src\pages\buyer\customDesign\custom-design\custom-design-home.html"*/'<!--\n\n  Generated template for the CustomDesignPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Custom Design</ion-title>\n\n    <ion-buttons end>\n\n        \n\n      <button (click)="downloadImage()">\n\n        \n\n      <ion-icon style="font-size: 40px"  name="checkmark"></ion-icon>\n\n    </button>\n\n    \n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="main">\n\n  <!-- {{selectedProduct | json}} -->\n\n    <ion-icon name="create" (click)="forgotpassword()"></ion-icon>\n\n  <ion-grid class="grid" *ngIf="selectedProduct">\n\n    <ion-row>\n\n      <ion-col class="column" size="6" #frontScreen style="position:relative;">\n\n        <ion-icon style="float: left;" *ngIf="selectedProduct" name="albums" (click)="selectAssets(\'front\')">Front\n\n        </ion-icon>\n\n{{selectedProduct | json}}\n\n        <div style="width:300px;" class="drag-boundary"\n\n          [ngClass]="{ \'top-b\': !edge?.top, \'bottom-b\': !edge?.bottom, \'left-b\': !edge?.left, \'right-b\': !edge?.right }"\n\n          #myBounds>\n\n        <img  src ="{{matchImage(\'front\')}}">\n\n          <!-- <svg width="200px" height="200px" version="1.1" [attr.fill]="color" id="Layer_1"\n\n            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n\n            viewBox="0 0 626 645" style="fill:color;" xml:space="preserve">\n\n            <path class="test" [attr.d]="selectedProduct.menFront" />\n\n          </svg> -->\n\n\n\n        </div>\n\n       <!-- front  {{dragableAssets | json}} -->\n\n        <div *ngIf="dragableAssets && dragableAssets.length > 0"\n\n          style="position:absolute;left: 50%;top:50%;transform: translate(-50%, -50%);">\n\n          <div *ngFor="let asset of dragableAssets; let i = index;" style="display:grid; text-align: center;position: relative;" ngDraggable [bounds]="myBounds" [inBounds]="inBounds" (edge)="checkEdge($event)">\n\n            \n\n            <div style="display:grid; text-align: center;position: relative;" (mouseenter)="asset.isRotateIcon = true" (mouseleave)="asset.isRotateIcon = false" >\n\n              <ion-icon name="refresh" *ngIf="asset.isRotateIcon" class="refresher" (click)="imageRotate(i,\'front\')" style="color:red;"></ion-icon>\n\n            <img \n\n            [ngStyle]="{height:asset.width+\'px\',width:asset.width+\'px\'}"  [style.transform]="\'rotate(\' + (asset.rotate) + \'deg)\'" class="icons"\n\n            ion-long-press [interval]="400" (onPressing)="active(asset)"  \n\n             src="{{asset.icon}}">\n\n             </div>\n\n          </div>\n\n         \n\n        </div>\n\n        <!-- <custom-fashion-category-selector (selectedCategory)="onFashionCategorySelection($event)">\n\n        </custom-fashion-category-selector> -->\n\n      </ion-col>\n\n      <ion-col class="column" size="6" #backScreen style="position:relative;">\n\n        <ion-icon style="float: left;" *ngIf="selectedProduct" name="albums" (click)="selectAssets(\'back\')">Back\n\n        </ion-icon>\n\n\n\n        <!-- {{selectedProduct | json}} -->\n\n        <!-- <ion-icon name="color-palette"  [cpHeight]=\'auto\'  [style.color]="color" [cpPosition]="\'bottom\'" [(colorPicker)]="color" ></ion-icon> -->\n\n        <!-- <input  [value]="color" [style.background]="color" [cpPosition]="\'bottom\'" [(colorPicker)]="color" /> -->\n\n        <!-- <img [attr.fill]="color"   src="/assets/imgs/t-shirt.svg">  -->\n\n        <!-- <div  class="drag-boundary" #screen   [ngClass]="{ \'top-b\': !edge?.top, \'bottom-b\': !edge?.bottom, \'left-b\': !edge?.left, \'right-b\': !edge?.right }" #myBounds> -->\n\n        <!-- {{svgs.json}} -->\n\n\n\n        <div style="width:300px;" class="drag-boundary"\n\n          [ngClass]="{ \'top-b\': !backEdge?.top, \'bottom-b\': !backEdge?.bottom, \'left-b\': !backEdge?.left, \'right-b\': !backEdge?.right }"\n\n          #myBackBounds>\n\n          <img style="width:\'200px\'; height:\'200px\'"  src ="{{matchImage(\'back\')}}">\n\n\n\n          <!-- <svg width="200px" height="200px" version="1.1" [attr.fill]="color" id="Layer_1"\n\n            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n\n            viewBox="0 0 626 645" style="fill:color;" xml:space="preserve">\n\n            <path class="test" [attr.d]="selectedProduct.menBack" />\n\n          </svg> -->\n\n\n\n        </div>\n\n <!-- back {{dragableBackAssets | json}} -->\n\n        <div *ngIf="dragableBackAssets && dragableBackAssets.length > 0"\n\n            style="position:absolute;left: 50%;top:50%;transform: translate(-50%, -50%);">\n\n            <div  *ngFor="let a of dragableBackAssets; let i = index"    ngDraggable (backEdge)="checkBackEdge($event)"\n\n            [bounds]="myBackBounds" [inBounds]="backInBounds" >\n\n            <div style="display:grid; text-align: center;position: relative;" (mouseenter)="a.isRotateIcon = true" (mouseleave)="a.isRotateIcon = false" >\n\n              <ion-icon name="refresh" *ngIf="a.isRotateIcon" class="refresher" (click)="imageRotate(i,\'back\')" style="color:red;"></ion-icon>\n\n              <img \n\n              [ngStyle]="{height:a.width+\'px\',width:a.width+\'px\'}" [style.transform]="\'rotate(\' + (a.rotate) + \'deg)\'" class="icons"\n\n              ion-long-press [interval]="400" (onPressing)="active(a)"src="{{a.icon}}">\n\n            </div>\n\n              \n\n            </div>\n\n            \n\n          </div>\n\n\n\n        <!-- </div> -->\n\n\n\n\n\n        <!-- <input type="color" value="#0000ff">\n\n<img src="https://www.gstatic.com/webp/gallery3/1_webp_ll.png"> -->\n\n\n\n\n\n\n\n\n\n        <!-- <img *ngIf="selectedProduct" src="{{selectedProduct.images[0].url}}" /> -->\n\n\n\n        <!-- <button ion-button (click)="selectAssets()">asssets</button> -->\n\n      </ion-col>\n\n\n\n      <!-- <ion-col size="3">\n\n\n\n        <custom-dress-category-selector (selectedCategory)="onDressCategorySelection($event)">\n\n        </custom-dress-category-selector>\n\n      </ion-col> -->\n\n    </ion-row>\n\n  </ion-grid>\n\n  <ion-item *ngIf="selectedToResize">\n\n    <ion-range min="30" max="100" [(ngModel)]="selectedToResize.width" snaps="true" color="secondary"\n\n      (ionChange)="setBadge(selectedToResize.width)">\n\n      {{size}}</ion-range>\n\n  </ion-item>\n\n\n\n  <div class="popup" *ngIf="showAssets">\n\n    <custom-assets [allCustomAssets]="productStore.getCustomAssets" (onCancel)="closePopup()"\n\n      (onAssetsSelection)="onCustomAssetSelection($event)"></custom-assets>\n\n\n\n  </div>\n\n\n\n  <div class="flex" *ngIf="selectedProduct">\n\n    <!-- colors -->\n\n    <div class="color-selection" (click)="selectColor(color)" [style.background]="color"\n\n      *ngFor="let color of selectedProduct.colors"></div>\n\n  </div>\n\n  <div class="flex " *ngIf="selectedProduct">\n\n    <div class="size" *ngFor="let size of selectedProduct.sizes">{{size}}</div>\n\n  </div>\n\n\n\n\n\n  <button ion-button (click)="downloadImage()">save</button>\n\n  result\n\n  <div style="display: flex">\n\n    <img #frontCanvas style=" width:300px;\n\n  height:300px;">\n\n    <img #backCanvas style=" width:300px;\n\n  height:300px;">\n\n  </div>\n\n  <a #downloadLink></a>\n\n</ion-content>'/*ion-inline-end:"E:\ionic\egarments\egarments-client\eshop-client\src\pages\buyer\customDesign\custom-design\custom-design-home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__store_productstore_productstore__["a" /* ProductStore */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_products_products__["a" /* ProductsProvider */],
            __WEBPACK_IMPORTED_MODULE_5__store_orders_orderstore__["a" /* OrderStore */]])
    ], CustomDesignHomePage);
    return CustomDesignHomePage;
}());

//# sourceMappingURL=custom-design-home.js.map

/***/ })

},[310]);
//# sourceMappingURL=main.js.map