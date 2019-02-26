webpackJsonp([9],{

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store_productstore_productstore__ = __webpack_require__(82);
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
    ProductsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__store_productstore_productstore__["a" /* ProductStore */]])
    ], ProductsProvider);
    return ProductsProvider;
}());

//# sourceMappingURL=products.js.map

/***/ }),

/***/ 155:
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

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_products_products__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__product_details_product_details__ = __webpack_require__(157);
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

/***/ 157:
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

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__buyer_customDesign_custom_design_custom_design_home__ = __webpack_require__(91);
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

/***/ 191:
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
webpackEmptyAsyncContext.id = 191;

/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-product/add-product.module": [
		443,
		0
	],
	"../pages/admin/admindashboard/admindashboard.module": [
		444,
		8
	],
	"../pages/admin/order-details/order-details.module": [
		445,
		7
	],
	"../pages/buyer/categories/categories.module": [
		446,
		6
	],
	"../pages/buyer/customDesign/custom-design/custom-design-home.module": [
		448,
		5
	],
	"../pages/buyer/customDesign/design-canvas/design-canvas.module": [
		447,
		4
	],
	"../pages/buyer/men/men.module": [
		450,
		3
	],
	"../pages/buyer/product-details/product-details.module": [
		449,
		2
	],
	"../pages/membership/signup/signup.module": [
		451,
		1
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
webpackAsyncContext.id = 233;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store_orders_orderstore__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(33);
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

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_signup__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__buyer_categories_categories__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_membership_membership__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__model_login__ = __webpack_require__(435);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__admin_admindashboard_admindashboard__ = __webpack_require__(89);
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

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MembershipProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store_profilestore_profileStore__ = __webpack_require__(87);
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

/***/ 277:
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
            selector: 'page-design-canvas',template:/*ion-inline-start:"E:\ionic\egarments\egarments-client\eshop-client\src\pages\buyer\customDesign\design-canvas\design-canvas.html"*/'<!--\n\n  Generated template for the DesignCanvasPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>design-canvas</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"E:\ionic\egarments\egarments-client\eshop-client\src\pages\buyer\customDesign\design-canvas\design-canvas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], DesignCanvasPage);
    return DesignCanvasPage;
}());

//# sourceMappingURL=design-canvas.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(392);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_membership_login_login__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_buyer_categories_categories__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_membership_signup_signup__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_buyer_men_men__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_membership_membership__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_products_products__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common_http__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_orders_orders__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__store_orders_orderstore__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__store_productstore_productstore__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_buyer_product_details_product_details__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__store_profilestore_profileStore__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_buyer_customDesign_custom_design_custom_design_home__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_shared_shared__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_admin_admindashboard_admindashboard__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_admin_order_details_order_details__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_ngx_color_picker__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_buyer_customDesign_design_canvas_design_canvas__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__directives_dragable_dragable__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_ionic_long_press__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_angular2_draggable__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_custom_design_custom_fashion_category_selector_custom_fashion_category_selector__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_custom_design_custom_dress_category_selector_custom_dress_category_selector__ = __webpack_require__(441);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_custom_design_custom_assets_custom_assets__ = __webpack_require__(442);
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
                __WEBPACK_IMPORTED_MODULE_14__pages_buyer_product_details_product_details__["a" /* ProductDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_buyer_customDesign_custom_design_custom_design_home__["a" /* CustomDesignHomePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_admin_admindashboard_admindashboard__["a" /* AdmindashboardPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_admin_order_details_order_details__["a" /* OrderDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_buyer_customDesign_design_canvas_design_canvas__["a" /* DesignCanvasPage */],
                __WEBPACK_IMPORTED_MODULE_22__directives_dragable_dragable__["a" /* AbsoluteDragDirective */],
                __WEBPACK_IMPORTED_MODULE_25__components_custom_design_custom_fashion_category_selector_custom_fashion_category_selector__["a" /* CustomFashionCategorySelectorComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_custom_design_custom_dress_category_selector_custom_dress_category_selector__["a" /* CustomDressCategorySelectorComponent */],
                __WEBPACK_IMPORTED_MODULE_27__components_custom_design_custom_assets_custom_assets__["a" /* CustomAssetsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/add-product/add-product.module#AddProductPageModule', name: 'AddProductPage', segment: 'add-product', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/admin/admindashboard/admindashboard.module#AdmindashboardPageModule', name: 'AdmindashboardPage', segment: 'admindashboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/admin/order-details/order-details.module#OrderDetailsPageModule', name: 'OrderDetailsPage', segment: 'order-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/buyer/categories/categories.module#CategoriesPageModule', name: 'CategoriesPage', segment: 'categories', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/buyer/customDesign/design-canvas/design-canvas.module#DesignCanvasPageModule', name: 'DesignCanvasPage', segment: 'design-canvas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/buyer/customDesign/custom-design/custom-design-home.module#CustomDesignHomePageModule', name: 'CustomDesignHomePage', segment: 'custom-design-home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/buyer/product-details/product-details.module#ProductDetailsPageModule', name: 'ProductDetailsPage', segment: 'product-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/buyer/men/men.module#MenPageModule', name: 'MenPage', segment: 'men', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/membership/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_20_ngx_color_picker__["a" /* ColorPickerModule */],
                __WEBPACK_IMPORTED_MODULE_24_angular2_draggable__["a" /* AngularDraggableModule */],
                __WEBPACK_IMPORTED_MODULE_23_ionic_long_press__["a" /* LongPressModule */]
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
                __WEBPACK_IMPORTED_MODULE_21__pages_buyer_customDesign_design_canvas_design_canvas__["a" /* DesignCanvasPage */],
                __WEBPACK_IMPORTED_MODULE_25__components_custom_design_custom_fashion_category_selector_custom_fashion_category_selector__["a" /* CustomFashionCategorySelectorComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_custom_design_custom_dress_category_selector_custom_dress_category_selector__["a" /* CustomDressCategorySelectorComponent */],
                __WEBPACK_IMPORTED_MODULE_27__components_custom_design_custom_assets_custom_assets__["a" /* CustomAssetsComponent */]
            ],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_8__providers_membership_membership__["a" /* MembershipProvider */],
                __WEBPACK_IMPORTED_MODULE_9__providers_products_products__["a" /* ProductsProvider */],
                __WEBPACK_IMPORTED_MODULE_11__providers_orders_orders__["a" /* OrdersProvider */],
                __WEBPACK_IMPORTED_MODULE_12__store_orders_orderstore__["a" /* OrderStore */],
                __WEBPACK_IMPORTED_MODULE_15__store_profilestore_profileStore__["a" /* ProfileStore */],
                __WEBPACK_IMPORTED_MODULE_17__providers_shared_shared__["a" /* SharedProvider */],
                __WEBPACK_IMPORTED_MODULE_13__store_productstore_productstore__["a" /* ProductStore */]
                // ScreenOrientation
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 417:
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

/***/ 434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_membership_login_login__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_buyer_categories_categories__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_buyer_customDesign_custom_design_custom_design_home__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_shared_shared__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_admin_admindashboard_admindashboard__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__store_profilestore_profileStore__ = __webpack_require__(87);
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

/***/ 435:
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

/***/ 437:
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

/***/ 440:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomFashionCategorySelectorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_shared_shared__ = __webpack_require__(88);
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
            selector: 'custom-fashion-category-selector',template:/*ion-inline-start:"E:\ionic\egarments\egarments-client\eshop-client\src\components\custom-design\custom-fashion-category-selector\custom-fashion-category-selector.html"*/'<!-- Generated template for the CustomFashionCategorySelectorComponent component -->\n\n<!-- <div class="flex"> -->\n\n    <ion-list class="chip-list" *ngFor="let cat of fasionDesignes"  (click)="onSelectCategory(cat)" [class.selected-item]="isSelectedItem(cat)">\n\n        <ion-item text-wrap no-lines>\n\n          <ion-chip class="chip-size" item-content>\n\n            <ion-label>{{cat.key}}</ion-label>\n\n            <!-- <ion-icon name="heart" color="primary"></ion-icon> -->\n\n            <img class="icon" src="{{cat.menIcon}}">\n\n          </ion-chip>\n\n        </ion-item>\n\n      </ion-list>\n\n  <!-- <div *ngFor="let cat of fasionDesignes"  (click)="onSelectCategory(cat)" [class.selected-item]="isSelectedItem(cat)">\n\n    <img class="cat" src="/assets/imgs/avatar.png">\n\n    <label>{{cat.key}}</label>\n\n  </div> -->\n\n<!-- </div> -->'/*ion-inline-end:"E:\ionic\egarments\egarments-client\eshop-client\src\components\custom-design\custom-fashion-category-selector\custom-fashion-category-selector.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_shared_shared__["a" /* SharedProvider */]])
    ], CustomFashionCategorySelectorComponent);
    return CustomFashionCategorySelectorComponent;
}());

//# sourceMappingURL=custom-fashion-category-selector.js.map

/***/ }),

/***/ 441:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomDressCategorySelectorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_shared_shared__ = __webpack_require__(88);
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
            selector: 'custom-dress-category-selector',template:/*ion-inline-start:"E:\ionic\egarments\egarments-client\eshop-client\src\components\custom-design\custom-dress-category-selector\custom-dress-category-selector.html"*/'<!-- Generated template for the CustomDressCategorySelectorComponent component -->\n\n<!-- <div class="flex"> -->\n\n    <ion-list class="chip-list" *ngFor="let cat of dressDesignes"  (click)="onSelectCategory(cat)" [class.selected-item]="isSelectedItem(cat)">\n\n        <ion-item text-wrap no-lines>\n\n          <ion-chip class="chip-size" item-content color="black">\n\n            <!-- <ion-icon name="heart" color="primary"></ion-icon> -->\n\n            <img class="icon" src="{{cat.menIcon}}">\n\n            <ion-label>{{cat.key}}</ion-label>\n\n          </ion-chip>\n\n        </ion-item>\n\n      </ion-list>\n\n  <!-- <div *ngFor="let cat of dressDesignes" (click)="onSelectCategory(cat)" [class.selected-item]="isSelectedItem(cat)">\n\n    <label>{{cat.key}}</label>\n\n    <img  class="cat" src="/assets/imgs/avatar.png">\n\n    \n\n  </div>\n\n</div> -->'/*ion-inline-end:"E:\ionic\egarments\egarments-client\eshop-client\src\components\custom-design\custom-dress-category-selector\custom-dress-category-selector.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_shared_shared__["a" /* SharedProvider */]])
    ], CustomDressCategorySelectorComponent);
    return CustomDressCategorySelectorComponent;
}());

//# sourceMappingURL=custom-dress-category-selector.js.map

/***/ }),

/***/ 442:
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
            selector: 'custom-assets',template:/*ion-inline-start:"E:\ionic\egarments\egarments-client\eshop-client\src\components\custom-design\custom-assets\custom-assets.html"*/'<!-- Generated template for the CustomAssetsComponent component -->\n\n<div class="inner-popup">\n\n    <div class="assets">\n\n <img  class="images" [class.selected-item]="ifSelected(item)" *ngFor="let item of allCustomAssets" src="{{item}}" (click)="onSelection(item)">\n\n</div>\n\n <p *ngIf="errorMessage && errorMessage!=\'\'">{{errorMessage}}</p>\n\n <div class="action">\n\n <button ion-button (click)="onConfirm()">OK</button>\n\n <button ion-button (click)="close()">cancel</button>\n\n</div>\n\n</div>\n\n\n\n'/*ion-inline-end:"E:\ionic\egarments\egarments-client\eshop-client\src\components\custom-design\custom-assets\custom-assets.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], CustomAssetsComponent);
    return CustomAssetsComponent;
}());

//# sourceMappingURL=custom-assets.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderStore; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx__ = __webpack_require__(132);
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

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductStore; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mobx__ = __webpack_require__(132);
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
    };
    Object.defineProperty(ProductStore.prototype, "products", {
        get: function () {
            return this.allProducts;
        },
        enumerable: true,
        configurable: true
    });
    ProductStore.prototype.getproductForCustomDesign = function (dressCategory, fashionCategory) {
        var p = this.allProducts.find(function (x) { return x.dressCategory == dressCategory.key && x.fashionCategory == fashionCategory.key; });
        return p;
    };
    __decorate([
        __WEBPACK_IMPORTED_MODULE_2_mobx__["d" /* observable */],
        __metadata("design:type", Array)
    ], ProductStore.prototype, "allProducts", void 0);
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
    ProductStore = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ProductStore);
    return ProductStore;
}());

//# sourceMappingURL=productstore.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileStore; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx__ = __webpack_require__(132);
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

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store_profilestore_profileStore__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store_orders_orderstore__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__(33);
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
            console.log('profucts', data);
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

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdmindashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_orders_orders__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store_orders_orderstore__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__order_details_order_details__ = __webpack_require__(155);
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
    function AdmindashboardPage(navCtrl, ordersStore, navParams, orderService) {
        // this.productService.getVehicles().subscribe(res => {
        //   this.products = res
        this.navCtrl = navCtrl;
        this.ordersStore = ordersStore;
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__order_details_order_details__["a" /* OrderDetailsPage */]);
    };
    AdmindashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-admindashboard',template:/*ion-inline-start:"E:\ionic\egarments\egarments-client\eshop-client\src\pages\admin\admindashboard\admindashboard.html"*/'<!--\n\n  Generated template for the AdmindashboardPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar style="position:absolute">\n\n    <button ion-button menuToggle start>\n\n      <ion-icon name="menu"></ion-icon>\n\n  </button>\n\n \n\n    <ion-title>admindashboard</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="action1()">\n\n        <ion-icon name="more"></ion-icon>\n\n    </button>\n\n  </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n<!-- {{ordersStore.getOrders | json}} -->\n\n    <!-- <button (click)="filterOrders(\'pending\')"></button> -->\n\n  <ion-card (click)="productDetails()" *ngFor="let order of ordersStore.getOrders">\n\n          \n\n    <ion-item>\n\n      <ion-avatar item-start>\n\n        <img src="assets/imgs/logo.png">\n\n      </ion-avatar>\n\n      <h2>{{order.buyer.name}}</h2>\n\n      <p>{{order.orderDate}}</p>\n\n    </ion-item>\n\n  \n\n    <!-- <img src="img/advance-card-bttf.png"> -->\n\n  \n\n    <ion-card-content>\n\n     <p>{{order.status}}</p>\n\n     <h6>{{order.buyer.contactNo}}</h6>\n\n    </ion-card-content>\n\n\n\n    <ion-item>\n\n     \n\n     Total Price\n\n      <ion-badge item-end>{{order.totalPrice}}</ion-badge>\n\n    </ion-item>\n\n\n\n \n\n  \n\n    <ion-row>\n\n      <ion-col>\n\n        <button ion-button icon-start clear small>\n\n          <ion-icon name="thumbs-up"></ion-icon>\n\n          <div>12 Likes</div>\n\n        </button>\n\n      </ion-col>\n\n      <ion-col>\n\n        <button ion-button icon-start clear small>\n\n          <ion-icon name="text"></ion-icon>\n\n          <div>4 Comments</div>\n\n        </button>\n\n      </ion-col>\n\n      <ion-col center text-center>\n\n        <ion-note>\n\n          11h ago\n\n        </ion-note>\n\n      </ion-col>\n\n    </ion-row>\n\n  \n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\ionic\egarments\egarments-client\eshop-client\src\pages\admin\admindashboard\admindashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__store_orders_orderstore__["a" /* OrderStore */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_orders_orders__["a" /* OrdersProvider */]])
    ], AdmindashboardPage);
    return AdmindashboardPage;
}());

//# sourceMappingURL=admindashboard.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__men_men__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_products_products__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store_productstore_productstore__ = __webpack_require__(82);
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
    CategoriesPage.prototype.goToMensPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__men_men__["a" /* MenPage */]);
    };
    CategoriesPage.prototype.getProducts = function () {
        var _this = this;
        this.productService.getProducts().subscribe(function (res) {
            _this.productStore.saveProducts(res);
        });
    };
    CategoriesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-categories',template:/*ion-inline-start:"E:\ionic\egarments\egarments-client\eshop-client\src\pages\buyer\categories\categories.html"*/'<!--\n\n  Generated template for the CategoriesPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-header>\n\n  \n\n  <ion-navbar>\n\n      <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n    <ion-title>E Garments</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="card-background-page">\n\n\n\n  <ion-card  (click)="goToMensPage()">\n\n    <img src="assets/imgs/firstCategory.png"/>\n\n    <div class="card-title">Men</div>\n\n    <div class="card-subtitle">41 Listings</div>\n\n  </ion-card>\n\n\n\n  <ion-card>\n\n    <img src="assets/imgs/firstCategory.png"/>\n\n    <div class="card-title">Women</div>\n\n    <div class="card-subtitle">64 Listings</div>\n\n  </ion-card>\n\n\n\n  <ion-card>\n\n    <img src="assets/imgs/firstCategory.png"/>\n\n    <div class="card-title">Boys</div>\n\n    <div class="card-subtitle">72 Listings</div>\n\n  </ion-card>\n\n\n\n  <ion-card>\n\n    <img src="assets/imgs/firstCategory.png"/>\n\n    <div class="card-title">Girls</div>\n\n    <div class="card-subtitle">72 Listings</div>\n\n  </ion-card>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"E:\ionic\egarments\egarments-client\eshop-client\src\pages\buyer\categories\categories.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_products_products__["a" /* ProductsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__store_productstore_productstore__["a" /* ProductStore */]])
    ], CategoriesPage);
    return CategoriesPage;
}());

//# sourceMappingURL=categories.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomDesignHomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_custom_design_details_model__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store_productstore_productstore__ = __webpack_require__(82);
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
    function CustomDesignHomePage(navCtrl, productStore, navParams) {
        this.navCtrl = navCtrl;
        this.productStore = productStore;
        this.navParams = navParams;
        this.fashionCategory = '';
        this.dressCategory = '';
        this.color = "red";
        this.showAssets = false;
        this.dragableAssets = [];
        this.customDesignSelectionModel = new __WEBPACK_IMPORTED_MODULE_2__model_custom_design_details_model__["a" /* CustomDesignSelectionModel */]();
    }
    CustomDesignHomePage.prototype.onEventLog = function (colorPicker, event) {
        console.log(colorPicker, event);
        this.customDesignSelectionModel.selectedColor = event;
    };
    CustomDesignHomePage.prototype.ionViewDidLoad = function () {
        this.customAssets = ['/assets/imgs/pocket-icon.png', '/assets/imgs/avatar.png', '/assets/imgs/logo.png'];
        // ScreenOrientation.lockOrientation('landscape')
        screen.orientation.lock('landscape');
        console.log('ionViewDidLoad CustomDesignPage');
    };
    CustomDesignHomePage.prototype.ionViewDidLeave = function () {
        screen.orientation.lock('portrait');
        console.log('ionViewDidLeave CustomDesignPage');
    };
    CustomDesignHomePage.prototype.onFashionCategorySelection = function (cat) {
        this.fashionCategory = cat;
        this.getSelectedDress();
    };
    CustomDesignHomePage.prototype.onDressCategorySelection = function (cat) {
        this.dressCategory = cat;
        this.getSelectedDress();
    };
    CustomDesignHomePage.prototype.getSelectedDress = function () {
        this.selectedProduct = this.productStore.getproductForCustomDesign(this.dressCategory, this.fashionCategory);
        console.log(this.selectedProduct);
    };
    CustomDesignHomePage.prototype.onCustomAssetSelection = function (item) {
        debugger;
        if (item) {
            this.showAssets = false;
            this.dragableAssets.push(item);
        }
    };
    CustomDesignHomePage.prototype.active = function (item) {
        this.selectedToResize = item;
    };
    CustomDesignHomePage.prototype.selectAssets = function () {
        this.showAssets = true;
    };
    CustomDesignHomePage.prototype.closePopup = function () {
        this.showAssets = false;
    };
    CustomDesignHomePage.prototype.setBadge = function (size) {
        this.size = size;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('itemSlider'),
        __metadata("design:type", Object)
    ], CustomDesignHomePage.prototype, "itemSlider", void 0);
    CustomDesignHomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'custom-design',template:/*ion-inline-start:"E:\ionic\egarments\egarments-client\eshop-client\src\pages\buyer\customDesign\custom-design\custom-design-home.html"*/'<!--\n\n  Generated template for the CustomDesignPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>custom-design</ion-title>\n\n    <ion-buttons end>\n\n        <!-- <button > -->\n\n        <ion-icon name="checkmark"></ion-icon>\n\n      <!-- </button> -->\n\n      </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="main">\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col size="3">\n\n        <custom-fashion-category-selector (selectedCategory)="onFashionCategorySelection($event)">\n\n        </custom-fashion-category-selector>\n\n      </ion-col>\n\n      <ion-col size="6">\n\n\n\n        <!-- {{selectedProduct | json}} -->\n\n        <ion-icon name="color-palette" [cpHeight]=\'auto\' [style.color]="color" [cpPosition]="\'bottom\'"\n\n          [(colorPicker)]="color"></ion-icon> \n\n          &nbsp;\n\n          <img class="icons" (click)="selectAssets()" src="/assets/icon/assets-icon.png">\n\n        <!-- <input  [value]="color" [style.background]="color" [cpPosition]="\'bottom\'" [(colorPicker)]="color" /> -->\n\n        <!-- <img [attr.fill]="color"   src="/assets/imgs/t-shirt.svg">  -->\n\n        <div class="dress-sketch">\n\n          <svg version="1.1" [attr.fill]="color" id="Layer_1" xmlns="http://www.w3.org/2000/svg"\n\n            xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 626 645"\n\n            style="enable-background:color;" xml:space="preserve">\n\n            <path d="M236.8,9.5c1,0,2,0,3,0c6.1,12.1,14.8,22,25.2,30.6c16.9,13.9,36.2,20.5,58,16.6c28.4-5,47.1-23.1,60.8-47.2c1,0,2,0,3,0\n\n	c1.5,0.6,2.9,1.5,4.5,1.8c14.7,3.7,29.4,7.3,44.1,11.1c16.6,4.3,33.5,7.5,49.6,13.3C508.3,44,528,58,541.8,79.2\n\n	c23.7,36.4,47.3,72.8,70.9,109.2c3.5,5.4,7.1,10.6,10.9,16.3c-30.3,18.5-60.1,36.6-90.3,55.1c-17.5-26-34.6-51.6-51.8-77.1\n\n	c-0.4,0.1-0.9,0.2-1.3,0.3c0,2.4,0,4.9,0,7.3c0,146.4,0,292.9,0,439.3c0,2-0.3,4-0.4,5.9c-112,0-224,0-336,0\n\n	c-0.1-2.3-0.4-4.6-0.4-6.9c0-146.5,0-292.9,0-439.4c0-2.1,0-4.2,0-6.3c-0.4-0.1-0.8-0.2-1.2-0.3c-17.2,25.6-34.4,51.2-51.9,77.2\n\n	C60,241.2,30.1,223,0,204.7c1.9-3,3.5-5.5,5.1-8c24.9-38,50.1-75.7,74.5-114.1c15.8-24.9,38.1-40.9,65.6-49.1\n\n	c27.1-8.1,54.8-13.9,82.3-20.8C230.7,11.8,233.7,10.6,236.8,9.5z" />\n\n          </svg>\n\n        </div>\n\n        <img class="assets-icon" *ngFor="let asset of dragableAssets"\n\n          [ngStyle]="selectedToResize==asset ? {height:size+\'px\',width:size+\'px\'}:\'\'" class="icons" ion-long-press\n\n          [interval]="400" (onPressing)="active(asset)" ngDraggable src="{{asset}}">\n\n        <ion-item *ngIf="dragableAssets && dragableAssets.length>0">\n\n          <ion-range min="30" max="100" [(ngModel)]="size" snaps="true" color="secondary" (ionChange)="setBadge(size)">\n\n            {{size}}</ion-range>\n\n        </ion-item>\n\n        <!-- <div class="flex" *ngIf="selectedProduct">\n\n          colors\n\n          <div class="color-selection" [style.background]="color" *ngFor="let color of selectedProduct.colors"></div>\n\n        </div>\n\n        <img *ngIf="selectedProduct" src="{{selectedProduct.images[0].url}}" />\n\n        <div class="flex " *ngIf="selectedProduct">\n\n          <div class="size" *ngFor="let size of selectedProduct.sizes">{{size}}</div>\n\n        </div> -->\n\n        <ion-item>\n\n          <ion-input type=\'text\' placeholder="Extra Instructions...."></ion-input>\n\n        </ion-item>\n\n        <!-- <button ion-button>save</button> -->\n\n        <!-- <button ion-button (click)="selectAssets()">asssets</button> -->\n\n      </ion-col>\n\n\n\n      <ion-col size="3">\n\n\n\n        <custom-dress-category-selector (selectedCategory)="onDressCategorySelection($event)">\n\n        </custom-dress-category-selector>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n  <div class="popup" *ngIf="showAssets">\n\n    <custom-assets [allCustomAssets]="customAssets" (onCancel)="closePopup()"\n\n      (onAssetsSelection)="onCustomAssetSelection($event)"></custom-assets>\n\n\n\n  </div>\n\n\n\n</ion-content>'/*ion-inline-end:"E:\ionic\egarments\egarments-client\eshop-client\src\pages\buyer\customDesign\custom-design\custom-design-home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__store_productstore_productstore__["a" /* ProductStore */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], CustomDesignHomePage);
    return CustomDesignHomePage;
}());

//# sourceMappingURL=custom-design-home.js.map

/***/ })

},[278]);
//# sourceMappingURL=main.js.map