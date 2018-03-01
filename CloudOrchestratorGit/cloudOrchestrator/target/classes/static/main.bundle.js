webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__appdetails_appdetails_component__ = __webpack_require__("../../../../../src/app/appdetails/appdetails.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__appmetadetails_appmetadetails_component__ = __webpack_require__("../../../../../src/app/appmetadetails/appmetadetails.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_2__appdetails_appdetails_component__["a" /* AppdetailsComponent */] },
    { path: 'dashboard/:id', component: __WEBPACK_IMPORTED_MODULE_3__appmetadetails_appmetadetails_component__["a" /* AppmetadetailsComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<app-header></app-header>\r\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__appdetails_service__ = __webpack_require__("../../../../../src/app/appdetails.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__appdetails_appdetails_component__ = __webpack_require__("../../../../../src/app/appdetails/appdetails.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_pagination__ = __webpack_require__("../../../../ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__appmetadetails_appmetadetails_component__ = __webpack_require__("../../../../../src/app/appmetadetails/appmetadetails.component.ts");
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
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__appdetails_appdetails_component__["a" /* AppdetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_8__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_11__appmetadetails_appmetadetails_component__["a" /* AppmetadetailsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_9_ngx_pagination__["a" /* NgxPaginationModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_3__appdetails_service__["a" /* AppdetailsService */], { provide: __WEBPACK_IMPORTED_MODULE_10__angular_common__["g" /* LocationStrategy */], useClass: __WEBPACK_IMPORTED_MODULE_10__angular_common__["d" /* HashLocationStrategy */] }],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/appdetails.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppdetailsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
};
var AppdetailsService = /** @class */ (function () {
    //getAppDetailsAPI:string = "http://localhost:8080/appdetails";
    function AppdetailsService(http) {
        this.http = http;
        this.getAppDetailsAPI = "http://cloudorchestratordashboard.app.dev.digifabricpcf.com/appdetails";
    }
    AppdetailsService.prototype.getAppDetails = function () {
        return this.http.get(this.getAppDetailsAPI);
    };
    AppdetailsService.prototype.getAppDetailsById = function (id) {
        var url = 'http://cloudorchestratordashboard.app.dev.digifabricpcf.com/appdetails' + id;
        return this.http.get(url);
    };
    AppdetailsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AppdetailsService);
    return AppdetailsService;
}());



/***/ }),

/***/ "../../../../../src/app/appdetails/appdetails.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n\r\n  .table th {\r\n     text-align: center;\r\n  }\r\n\r\n  .table td {\r\n    text-align: justify;   \r\n }\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/appdetails/appdetails.component.html":
/***/ (function(module, exports) {

module.exports = " <div class=\"container\" style=\"padding-top:20px; font-family: fantasy;\">\r\n  <h4>{{title}}</h4>\r\n </div>\r\n<div class=\"container\" >\r\n   <table class=\"table table-hover table-bordered \">\r\n      <thead class=\"thead-dark\" >\r\n        <tr>\r\n          <th>\r\n            SNo.\r\n          </th>\r\n          <th>\r\n            App Name\r\n          </th>\r\n           <th>\r\n             Org Name\r\n           </th>\r\n           <th>\r\n             Space Name\r\n           </th>\r\n          <th>\r\n            Exception Type\r\n          </th>\r\n\r\n          <th>\r\n            Time\r\n          </th>\r\n           <th>\r\n             Message\r\n           </th>\r\n        </tr>\r\n      </thead>\r\n        <tbody>\r\n           <tr *ngFor=\"let details of appdetailList | paginate: { itemsPerPage: 10, currentPage: p } ;let i=index\" (click)=\"openAppId(details)\">\r\n             <td>\r\n               {{10*(p-1) + i +1}}\r\n             </td>\r\n             <td>\r\n              <a [routerLink]=\"\" (click)=\"openAppId(details)\">{{details.appName}}</a> \r\n             </td>\r\n              <td>\r\n                {{details.orgName}}\r\n              </td>\r\n\r\n              <td>\r\n                  {{details.spaceName}}\r\n              </td>\r\n             <td>\r\n               {{details.exceptionType}}\r\n             </td>\r\n             <td>\r\n               {{details.timestamp|date:'yyyy-MM-dd HH:mm a z'}}\r\n             </td>\r\n             <td>\r\n               {{details.message}}\r\n             </td>\r\n\r\n           </tr>\r\n        </tbody>\r\n\r\n   </table>\r\n     <div class=\"pagination\">\r\n              <pagination-controls (pageChange)=\"p = $event\" autoHide=\"true\"  maxSize=\"10\" ></pagination-controls>\r\n            </div>\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/appdetails/appdetails.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppdetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__appdetails_service__ = __webpack_require__("../../../../../src/app/appdetails.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppdetailsComponent = /** @class */ (function () {
    function AppdetailsComponent(appDetailsService, router, route) {
        this.appDetailsService = appDetailsService;
        this.router = router;
        this.route = route;
        this.title = "Cloud Orchestrator";
        this.p = 1;
    }
    AppdetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appDetailsService.getAppDetails().subscribe(function (res) {
            _this.appdetailList = res;
        });
    };
    AppdetailsComponent.prototype.openAppId = function (details) {
        var id = details.id;
        this.route.navigate(['dashboard', id]);
    };
    AppdetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-appdetails',
            template: __webpack_require__("../../../../../src/app/appdetails/appdetails.component.html"),
            styles: [__webpack_require__("../../../../../src/app/appdetails/appdetails.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__appdetails_service__["a" /* AppdetailsService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], AppdetailsComponent);
    return AppdetailsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/appmetadetails/appmetadetails.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "span{\r\n    font-weight :bold\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/appmetadetails/appmetadetails.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"padding-top:20px;font-family: fantasy;\">\n    <h4>{{title}}</h4>\n   </div>\n\n<!-- <div class=\"container\">\n    \n        <div class=\"form-group\" >\n            <div class=\"row\">\n                    <div class=\"col-lg-6 \">\n                            <label class=\"col-lg-4 \" for=\"appName\">App Name:</label>\n                            <input class=\"col-lg-8\" type=\"text\" class=\"form-control\" value= {{appMetaDetails?.appName}} id=\"usr\" readonly>\n                        </div>\n                          \n                          <div class=\"form-group\">\n                                <div class=\"col-lg-6\">\n                            <label class=\"col-lg-4\" for=\"\">Space Name :</label>\n                            <input class=\"col-lg-8\" type=\"text\" class=\"form-control\" value= {{appMetaDetails?.spaceName}} id=\"\" readonly>\n                        </div>\n                          </div>\n            </div>\n\n            <div class=\"row\">\n                    <div class=\"col-lg-6 \">\n                            <label class=\"col-2 col-form-label\" for=\"appName\">Exception Type :</label>\n                            <input class=\"col-10\"  type=\"text\" class=\"form-control\" value= {{appMetaDetails?.appName}} id=\"usr\" readonly>\n                        </div>\n                          \n                          <div class=\"form-group\">\n                                <div class=\"col-lg-6\">\n                            <label class=\"col-2 col-form-label\" for=\"\">Org Name :</label>\n                            <input class=\"col-10\"  type=\"text\" class=\"form-control\" value= {{appMetaDetails?.spaceName}} id=\"\" readonly>\n                        </div>\n                          </div>\n            </div>\n                \n   \n    \n</div> -->\n\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-lg-6\">\n          <span>App Name :</span>\n            {{appMetaDetails?.appName}}\n        </div>\n        <div class=\"col-lg-6\">\n            <span> Exception Type :</span>\n            {{appMetaDetails?.exceptionType}}\n        </div>\n\n    </div>\n  \n        <div class=\"row\">\n                <div class=\"col-lg-6\">\n                    <span>Org Name : </span>\n                \n                    \n                    {{appMetaDetails?.orgName}}\n                </div>\n                <div class=\"col-lg-6\">\n                  <span>Space Name : </span> {{appMetaDetails?.spaceName}}\n                </div>\n        \n            </div>\n</div>\n\n<div class=\"container\" style=\"padding-top:10px\">\n   <table class=\"table table-hover table-bordered \">\n      <thead class=\"thead-dark\" >\n        <tr>\n          <th>\n            SNo.\n          </th>\n          <th>\n            Time\n          </th>\n           <th>\n             Message\n           </th>\n        </tr>\n      </thead>\n        <tbody>\n           <tr *ngFor=\"let details of appMetaDetailsLogList | paginate: { itemsPerPage: 10, currentPage: p } ;let i=index\" >\n             <td>\n                 {{10*(p-1) + i +1}}\n             </td>\n            \n             <td>\n               {{details.timestamp|date:'yyyy-MM-dd HH:mm a z'}}\n             </td>\n             <td>\n               {{details.message}}\n             </td>\n\n           </tr>\n        </tbody>\n\n   </table>\n     <div class=\"pagination\">\n              <pagination-controls (pageChange)=\"p = $event\" autoHide=\"true\"  maxSize=\"10\" ></pagination-controls>\n            </div>\n\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/appmetadetails/appmetadetails.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppmetadetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__appdetails_service__ = __webpack_require__("../../../../../src/app/appdetails.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppmetadetailsComponent = /** @class */ (function () {
    function AppmetadetailsComponent(appDetailsService, route, router) {
        var _this = this;
        this.appDetailsService = appDetailsService;
        this.route = route;
        this.router = router;
        this.p = 1;
        this.title = "Cloud Orchestrator";
        this.route.params.subscribe(function (params) {
            _this.id = params['id'];
        });
        // this.appDetailsService.getAppDetailsById(this.id).subscribe(res => {this.appMetaDetails = res;
        //   console.log(this.appMetaDetails);
        // });
    }
    AppmetadetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.id);
        this.appDetailsService.getAppDetailsById(this.id).subscribe(function (res) {
            _this.appMetaDetails = res;
            _this.appMetaDetailsLogList = _this.appMetaDetails.logs;
            console.log(_this.appMetaDetails);
        });
    };
    AppmetadetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-appmetadetails',
            template: __webpack_require__("../../../../../src/app/appmetadetails/appmetadetails.component.html"),
            styles: [__webpack_require__("../../../../../src/app/appmetadetails/appmetadetails.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__appdetails_service__["a" /* AppdetailsService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], AppmetadetailsComponent);
    return AppmetadetailsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ctslogo\r\n{\r\n   padding-left: 50px;\r\n   background-color: #027fcc !important;\r\n   padding-top: 5px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ctslogo\" style=\"height:46px\">\n <a [routerLink]=\"['../dashboard']\"><img width=\"100\" src=\"assets/cognizant-logo.png\"></a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map