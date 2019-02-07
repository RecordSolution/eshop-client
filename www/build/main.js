webpackJsonp([8],{

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderStore; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx__ = __webpack_require__(232);
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


var OrderStore = /** @class */ (function () {
    function OrderStore() {
        this.myOrders = [];
        this.filteredOrders = [];
        this.filter = '';
    }
    OrderStore.prototype.clear = function () {
        this.myOrders = [];
        this.filter = '';
        this.filteredOrders = [];
    };
    OrderStore.prototype.setOrders = function (orders) {
        this.myOrders = orders;
        if (this.filter && this.filter != '') {
            this.filterOrders(this.filter);
        }
        else {
            this.filteredOrders = orders;
        }
    };
    OrderStore.prototype.filterOrders = function (status) {
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

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
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

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_products_products__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__product_details_product_details__ = __webpack_require__(153);
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
    function MenPage(navCtrl, navParams, productService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.productService = productService;
        this.productService.getProducts().subscribe(function (res) {
            _this.products = res;
        });
    }
    MenPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MenPage');
    };
    MenPage.prototype.showDetails = function (product) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__product_details_product_details__["a" /* ProductDetailsPage */], { 'data': product });
    };
    MenPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-men',template:/*ion-inline-start:"E:\ionic\egarments\egarments-client\eshop-client\src\pages\buyer\men\men.html"*/'<!--\n\n  Generated template for the MenPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>men</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content>\n\n<ion-card *ngFor="let product of products">\n\n\n\n  <ion-item>\n\n    <!-- <ion-avatar item-start>\n\n      <img src="assets/imgs/firstCategory.png">\n\n    </ion-avatar> -->\n\n    <h2>{{product.name}}</h2>\n\n    <p>{{product.description}}</p>\n\n  </ion-item>\n\n\n\n  <img src="assets/imgs/firstCategory.png">\n\n\n\n  <ion-card-content>\n\n    <p>Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.</p>\n\n  </ion-card-content>\n\n\n\n  <ion-row>\n\n    <ion-col>\n\n      <button ion-button icon-start clear small>\n\n        <ion-icon name="thumbs-up"></ion-icon>\n\n        <div>12 Likes</div>\n\n      </button>\n\n    </ion-col>\n\n    <ion-col>\n\n      <button ion-button icon-start (click)="showDetails(product)">\n\n        BUY\n\n        <!-- <ion-icon name="text"></ion-icon>\n\n        <div>4 Comments</div> -->\n\n      </button>\n\n    </ion-col>\n\n    <!-- <ion-col center text-center>\n\n      <ion-note>\n\n        11h ago\n\n      </ion-note>\n\n    </ion-col> -->\n\n  </ion-row>\n\n\n\n</ion-card>\n\n</ion-content>'/*ion-inline-end:"E:\ionic\egarments\egarments-client\eshop-client\src\pages\buyer\men\men.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_products_products__["a" /* ProductsProvider */]])
    ], MenPage);
    return MenPage;
}());

//# sourceMappingURL=men.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
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
 * Generated class for the ProductDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProductDetailsPage = /** @class */ (function () {
    function ProductDetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.quantity = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        // this.details = this.navParams.get('data');
    }
    ProductDetailsPage.prototype.ionViewDidLoad = function () {
        this.details = this.navParams.get('data');
        // console.log('ionViewDidLoad ProductDetailsPage');
    };
    ProductDetailsPage.prototype.getQuantity = function (count) {
        this.number = count;
        console.log(count);
    };
    ProductDetailsPage.prototype.onChange = function () {
        var orderDetails = this.number;
        localStorage.setItem('OrderDetails', JSON.stringify(orderDetails));
    };
    ProductDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-product-details',template:/*ion-inline-start:"E:\ionic\egarments\egarments-client\eshop-client\src\pages\buyer\product-details\product-details.html"*/'<!--\n\n  Generated template for the ProductDetailsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>product-details</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n    <ion-card *ngIf="details">\n\n\n\n        <ion-item>\n\n          <!-- <ion-avatar item-start>\n\n            <img src="assets/imgs/firstCategory.png">\n\n          </ion-avatar> -->\n\n          <h2>{{details.name}}</h2>\n\n          <p>{{details.description}}</p>\n\n        </ion-item>\n\n      \n\n        \n\n        <div>\n\n            <ion-slides>\n\n                <ion-slide>\n\n                    <img src="assets/imgs/firstCategory.png">\n\n                </ion-slide>\n\n                <ion-slide>\n\n                    <img src="assets/imgs/firstCategory.png">\n\n                </ion-slide>\n\n                <ion-slide>\n\n                    <img src="assets/imgs/firstCategory.png">\n\n                </ion-slide>\n\n              </ion-slides>\n\n      </div>\n\n        <ion-card-content>\n\n          <p>Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.</p>\n\n        </ion-card-content>\n\n      \n\n        <ion-row>\n\n          <!-- <ion-col>\n\n            <button ion-button icon-start clear small>\n\n              <ion-icon name="thumbs-up"></ion-icon>\n\n              <p>Select Quantity</p>\n\n            </button>\n\n          </ion-col> -->\n\n          <ion-col>\n\n              <ion-item>\n\n                  <ion-label>Quantity</ion-label>\n\n                  <ion-select [(ngModel)]="number">\n\n                      <ion-option *ngFor="let count of quantity" [value]="count" (ionChange)="getQuantity(count)">{{count}}</ion-option>\n\n                    </ion-select>\n\n                </ion-item>\n\n                <ion-item>\n\n                <ion-label>Color</ion-label>\n\n                <ion-select [(ngModel)]="color">\n\n                    <ion-option *ngFor="let color of details.colors" [value]="color">{{color}} <div style=" width: 10px; height:10px" [ngStyle]="{background:\'color\'}"></div></ion-option>\n\n                  </ion-select>\n\n                <!-- <ion-select [(ngModel)]="number">\n\n                  <ion-option *ngFor="let count of quantity" value="count"></ion-option>\n\n                </ion-select> -->\n\n              </ion-item>\n\n\n\n              <ion-item>\n\n                  <ion-label>Avaliable Sizes</ion-label>\n\n                  <ion-select [(ngModel)]="size">\n\n                      <ion-option *ngFor="let size of details.sizes" [value]="size">{{size}} <div style=" width: 10px; height:10px" [ngStyle]="{background:\'color\'}"></div></ion-option>\n\n                    </ion-select>\n\n                  <!-- <ion-select [(ngModel)]="number">\n\n                    <ion-option *ngFor="let count of quantity" value="count"></ion-option>\n\n                  </ion-select> -->\n\n                </ion-item>\n\n\n\n                <ion-item>\n\n                    <ion-label>Address</ion-label>\n\n                    <ion-toggle [(ngModel)]="address" checked="true"></ion-toggle>\n\n                  </ion-item>\n\n\n\n                  <ion-item>\n\n                      <ion-label>Different Address</ion-label>\n\n                      <ion-toggle [(ngModel)]="differentAddress"></ion-toggle>\n\n                    </ion-item>\n\n                \n\n                    <textarea placeholder="Enter Change Address Here"class="addressArea"name="different-address" ></textarea>\n\n      \n\n                    \n\n\n\n                    <ion-label>Price  <span float-right>$250</span></ion-label>\n\n\n\n                    <button ion-button block color="secondary" (click)="onChange()">Buy</button>\n\n                  \n\n                  </ion-col>\n\n\n\n                \n\n        </ion-row>\n\n                  \n\n           \n\n      </ion-card>\n\n\n\n    \n\n\n\n \n\n</ion-content>\n\n'/*ion-inline-end:"E:\ionic\egarments\egarments-client\eshop-client\src\pages\buyer\product-details\product-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ProductDetailsPage);
    return ProductDetailsPage;
}());

//# sourceMappingURL=product-details.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DesignCanvasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
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
 * Generated class for the DesignCanvasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DesignCanvasPage = /** @class */ (function () {
    function DesignCanvasPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DesignCanvasPage.prototype.ionViewDidLoad = function () {
    };
    DesignCanvasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-design-canvas',template:/*ion-inline-start:"E:\ionic\egarments\egarments-client\eshop-client\src\pages\buyer\customDesign\design-canvas\design-canvas.html"*/'<!--\n  Generated template for the DesignCanvasPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>design-canvas</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n\n</ion-content>\n'/*ion-inline-end:"E:\ionic\egarments\egarments-client\eshop-client\src\pages\buyer\customDesign\design-canvas\design-canvas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], DesignCanvasPage);
    return DesignCanvasPage;
}());

//# sourceMappingURL=design-canvas.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__buyer_customDesign_custom_design_custom_design_home__ = __webpack_require__(88);
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
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__buyer_customDesign_custom_design_custom_design_home__["a" /* CustomDesignHomePage */]);
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"E:\ionic\egarments\egarments-client\eshop-client\src\pages\membership\signup\signup.html"*/'<!--\n  Generated template for the SignupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar align-title="center">\n    <ion-title >Sign Up</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-item>\n      <ion-label floating>Username</ion-label>\n      <ion-input type="text" value=""></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Email</ion-label>\n      <ion-input type="Email" value=""></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Password</ion-label>\n      <ion-input type="password" value=""></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Re-type Password</ion-label>\n      <ion-input type="password" value=""></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Contact Info</ion-label>\n      <ion-input type="number" value=""></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Address</ion-label>\n      <ion-textarea type="text" value=""></ion-textarea>\n    </ion-item>\n\n  </ion-list>\n\n  <div padding>\n    <button ion-button color="primary" (click)="goBuyerHomePage()" block>Sign Up</button>\n  </div>\n\n</ion-content>\n<!-- <ion-header>\n\n  <ion-navbar>\n    <ion-title>signup</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="main">\n\n    <ion-input class="input" type="text" placeholder="Username"> </ion-input>\n    <ion-input class="input" type="text" placeholder="Email"> </ion-input>\n    <ion-input class="input" type="text" placeholder="Password"></ion-input> \n    <ion-input class="input" type="text" placeholder="Re-type-Password"></ion-input>\n    <ion-input class="input" type="text" placeholder="Contact"></ion-input>\n    <ion-input class="inputaddress"  id="address"type="text" placeholder="Address"> </ion-input>\n   <button>Sign Up</button>\n   <ion-label>Already Registered?</ion-label>\n\n</ion-content> -->\n'/*ion-inline-end:"E:\ionic\egarments\egarments-client\eshop-client\src\pages\membership\signup\signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 188:
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
webpackEmptyAsyncContext.id = 188;

/***/ }),

/***/ 230:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/admin/admindashboard/admindashboard.module": [
		438,
		7
	],
	"../pages/admin/order-details/order-details.module": [
		443,
		6
	],
	"../pages/buyer/categories/categories.module": [
		439,
		5
	],
	"../pages/buyer/customDesign/custom-design/custom-design-home.module": [
		440,
		4
	],
	"../pages/buyer/customDesign/design-canvas/design-canvas.module": [
		441,
		3
	],
	"../pages/buyer/men/men.module": [
		445,
		2
	],
	"../pages/buyer/product-details/product-details.module": [
		442,
		1
	],
	"../pages/membership/signup/signup.module": [
		444,
		0
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
webpackAsyncContext.id = 230;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store_orders_orderstore__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(41);
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
        return this.http.get('./../assets/json/orders.json').pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (data) {
            console.log('Orders', data.orders);
            //  this.ordersStore.setOrders(data.orders);
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

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__(41);
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
    function ProductsProvider(http) {
        this.http = http;
        console.log('Hello ProfuctsProvider Provider');
        this.getProducts();
    }
    ProductsProvider.prototype.getProducts = function (value) {
        return this.http.get('./../assets/json/products.json').
            pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (data) {
            console.log('profucts', data.products);
            return data.products;
        }));
    };
    ProductsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ProductsProvider);
    return ProductsProvider;
}());

//# sourceMappingURL=products.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_signup__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__buyer_categories_categories__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_membership_membership__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__model_login__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__admin_admindashboard_admindashboard__ = __webpack_require__(86);
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
            selector: 'page-login',template:/*ion-inline-start:"E:\ionic\egarments\egarments-client\eshop-client\src\pages\membership\login\login.html"*/'<!-- <ion-header>\n  <ion-navbar>\n    <ion-title>LogIn</ion-title>\n  </ion-navbar>\n</ion-header> -->\n\n\n<ion-content>\n<div class="logo">\n  <img class="logo-img" src="assets/imgs/appLogo.png">\n</div>\n  <ion-list>\n\n    <ion-item>\n      <ion-label floating>Username</ion-label>\n      <ion-input [(ngModel)]="userCredentials.email" type="text" value=""></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Password</ion-label>\n      <ion-input [(ngModel)]="userCredentials.password" type="password" value=""></ion-input>\n    </ion-item>\n\n  </ion-list>\n<a (click)="forgotpassword()">Forgot Password ?</a>\n\n  <div padding>\n    <button ion-button color="primary" (click)="logIn()" block>Sign In</button>\n  </div>\n  <div padding>\n    <button ion-button color="primary"  (click)="signup()" block>Sign Up</button>\n  </div>\n<!-- <p (click)="signup()" >signup</p> -->\n</ion-content>\n'/*ion-inline-end:"E:\ionic\egarments\egarments-client\eshop-client\src\pages\membership\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_membership_membership__["a" /* MembershipProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MembershipProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store_profilestore_profileStore__ = __webpack_require__(85);
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
        return this.http.get('./../assets/json/membership.json').pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (res) {
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

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store_profilestore_profileStore__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store_orders_orderstore__ = __webpack_require__(129);
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

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(391);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_membership_login_login__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_buyer_categories_categories__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_membership_signup_signup__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_buyer_men_men__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_membership_membership__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_products_products__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common_http__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_orders_orders__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__store_orders_orderstore__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_buyer_product_details_product_details__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__store_profilestore_profileStore__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_buyer_customDesign_custom_design_custom_design_home__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_shared_shared__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_admin_admindashboard_admindashboard__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_admin_order_details_order_details__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ngx_color_picker__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_buyer_customDesign_design_canvas_design_canvas__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__directives_dragable_dragable__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ionic_long_press__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_angular2_draggable__ = __webpack_require__(435);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_custom_fashion_category_selector_custom_fashion_category_selector__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_custom_dress_category_selector_custom_dress_category_selector__ = __webpack_require__(437);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// import { SplashScreen } from '@ionic-native/splash-screen';
// import { StatusBar } from '@ionic-native/status-bar';


















// import { ScreenOrientation } from "@ionic-native/screen-orientation";





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
                __WEBPACK_IMPORTED_MODULE_13__pages_buyer_product_details_product_details__["a" /* ProductDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_buyer_customDesign_custom_design_custom_design_home__["a" /* CustomDesignHomePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_admin_admindashboard_admindashboard__["a" /* AdmindashboardPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_admin_order_details_order_details__["a" /* OrderDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_buyer_customDesign_design_canvas_design_canvas__["a" /* DesignCanvasPage */],
                __WEBPACK_IMPORTED_MODULE_21__directives_dragable_dragable__["a" /* AbsoluteDragDirective */],
                __WEBPACK_IMPORTED_MODULE_24__components_custom_fashion_category_selector_custom_fashion_category_selector__["a" /* CustomFashionCategorySelectorComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_custom_dress_category_selector_custom_dress_category_selector__["a" /* CustomDressCategorySelectorComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/admin/admindashboard/admindashboard.module#AdmindashboardPageModule', name: 'AdmindashboardPage', segment: 'admindashboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/buyer/categories/categories.module#CategoriesPageModule', name: 'CategoriesPage', segment: 'categories', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/buyer/customDesign/custom-design/custom-design-home.module#CustomDesignHomePageModule', name: 'CustomDesignHomePage', segment: 'custom-design-home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/buyer/customDesign/design-canvas/design-canvas.module#DesignCanvasPageModule', name: 'DesignCanvasPage', segment: 'design-canvas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/buyer/product-details/product-details.module#ProductDetailsPageModule', name: 'ProductDetailsPage', segment: 'product-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/admin/order-details/order-details.module#OrderDetailsPageModule', name: 'OrderDetailsPage', segment: 'order-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/membership/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/buyer/men/men.module#MenPageModule', name: 'MenPage', segment: 'men', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_19_ngx_color_picker__["a" /* ColorPickerModule */],
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
                __WEBPACK_IMPORTED_MODULE_13__pages_buyer_product_details_product_details__["a" /* ProductDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_buyer_customDesign_custom_design_custom_design_home__["a" /* CustomDesignHomePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_admin_admindashboard_admindashboard__["a" /* AdmindashboardPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_admin_order_details_order_details__["a" /* OrderDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_buyer_customDesign_design_canvas_design_canvas__["a" /* DesignCanvasPage */],
                __WEBPACK_IMPORTED_MODULE_24__components_custom_fashion_category_selector_custom_fashion_category_selector__["a" /* CustomFashionCategorySelectorComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_custom_dress_category_selector_custom_dress_category_selector__["a" /* CustomDressCategorySelectorComponent */]
            ],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_8__providers_membership_membership__["a" /* MembershipProvider */],
                __WEBPACK_IMPORTED_MODULE_9__providers_products_products__["a" /* ProductsProvider */],
                __WEBPACK_IMPORTED_MODULE_11__providers_orders_orders__["a" /* OrdersProvider */],
                __WEBPACK_IMPORTED_MODULE_12__store_orders_orderstore__["a" /* OrderStore */],
                __WEBPACK_IMPORTED_MODULE_14__store_profilestore_profileStore__["a" /* ProfileStore */],
                __WEBPACK_IMPORTED_MODULE_16__providers_shared_shared__["a" /* SharedProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 413:
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

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_membership_login_login__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_buyer_categories_categories__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_buyer_customDesign_custom_design_custom_design_home__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_shared_shared__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_admin_admindashboard_admindashboard__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__store_profilestore_profileStore__ = __webpack_require__(85);
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
                        _this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_admin_admindashboard_admindashboard__["a" /* AdmindashboardPage */];
                    }
                }
                else {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_2__pages_membership_login_login__["a" /* LoginPage */];
                }
            }
            else {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_2__pages_membership_login_login__["a" /* LoginPage */];
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
            this.nav.push(__WEBPACK_IMPORTED_MODULE_4__pages_buyer_customDesign_custom_design_custom_design_home__["a" /* CustomDesignHomePage */]);
        }
        else if (pageName == 'adminOrders') {
            this.nav.push(__WEBPACK_IMPORTED_MODULE_6__pages_admin_admindashboard_admindashboard__["a" /* AdmindashboardPage */]);
        }
        else if (pageName == 'adminProducts') {
            this.nav.push(__WEBPACK_IMPORTED_MODULE_6__pages_admin_admindashboard_admindashboard__["a" /* AdmindashboardPage */]);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\ionic\egarments\egarments-client\eshop-client\src\app\app.html"*/'<ion-menu [content]="content"  type="push" side="left" class="my-sidemenu">\n\n        <ion-header>\n\n          <ion-toolbar>\n\n            <ion-title>Menu</ion-title>\n\n          </ion-toolbar>\n\n        </ion-header>\n\n      \n\n        <ion-content>\n\n          <ion-list>\n\n            <button *ngIf="profileStore.currentUserData && profileStore.currentUserData.accountType==\'buyer\'" menuClose ion-item  (click)="openPage(\'home\')" >\n\n                Home\n\n            </button>\n\n            <button *ngIf="profileStore.currentUserData &&  profileStore.currentUserData.accountType==\'buyer\'" menuClose ion-item  (click)="openPage(\'customDesign\')" >\n\n              Custom Design\n\n          </button>\n\n\n\n\n\n          <button *ngIf="profileStore.currentUserData && profileStore.currentUserData.accountType==\'admin\'" menuClose ion-item  (click)="openPage(\'adminOrders\')" >\n\n            Orders\n\n        </button>\n\n        <button *ngIf="profileStore.currentUserData && profileStore.currentUserData.accountType==\'admin\'" menuClose ion-item  (click)="openPage(\'adminProducts\')" >\n\n          Products\n\n      </button>\n\n\n\n\n\n          <button  menuClose ion-item  (click)="openPage(\'logout\')" >\n\n            Logout\n\n        </button>\n\n          </ion-list>\n\n        </ion-content>\n\n      \n\n      </ion-menu>\n\n      \n\n      <!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n      <!-- <ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>  -->\n\n      \n\n      \n\n      <ion-nav [root]="rootPage" #content swipeBackEnabled="false" class="my-navbar"></ion-nav>\n\n      \n\n      \n\n      \n\n      \n\n      <!-- <ion-menu [content]="content">\n\n        <ion-header>\n\n          <ion-toolbar>\n\n            <ion-title>Recipes App</ion-title>\n\n          </ion-toolbar>\n\n        </ion-header>\n\n        \n\n        <ion-content>\n\n          <ion-list>\n\n            <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n              {{p.title}}\n\n            </button>\n\n          </ion-list>\n\n        </ion-content>\n\n      </ion-menu> -->'/*ion-inline-end:"E:\ionic\egarments\egarments-client\eshop-client\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_7__store_profilestore_profileStore__["a" /* ProfileStore */],
            __WEBPACK_IMPORTED_MODULE_5__providers_shared_shared__["a" /* SharedProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 431:
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

/***/ 433:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbsoluteDragDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
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

/***/ 436:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomFashionCategorySelectorComponent; });
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
 * Generated class for the CustomFashionCategorySelectorComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var CustomFashionCategorySelectorComponent = /** @class */ (function () {
    function CustomFashionCategorySelectorComponent() {
        console.log('Hello CustomFashionCategorySelectorComponent Component');
        this.text = 'Hello World';
    }
    CustomFashionCategorySelectorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'custom-fashion-category-selector',template:/*ion-inline-start:"E:\ionic\egarments\egarments-client\eshop-client\src\components\custom-fashion-category-selector\custom-fashion-category-selector.html"*/'<!-- Generated template for the CustomFashionCategorySelectorComponent component -->\n<div class="flex">\n  <img class="icons" src="/assets/imgs/avatar.png">\n  <img class="icons" src="/assets/imgs/avatar.png">\n  <img class="icons" src="/assets/imgs/logo.png">\n</div>\n'/*ion-inline-end:"E:\ionic\egarments\egarments-client\eshop-client\src\components\custom-fashion-category-selector\custom-fashion-category-selector.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], CustomFashionCategorySelectorComponent);
    return CustomFashionCategorySelectorComponent;
}());

//# sourceMappingURL=custom-fashion-category-selector.js.map

/***/ }),

/***/ 437:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomDressCategorySelectorComponent; });
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
 * Generated class for the CustomDressCategorySelectorComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var CustomDressCategorySelectorComponent = /** @class */ (function () {
    function CustomDressCategorySelectorComponent() {
        console.log('Hello CustomDressCategorySelectorComponent Component');
        this.text = 'Hello World';
    }
    CustomDressCategorySelectorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'custom-dress-category-selector',template:/*ion-inline-start:"E:\ionic\egarments\egarments-client\eshop-client\src\components\custom-dress-category-selector\custom-dress-category-selector.html"*/'<!-- Generated template for the CustomDressCategorySelectorComponent component -->\n<div class="flex">\n  <img class="icons" src="/assets/imgs/avatar.png">\n  <img class="icons" src="/assets/imgs/avatar.png">\n  <img class="icons" src="/assets/imgs/logo.png">\n</div>\n'/*ion-inline-end:"E:\ionic\egarments\egarments-client\eshop-client\src\components\custom-dress-category-selector\custom-dress-category-selector.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], CustomDressCategorySelectorComponent);
    return CustomDressCategorySelectorComponent;
}());

//# sourceMappingURL=custom-dress-category-selector.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileStore; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx__ = __webpack_require__(232);
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

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdmindashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_orders_orders__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__order_details_order_details__ = __webpack_require__(151);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { OrderStore } from '../../../store/orders/orderstore';

// import {} from '../../../store/orders/orderstore'; 
/**
 * Generated class for the AdmindashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AdmindashboardPage = /** @class */ (function () {
    function AdmindashboardPage(navCtrl, navParams, orderService) {
        // this.productService.getVehicles().subscribe(res => {
        //   this.products = res
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.orderService = orderService;
    }
    AdmindashboardPage.prototype.ionViewDidLoad = function () {
        // if(this.ordersStore.myOrders.length==0){
        var _this = this;
        this.orderService.getorders().subscribe(function (res) {
            // this.orders=res;
            console.log(_this.orders);
        });
        // }
    };
    AdmindashboardPage.prototype.filterOrders = function (status) {
        // this.ordersStore.filterOrders(status);
    };
    AdmindashboardPage.prototype.productDetails = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__order_details_order_details__["a" /* OrderDetailsPage */]);
    };
    AdmindashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-admindashboard',template:/*ion-inline-start:"E:\ionic\egarments\egarments-client\eshop-client\src\pages\admin\admindashboard\admindashboard.html"*/'<!--\n\n  Generated template for the AdmindashboardPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar style="position:absolute">\n\n    <button ion-button menuToggle start>\n\n      <ion-icon name="menu"></ion-icon>\n\n  </button>\n\n \n\n    <ion-title>admindashboard</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="action1()">\n\n        <ion-icon name="more"></ion-icon>\n\n    </button>\n\n  </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n<!-- {{ordersStore.getOrders | json}} -->\n\n    <!-- <button (click)="filterOrders(\'pending\')"></button> -->\n\n  <ion-card (click)="productDetails()" *ngFor="let order of ordersStore.getOrders">\n\n          \n\n    <ion-item>\n\n      <ion-avatar item-start>\n\n        <img src="assets/imgs/logo.png">\n\n      </ion-avatar>\n\n      <h2>{{order.buyer.name}}</h2>\n\n      <p>{{order.orderDate}}</p>\n\n    </ion-item>\n\n  \n\n    <!-- <img src="img/advance-card-bttf.png"> -->\n\n  \n\n    <ion-card-content>\n\n     <p>{{order.status}}</p>\n\n     <h6>{{order.buyer.contactNo}}</h6>\n\n    </ion-card-content>\n\n\n\n    <ion-item>\n\n     \n\n     Total Price\n\n      <ion-badge item-end>{{order.totalPrice}}</ion-badge>\n\n    </ion-item>\n\n\n\n \n\n  \n\n    <ion-row>\n\n      <ion-col>\n\n        <button ion-button icon-start clear small>\n\n          <ion-icon name="thumbs-up"></ion-icon>\n\n          <div>12 Likes</div>\n\n        </button>\n\n      </ion-col>\n\n      <ion-col>\n\n        <button ion-button icon-start clear small>\n\n          <ion-icon name="text"></ion-icon>\n\n          <div>4 Comments</div>\n\n        </button>\n\n      </ion-col>\n\n      <ion-col center text-center>\n\n        <ion-note>\n\n          11h ago\n\n        </ion-note>\n\n      </ion-col>\n\n    </ion-row>\n\n  \n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\ionic\egarments\egarments-client\eshop-client\src\pages\admin\admindashboard\admindashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_orders_orders__["a" /* OrdersProvider */]])
    ], AdmindashboardPage);
    return AdmindashboardPage;
}());

//# sourceMappingURL=admindashboard.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__men_men__ = __webpack_require__(152);
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
    function CategoriesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CategoriesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CategoriesPage');
    };
    CategoriesPage.prototype.goToMensPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__men_men__["a" /* MenPage */]);
    };
    CategoriesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-categories',template:/*ion-inline-start:"E:\ionic\egarments\egarments-client\eshop-client\src\pages\buyer\categories\categories.html"*/'<!--\n\n  Generated template for the CategoriesPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-header>\n\n  \n\n  <ion-navbar>\n\n      <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n    <ion-title>E Garments</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="card-background-page">\n\n\n\n  <ion-card  (click)="goToMensPage()">\n\n    <img src="assets/imgs/firstCategory.png"/>\n\n    <div class="card-title">Men</div>\n\n    <div class="card-subtitle">41 Listings</div>\n\n  </ion-card>\n\n\n\n  <ion-card>\n\n    <img src="assets/imgs/firstCategory.png"/>\n\n    <div class="card-title">Women</div>\n\n    <div class="card-subtitle">64 Listings</div>\n\n  </ion-card>\n\n\n\n  <ion-card>\n\n    <img src="assets/imgs/firstCategory.png"/>\n\n    <div class="card-title">Boys</div>\n\n    <div class="card-subtitle">72 Listings</div>\n\n  </ion-card>\n\n\n\n  <ion-card>\n\n    <img src="assets/imgs/firstCategory.png"/>\n\n    <div class="card-title">Girls</div>\n\n    <div class="card-subtitle">72 Listings</div>\n\n  </ion-card>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"E:\ionic\egarments\egarments-client\eshop-client\src\pages\buyer\categories\categories.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], CategoriesPage);
    return CategoriesPage;
}());

//# sourceMappingURL=categories.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomDesignHomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_custom_design_details_model__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__design_canvas_design_canvas__ = __webpack_require__(154);
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
    function CustomDesignHomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.color = "red";
        this.customDesignSelectionModel = new __WEBPACK_IMPORTED_MODULE_2__model_custom_design_details_model__["a" /* CustomDesignSelectionModel */]();
    }
    CustomDesignHomePage.prototype.onEventLog = function (colorPicker, event) {
        console.log(colorPicker, event);
        this.customDesignSelectionModel.selectedColor = event;
    };
    CustomDesignHomePage.prototype.ionViewDidLoad = function () {
        // ScreenOrientation.lockOrientation('landscape')
        screen.orientation.lock('landscape');
        console.log('ionViewDidLoad CustomDesignPage');
    };
    CustomDesignHomePage.prototype.ionViewDidLeave = function () {
        screen.orientation.lock('portrait');
        console.log('ionViewDidLeave CustomDesignPage');
    };
    CustomDesignHomePage.prototype.active = function () {
        // alert("stop")
        this.crossActive = true;
    };
    CustomDesignHomePage.prototype.setBadge = function (size) {
        this.size = size;
    };
    CustomDesignHomePage.prototype.next = function () {
        this.itemSlider.slideNext();
    };
    CustomDesignHomePage.prototype.getSize = function (size) {
        this.customDesignSelectionModel.size = size;
    };
    CustomDesignHomePage.prototype.selctedDress = function (imgurl) {
        this.customDesignSelectionModel.selectedDressType = imgurl;
    };
    CustomDesignHomePage.prototype.prev = function () {
        this.itemSlider.slidePrev();
    };
    CustomDesignHomePage.prototype.done = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__design_canvas_design_canvas__["a" /* DesignCanvasPage */], { 'data': this.customDesignSelectionModel });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('itemSlider'),
        __metadata("design:type", Object)
    ], CustomDesignHomePage.prototype, "itemSlider", void 0);
    CustomDesignHomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'custom-design',template:/*ion-inline-start:"E:\ionic\egarments\egarments-client\eshop-client\src\pages\buyer\customDesign\custom-design\custom-design-home.html"*/'<!--\n\n  Generated template for the CustomDesignPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>custom-design</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="main">\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col size="3">\n\n        <custom-fashion-category-selector></custom-fashion-category-selector>\n\n      </ion-col>\n\n      <ion-col size="6">\n\n        <input [value]="color" [style.background]="color" [cpPosition]="\'bottom\'" [(colorPicker)]="color" />\n\n\n\n        <svg class="result" [attr.fill]="color" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"\n\n          xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 373.5 322.5" style="enable-background:new 0 0 373.5 322.5;"\n\n          xml:space="preserve">\n\n          <style type="text/css">\n\n\n\n          </style>\n\n          <polygon id="XMLID_2_" class="st0" points="142.4,30.4 184.4,72 184.4,297.9 101.4,297.9 101.4,30.4 " />\n\n          <polygon id="XMLID_1_" class="st0" points="237.4,30.4 195.4,72 195.4,297.9 278.4,297.9 278.4,30.4 " />\n\n          <polygon id="XMLID_81_" class="st0" points="278.4,30.9 348.4,30.9 348.4,210.9 313.9,210.9 313.6,62.9 278.4,62.9 " />\n\n          <polygon id="XMLID_82_" class="st0" points="101.4,30.9 31.4,30.9 31.4,210.9 65.9,210.9 66.1,62.9 101.4,62.9 " />\n\n        </svg>\n\n        <img [ngStyle]="{height:size+\'px\',width:size+\'px\'}" class="icons" ion-long-press [interval]="400"  (onPressing)="active()" ngDraggable src="/assets/imgs/logo.png">\n\n        <ion-item  *ngIf="crossActive">\n\n        <ion-range min="50" max="200"  [(ngModel)]="size"  snaps="true" color="secondary" (ionChange)="setBadge(size)" >{{size}}</ion-range>\n\n       </ion-item>\n\n       {{size}}\n\n        <!-- <img src="http://placehold.it/75" dragable /> -->\n\n        <button ngDraggable ion-button>save</button>\n\n      </ion-col>\n\n      <ion-col size="3">\n\n        <custom-dress-category-selector></custom-dress-category-selector>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n</ion-content>'/*ion-inline-end:"E:\ionic\egarments\egarments-client\eshop-client\src\pages\buyer\customDesign\custom-design\custom-design-home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], CustomDesignHomePage);
    return CustomDesignHomePage;
}());

//# sourceMappingURL=custom-design-home.js.map

/***/ })

},[277]);
//# sourceMappingURL=main.js.map