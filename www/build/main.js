webpackJsonp([5],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileStore; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx__ = __webpack_require__(284);
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


// import { Birthday } from '../models/birthday';  
// import { UUID } from 'angular2-uuid';
var ProfileStore = /** @class */ (function () {
    function ProfileStore() {
        var _this = this;
        this.userData = {};
        Object(__WEBPACK_IMPORTED_MODULE_0_mobx__["b" /* autorun */])(function () {
            if (localStorage.userData) {
                _this.userData = localStorage.userData;
                console.log(_this.userData);
            }
            localStorage.userData = _this.userData;
        });
    }
    ProfileStore.prototype.clear = function () {
        this.userData = {};
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
        localStorage.userData = JSON.stringify(this.userData);
        console.log(this.userData);
    };
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
    ProfileStore = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ProfileStore);
    return ProfileStore;
}());

//# sourceMappingURL=profileStore.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_products_products__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__product_details_product_details__ = __webpack_require__(105);
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
        this.productService.getVehicles().subscribe(function (res) {
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
            selector: 'page-men',template:/*ion-inline-start:"E:\Programmingwork\ionicongoing\e-shopping\eshop-client\src\pages\buyer\men\men.html"*/'<!--\n\n  Generated template for the MenPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>men</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content>\n\n<ion-card *ngFor="let product of products">\n\n\n\n  <ion-item>\n\n    <!-- <ion-avatar item-start>\n\n      <img src="assets/imgs/firstCategory.png">\n\n    </ion-avatar> -->\n\n    <h2>{{product.name}}</h2>\n\n    <p>{{product.description}}</p>\n\n  </ion-item>\n\n\n\n  <img src="assets/imgs/firstCategory.png">\n\n\n\n  <ion-card-content>\n\n    <p>Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.</p>\n\n  </ion-card-content>\n\n\n\n  <ion-row>\n\n    <ion-col>\n\n      <button ion-button icon-start clear small>\n\n        <ion-icon name="thumbs-up"></ion-icon>\n\n        <div>12 Likes</div>\n\n      </button>\n\n    </ion-col>\n\n    <ion-col>\n\n      <button ion-button icon-start (click)="showDetails(product)">\n\n        BUY\n\n        <!-- <ion-icon name="text"></ion-icon>\n\n        <div>4 Comments</div> -->\n\n      </button>\n\n    </ion-col>\n\n    <!-- <ion-col center text-center>\n\n      <ion-note>\n\n        11h ago\n\n      </ion-note>\n\n    </ion-col> -->\n\n  </ion-row>\n\n\n\n</ion-card>\n\n</ion-content>'/*ion-inline-end:"E:\Programmingwork\ionicongoing\e-shopping\eshop-client\src\pages\buyer\men\men.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_products_products__["a" /* ProductsProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_products_products__["a" /* ProductsProvider */]) === "function" && _c || Object])
    ], MenPage);
    return MenPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=men.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDetailsPage; });
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
 * Generated class for the ProductDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProductDetailsPage = /** @class */ (function () {
    function ProductDetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.number = 0;
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
    ProductDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-product-details',template:/*ion-inline-start:"E:\Programmingwork\ionicongoing\e-shopping\eshop-client\src\pages\buyer\product-details\product-details.html"*/'<!--\n\n  Generated template for the ProductDetailsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>product-details</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n    <ion-card *ngIf="details">\n\n\n\n        <ion-item>\n\n          <!-- <ion-avatar item-start>\n\n            <img src="assets/imgs/firstCategory.png">\n\n          </ion-avatar> -->\n\n          <h2>{{details.name}}</h2>\n\n          <p>{{details.description}}</p>\n\n        </ion-item>\n\n      \n\n        \n\n        <div>\n\n            <ion-slides>\n\n                <ion-slide>\n\n                    <img src="assets/imgs/firstCategory.png">\n\n                </ion-slide>\n\n                <ion-slide>\n\n                    <img src="assets/imgs/firstCategory.png">\n\n                </ion-slide>\n\n                <ion-slide>\n\n                    <img src="assets/imgs/firstCategory.png">\n\n                </ion-slide>\n\n              </ion-slides>\n\n      </div>\n\n        <ion-card-content>\n\n          <p>Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.</p>\n\n        </ion-card-content>\n\n      \n\n        <ion-row>\n\n          <!-- <ion-col>\n\n            <button ion-button icon-start clear small>\n\n              <ion-icon name="thumbs-up"></ion-icon>\n\n              <p>Select Quantity</p>\n\n            </button>\n\n          </ion-col> -->\n\n          <ion-col>\n\n              <ion-item>\n\n                  <ion-label>Quantity</ion-label>\n\n                  <ion-select [(ngModel)]="number">\n\n                      <ion-option *ngFor="let count of quantity" [value]="count">{{count}}</ion-option>\n\n                    </ion-select>\n\n                  <!-- <ion-select [(ngModel)]="number">\n\n                    <ion-option *ngFor="let count of quantity" value="count"></ion-option>\n\n                  </ion-select> -->\n\n                </ion-item>\n\n                <ion-item>\n\n                <ion-label>Color</ion-label>\n\n                <ion-select [(ngModel)]="color">\n\n                    <ion-option *ngFor="let color of details.colors" [value]="color">{{color}} <div style=" width: 10px; height:10px" [ngStyle]="{background:\'color\'}"></div></ion-option>\n\n                  </ion-select>\n\n                <!-- <ion-select [(ngModel)]="number">\n\n                  <ion-option *ngFor="let count of quantity" value="count"></ion-option>\n\n                </ion-select> -->\n\n              </ion-item>\n\n          </ion-col>\n\n        </ion-row>\n\n      \n\n      </ion-card>\n\n\n\n\n\n \n\n</ion-content>\n\n'/*ion-inline-end:"E:\Programmingwork\ionicongoing\e-shopping\eshop-client\src\pages\buyer\product-details\product-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ProductDetailsPage);
    return ProductDetailsPage;
}());

//# sourceMappingURL=product-details.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomDesignPage; });
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
 * Generated class for the CustomDesignPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CustomDesignPage = /** @class */ (function () {
    function CustomDesignPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CustomDesignPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CustomDesignPage');
    };
    CustomDesignPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-custom-design',template:/*ion-inline-start:"E:\Programmingwork\ionicongoing\e-shopping\eshop-client\src\pages\buyer\custom-design\custom-design.html"*/'<!--\n\n  Generated template for the CustomDesignPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n      <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n    <ion-title>custom-design</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"E:\Programmingwork\ionicongoing\e-shopping\eshop-client\src\pages\buyer\custom-design\custom-design.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], CustomDesignPage);
    return CustomDesignPage;
}());

//# sourceMappingURL=custom-design.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__buyer_categories_categories__ = __webpack_require__(41);
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__buyer_categories_categories__["a" /* CategoriesPage */]);
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"E:\Programmingwork\ionicongoing\e-shopping\eshop-client\src\pages\membership\signup\signup.html"*/'<!--\n\n  Generated template for the SignupPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar align-title="center">\n\n    <ion-title >Sign Up</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n  <ion-list>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Username</ion-label>\n\n      <ion-input type="text" value=""></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Email</ion-label>\n\n      <ion-input type="Email" value=""></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label floating>Password</ion-label>\n\n      <ion-input type="password" value=""></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label floating>Re-type Password</ion-label>\n\n      <ion-input type="password" value=""></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label floating>Contact Info</ion-label>\n\n      <ion-input type="number" value=""></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label floating>Address</ion-label>\n\n      <ion-textarea type="text" value=""></ion-textarea>\n\n    </ion-item>\n\n\n\n  </ion-list>\n\n\n\n  <div padding>\n\n    <button ion-button color="primary" (click)="goBuyerHomePage()" block>Sign Up</button>\n\n  </div>\n\n\n\n</ion-content>\n\n<!-- <ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>signup</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="main">\n\n\n\n    <ion-input class="input" type="text" placeholder="Username"> </ion-input>\n\n    <ion-input class="input" type="text" placeholder="Email"> </ion-input>\n\n    <ion-input class="input" type="text" placeholder="Password"></ion-input> \n\n    <ion-input class="input" type="text" placeholder="Re-type-Password"></ion-input>\n\n    <ion-input class="input" type="text" placeholder="Contact"></ion-input>\n\n    <ion-input class="inputaddress"  id="address"type="text" placeholder="Address"> </ion-input>\n\n   <button>Sign Up</button>\n\n   <ion-label>Already Registered?</ion-label>\n\n\n\n</ion-content> -->\n\n'/*ion-inline-end:"E:\Programmingwork\ionicongoing\e-shopping\eshop-client\src\pages\membership\signup\signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 118:
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
webpackEmptyAsyncContext.id = 118;

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/admin/admindashboard/admindashboard.module": [
		292,
		7
	],
	"../pages/buyer/categories/categories.module": [
		287,
		12
	],
	"../pages/buyer/custom-design/custom-design.module": [
		288,
		11
	],
	"../pages/buyer/men/men.module": [
		289,
		10
	],
	"../pages/buyer/product-details/product-details.module": [
		290,
		9
	],
	"../pages/membership/signup/signup.module": [
		291,
		8
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
webpackAsyncContext.id = 159;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
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
        this.getVehicles();
    }
    ProductsProvider.prototype.getVehicles = function (value) {
        return this.http.get('./../assets/json/products.json').
            map(function (data) {
            console.log('profucts', data.products);
            return data.products;
            // return vehicles.filter(v =>
            //   v.name.toLowerCase().includes(value.toLowerCase())
            // );
        });
    };
    ProductsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ProductsProvider);
    return ProductsProvider;
}());

//# sourceMappingURL=products.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_signup__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__buyer_categories_categories__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_membership_membership__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__model_login__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__admin_admindashboard_admindashboard__ = __webpack_require__(295);
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
            selector: 'page-login',template:/*ion-inline-start:"E:\Programmingwork\ionicongoing\e-shopping\eshop-client\src\pages\membership\login\login.html"*/'<!-- <ion-header>\n\n  <ion-navbar>\n\n    <ion-title>LogIn</ion-title>\n\n  </ion-navbar>\n\n</ion-header> -->\n\n\n\n\n\n<ion-content>\n\n<div class="logo">\n\n  <img class="logo-img" src="assets/imgs/appLogo.png">\n\n</div>\n\n  <ion-list>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Username</ion-label>\n\n      <ion-input [(ngModel)]="userCredentials.email" type="text" value=""></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Password</ion-label>\n\n      <ion-input [(ngModel)]="userCredentials.password" type="password" value=""></ion-input>\n\n    </ion-item>\n\n\n\n  </ion-list>\n\n<a (click)="forgotpassword()">Forgot Password ?</a>\n\n\n\n  <div padding>\n\n    <button ion-button color="primary" (click)="logIn()" block>Sign In</button>\n\n  </div>\n\n  <div padding>\n\n    <button ion-button color="primary"  (click)="signup()" block>Sign Up</button>\n\n  </div>\n\n<!-- <p (click)="signup()" >signup</p> -->\n\n</ion-content>\n\n'/*ion-inline-end:"E:\Programmingwork\ionicongoing\e-shopping\eshop-client\src\pages\membership\login\login.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__providers_membership_membership__["a" /* MembershipProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_membership_membership__["a" /* MembershipProvider */]) === "function" && _c || Object])
    ], LoginPage);
    return LoginPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MembershipProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store_profileStore__ = __webpack_require__(103);
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
        return this.http.get('./../assets/json/membership.json').map(function (res) {
            var ifUser = res.user.find(function (x) { return x.email == userCredentials.email && x.password == userCredentials.password; });
            if (ifUser) {
                _this.profileStore.setUserData(ifUser);
                return ifUser;
            }
            else {
                return false;
            }
        });
    };
    MembershipProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__store_profileStore__["a" /* ProfileStore */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__store_profileStore__["a" /* ProfileStore */]) === "function" && _b || Object])
    ], MembershipProvider);
    return MembershipProvider;
    var _a, _b;
}());

//# sourceMappingURL=membership.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store_profileStore__ = __webpack_require__(103);
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
    function SharedProvider(http, profileStore) {
        this.http = http;
        this.profileStore = profileStore;
        console.log('Hello SharedProvider Provider');
    }
    SharedProvider.prototype.clearStores = function () {
        this.profileStore.clear();
    };
    SharedProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__store_profileStore__["a" /* ProfileStore */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__store_profileStore__["a" /* ProfileStore */]) === "function" && _b || Object])
    ], SharedProvider);
    return SharedProvider;
    var _a, _b;
}());

//# sourceMappingURL=shared.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(229);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_membership_login_login__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_buyer_categories_categories__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_membership_signup_signup__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_buyer_men_men__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_membership_membership__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_products_products__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_common_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_orders_orders__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__store_orders_orderstore__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_buyer_product_details_product_details__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__store_profileStore__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_buyer_custom_design_custom_design__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_shared_shared__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_admin_admindashboard_admindashboard__ = __webpack_require__(295);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_membership_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_membership_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_buyer_categories_categories__["a" /* CategoriesPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_buyer_men_men__["a" /* MenPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_buyer_product_details_product_details__["a" /* ProductDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_buyer_custom_design_custom_design__["a" /* CustomDesignPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_admin_admindashboard_admindashboard__["a" /* AdmindashboardPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/buyer/categories/categories.module#CategoriesPageModule', name: 'CategoriesPage', segment: 'categories', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/buyer/custom-design/custom-design.module#CustomDesignPageModule', name: 'CustomDesignPage', segment: 'custom-design', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/buyer/men/men.module#MenPageModule', name: 'MenPage', segment: 'men', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/buyer/product-details/product-details.module#ProductDetailsPageModule', name: 'ProductDetailsPage', segment: 'product-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/membership/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/admin/admindashboard/admindashboard.module#AdmindashboardPageModule', name: 'AdmindashboardPage', segment: 'admindashboard', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_12__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_membership_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_membership_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_buyer_categories_categories__["a" /* CategoriesPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_buyer_men_men__["a" /* MenPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_buyer_product_details_product_details__["a" /* ProductDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_buyer_custom_design_custom_design__["a" /* CustomDesignPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_admin_admindashboard_admindashboard__["a" /* AdmindashboardPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_10__providers_membership_membership__["a" /* MembershipProvider */],
                __WEBPACK_IMPORTED_MODULE_11__providers_products_products__["a" /* ProductsProvider */],
                __WEBPACK_IMPORTED_MODULE_13__providers_orders_orders__["a" /* OrdersProvider */],
                __WEBPACK_IMPORTED_MODULE_14__store_orders_orderstore__["a" /* OrderStore */],
                __WEBPACK_IMPORTED_MODULE_16__store_profileStore__["a" /* ProfileStore */],
                __WEBPACK_IMPORTED_MODULE_18__providers_shared_shared__["a" /* SharedProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_membership_login_login__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_buyer_categories_categories__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_buyer_custom_design_custom_design__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_shared_shared__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_admin_admindashboard_admindashboard__ = __webpack_require__(295);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, sharedService) {
        var _this = this;
        this.sharedService = sharedService;
        platform.ready().then(function () {
            if (localStorage.getItem('userData')) {
                var data = JSON.parse(localStorage.getItem('userData'));
                if (data && data.accessTokken) {
                    // this.navCtrl.setRoot(CategoriesPage);
                    if (data.accountType == 'buyer') {
                        _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_buyer_categories_categories__["a" /* CategoriesPage */];
                    }
                    else {
                        _this.rootPage = __WEBPACK_IMPORTED_MODULE_8__pages_admin_admindashboard_admindashboard__["a" /* AdmindashboardPage */];
                    }
                }
                else {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_membership_login_login__["a" /* LoginPage */];
                }
            }
            else {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_membership_login_login__["a" /* LoginPage */];
            }
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_5__pages_buyer_categories_categories__["a" /* CategoriesPage */] },
            { title: 'Custom Design', component: __WEBPACK_IMPORTED_MODULE_6__pages_buyer_custom_design_custom_design__["a" /* CustomDesignPage */] },
            { title: 'LogOut', component: __WEBPACK_IMPORTED_MODULE_4__pages_membership_login_login__["a" /* LoginPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
        if (page.title == 'LogOut') {
            localStorage.clear();
            this.sharedService.clearStores();
        }
        this.activePage = page;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]) === "function" && _a || Object)
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\Programmingwork\ionicongoing\e-shopping\eshop-client\src\app\app.html"*/'<ion-menu [content]="content"  type="push" side="left" class="my-sidemenu">\n\n        <ion-header>\n\n          <ion-toolbar>\n\n            <ion-title>Menu</ion-title>\n\n          </ion-toolbar>\n\n        </ion-header>\n\n      \n\n        <ion-content>\n\n          <ion-list>\n\n            <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)" >\n\n                <!-- <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)" [class.active]="checkActivePage(p)"> -->\n\n                    \n\n              <!-- <ion-icon name="{{p.icon}}" item-left></ion-icon> -->\n\n              {{p.title}}\n\n            </button>\n\n          </ion-list>\n\n        </ion-content>\n\n      \n\n      </ion-menu>\n\n      \n\n      <!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n      <!-- <ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>  -->\n\n      \n\n      \n\n      <ion-nav [root]="rootPage" #content swipeBackEnabled="false" class="my-navbar"></ion-nav>\n\n      \n\n      \n\n      \n\n      \n\n      <!-- <ion-menu [content]="content">\n\n        <ion-header>\n\n          <ion-toolbar>\n\n            <ion-title>Recipes App</ion-title>\n\n          </ion-toolbar>\n\n        </ion-header>\n\n        \n\n        <ion-content>\n\n          <ion-list>\n\n            <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n              {{p.title}}\n\n            </button>\n\n          </ion-list>\n\n        </ion-content>\n\n      </ion-menu> -->'/*ion-inline-end:"E:\Programmingwork\ionicongoing\e-shopping\eshop-client\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7__providers_shared_shared__["a" /* SharedProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__providers_shared_shared__["a" /* SharedProvider */]) === "function" && _e || Object])
    ], MyApp);
    return MyApp;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 286:
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

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderStore; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx_angular__ = __webpack_require__(297);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { Orders } from '../../../shared/models/orders';
var OrderStore = /** @class */ (function () {
    function OrderStore() {
        this.myOrders = [];
        this.filteredOrders = [];
        this.filter = '';
    }
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
        __WEBPACK_IMPORTED_MODULE_0_mobx_angular__["c" /* observable */],
        __metadata("design:type", Array)
    ], OrderStore.prototype, "myOrders", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_mobx_angular__["c" /* observable */],
        __metadata("design:type", Array)
    ], OrderStore.prototype, "filteredOrders", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_mobx_angular__["c" /* observable */],
        __metadata("design:type", String)
    ], OrderStore.prototype, "filter", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_mobx_angular__["a" /* action */],
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], OrderStore.prototype, "setOrders", null);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_mobx_angular__["a" /* action */],
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], OrderStore.prototype, "filterOrders", null);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_mobx_angular__["b" /* computed */],
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], OrderStore.prototype, "getOrders", null);
    return OrderStore;
}());

//# sourceMappingURL=orderstore.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdmindashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_orders_orders__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store_orders_orderstore__ = __webpack_require__(294);
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
        Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-admindashboard',template:/*ion-inline-start:"E:\Programmingwork\ionicongoing\e-shopping\eshop-client\src\pages\admin\admindashboard\admindashboard.html"*/'<!--\n\n  Generated template for the AdmindashboardPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n   \n\n    <ion-title>admindashboard</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n<!-- {{ordersStore.getOrders | json}} -->\n\n    <button (click)="filterOrders(\'pending\')"></button>\n\n  <ion-card *ngFor="let order of ordersStore.getOrders">\n\n          \n\n    <ion-item>\n\n      <ion-avatar item-start>\n\n        <img src="assets/imgs/logo.png">\n\n      </ion-avatar>\n\n      <h2>{{order.buyer.name}}</h2>\n\n      <p>{{order.orderDate}}</p>\n\n    </ion-item>\n\n  \n\n    <!-- <img src="img/advance-card-bttf.png"> -->\n\n  \n\n    <ion-card-content>\n\n     <p>{{order.status}}</p>\n\n     <h6>{{order.buyer.contactNo}}</h6>\n\n    </ion-card-content>\n\n\n\n    <ion-item>\n\n      <!-- <ion-icon name="cash" item-start></ion-icon> -->\n\n     Total Price\n\n      <ion-badge item-end>{{order.totalPrice}}</ion-badge>\n\n    </ion-item>\n\n\n\n \n\n<!--   \n\n    <ion-row>\n\n      <ion-col>\n\n        <button ion-button icon-start clear small>\n\n          <ion-icon name="thumbs-up"></ion-icon>\n\n          <div>12 Likes</div>\n\n        </button>\n\n      </ion-col>\n\n      <ion-col>\n\n        <button ion-button icon-start clear small>\n\n          <ion-icon name="text"></ion-icon>\n\n          <div>4 Comments</div>\n\n        </button>\n\n      </ion-col>\n\n      <ion-col center text-center>\n\n        <ion-note>\n\n          11h ago\n\n        </ion-note>\n\n      </ion-col>\n\n    </ion-row> -->\n\n  \n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\Programmingwork\ionicongoing\e-shopping\eshop-client\src\pages\admin\admindashboard\admindashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_orders_orders__["a" /* OrdersProvider */], __WEBPACK_IMPORTED_MODULE_3__store_orders_orderstore__["a" /* OrderStore */]])
    ], AdmindashboardPage);
    return AdmindashboardPage;
}());

//# sourceMappingURL=admindashboard.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store_orders_orderstore__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
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
        return this.http.get('./../assets/json/orders.json').
            map(function (data) {
            console.log('Orders', data.orders);
            _this.ordersStore.setOrders(data.orders);
            return data.orders;
        });
    };
    OrdersProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__store_orders_orderstore__["a" /* OrderStore */]])
    ], OrdersProvider);
    return OrdersProvider;
}());

//# sourceMappingURL=orders.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__men_men__ = __webpack_require__(104);
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
 * Generated class for the CategoriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
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
            selector: 'page-categories',template:/*ion-inline-start:"E:\Programmingwork\ionicongoing\e-shopping\eshop-client\src\pages\buyer\categories\categories.html"*/'<!--\n\n  Generated template for the CategoriesPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-header>\n\n  \n\n  <ion-navbar>\n\n      <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n    <ion-title>E Garments</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="card-background-page">\n\n\n\n  <ion-card  (click)="goToMensPage()">\n\n    <img src="assets/imgs/firstCategory.png"/>\n\n    <div class="card-title">Men</div>\n\n    <div class="card-subtitle">41 Listings</div>\n\n  </ion-card>\n\n\n\n  <ion-card>\n\n    <img src="assets/imgs/firstCategory.png"/>\n\n    <div class="card-title">Women</div>\n\n    <div class="card-subtitle">64 Listings</div>\n\n  </ion-card>\n\n\n\n  <ion-card>\n\n    <img src="assets/imgs/firstCategory.png"/>\n\n    <div class="card-title">Boys</div>\n\n    <div class="card-subtitle">72 Listings</div>\n\n  </ion-card>\n\n\n\n  <ion-card>\n\n    <img src="assets/imgs/firstCategory.png"/>\n\n    <div class="card-title">Girls</div>\n\n    <div class="card-subtitle">72 Listings</div>\n\n  </ion-card>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"E:\Programmingwork\ionicongoing\e-shopping\eshop-client\src\pages\buyer\categories\categories.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], CategoriesPage);
    return CategoriesPage;
}());

//# sourceMappingURL=categories.js.map

/***/ })

},[208]);
//# sourceMappingURL=main.js.map