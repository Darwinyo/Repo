webpackJsonp([1],{

/***/ "./ClientApp async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./ClientApp async recursive";

/***/ }),

/***/ "./ClientApp/app/actions/components/components-access.action.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UPDATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return YES; });
/* unused harmony export NO */
var UPDATE = 'UPDATE';
var YES = 'YES';
var NO = 'NO';
//# sourceMappingURL=components-access.action.js.map

/***/ }),

/***/ "./ClientApp/app/actions/login/login.action.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AUTHORIZED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NOT_AUTHORIZED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LOAD_SESSION; });
var AUTHORIZED = 'AUTHORIZED';
var NOT_AUTHORIZED = 'NOT_AUTHORIZED';
var LOAD_SESSION = 'LOAD_SESSION';
//# sourceMappingURL=login.action.js.map

/***/ }),

/***/ "./ClientApp/app/actions/menu/module-access.action.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PERMITTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NOT_PERMITTED; });
var PERMITTED = 'PERMITTED';
var NOT_PERMITTED = 'NOT_PERMITTED';
//# sourceMappingURL=module-access.action.js.map

/***/ }),

/***/ "./ClientApp/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\" [hidden]=\"!isLogged\">\n  <nav-menu [userName]=\"userLogin\"></nav-menu>\n  <div id=\"page-wrapper\" class=\"container-fluid\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n<user [hidden]=\"isLogged\"></user>"

/***/ }),

/***/ "./ClientApp/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#wrapper {\n  background-color: #2D3337; }\n  #wrapper #page-wrapper {\n    min-height: 650px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./ClientApp/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_login_login_action__ = __webpack_require__("./ClientApp/app/actions/login/login.action.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_authorize_user_login_service__ = __webpack_require__("./ClientApp/app/services/authorize/user-login.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = (function () {
    function AppComponent(store, authService) {
        this.store = store;
        this.authService = authService;
        this.userLogin = 'Anonymous';
        this.isLogged = false;
        this.authToken = false;
        this.title = 'app';
        this.loginStateObservable = this.store.select('login');
    }
    AppComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        this.authService.sessionUser(localStorage.getItem('tokenid').toString()).subscribe(function (x) { return (_this.authToken = x); }, function (err) { return console.log(err); }, function () {
            if (_this.authToken == true) {
                _this.CheckUserToken(_this.authToken);
            }
        });
    };
    AppComponent.prototype.CheckUserToken = function (bool) {
        if (bool) {
            var sessionState = {};
            sessionState.GroupName = localStorage.getItem('groupname');
            sessionState.UserName = localStorage.getItem('username');
            sessionState.UserLoginState = localStorage.getItem('userloginstate');
            sessionState.TokenId = localStorage.getItem('tokenid');
            this.store.dispatch({ type: __WEBPACK_IMPORTED_MODULE_2__actions_login_login_action__["c" /* LOAD_SESSION */], payload: sessionState });
        }
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.sessionUser(localStorage.getItem('tokenid').toString()).subscribe(function (x) { return (_this.authToken = x); }, function (err) { return console.log(err); }, function () {
            if (_this.authToken == true) {
                _this.CheckUserToken(_this.authToken);
            }
        });
        this.stateSubscription = this.loginStateObservable.subscribe(function (result) { return _this.ValidateUserState(result); });
    };
    AppComponent.prototype.ngOnDestroy = function () { };
    AppComponent.prototype.ValidateUserState = function (result) {
        if (result.UserLoginState === __WEBPACK_IMPORTED_MODULE_2__actions_login_login_action__["a" /* AUTHORIZED */]) {
            this.isLogged = true;
        }
        this.loginState = result;
        this.userLogin = result.UserName;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("./ClientApp/app/app.component.html"),
        styles: [__webpack_require__("./ClientApp/app/app.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["g" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["g" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_authorize_user_login_service__["a" /* UserLoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_authorize_user_login_service__["a" /* UserLoginService */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "./ClientApp/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__containers_dumb_login_login_component__ = __webpack_require__("./ClientApp/app/containers/dumb/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__containers_smart_user_user_component__ = __webpack_require__("./ClientApp/app/containers/smart/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__containers_smart_viewDetails_general_info_component__ = __webpack_require__("./ClientApp/app/containers/smart/viewDetails/general-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__containers_smart_manageProposal_general_info_component__ = __webpack_require__("./ClientApp/app/containers/smart/manageProposal/general-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__containers_smart_manageApproval_general_info_component__ = __webpack_require__("./ClientApp/app/containers/smart/manageApproval/general-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_authorize_user_login_service__ = __webpack_require__("./ClientApp/app/services/authorize/user-login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_navmenu_navmenu_component__ = __webpack_require__("./ClientApp/app/components/navmenu/navmenu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_sidenavmenu_sidenavmenu_component__ = __webpack_require__("./ClientApp/app/components/sidenavmenu/sidenavmenu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__containers_dumb_home_home_component__ = __webpack_require__("./ClientApp/app/containers/dumb/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__containers_dumb_page_not_found_page_not_found_component__ = __webpack_require__("./ClientApp/app/containers/dumb/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__containers_dumb_tree_view_tree_view_component__ = __webpack_require__("./ClientApp/app/containers/dumb/tree-view/tree-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__containers_smart_tree_tree_component__ = __webpack_require__("./ClientApp/app/containers/smart/tree/tree.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__routes_app_route_module__ = __webpack_require__("./ClientApp/app/routes/app-route.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__reducers_login_login_reducer__ = __webpack_require__("./ClientApp/app/reducers/login/login.reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__reducers_components_components_reducer__ = __webpack_require__("./ClientApp/app/reducers/components/components.reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__reducers_menu_module_access_reducer__ = __webpack_require__("./ClientApp/app/reducers/menu/module-access.reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ngrx_store_devtools__ = __webpack_require__("./node_modules/@ngrx/store-devtools/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_primeng_primeng__ = __webpack_require__("./node_modules/primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__app_component__ = __webpack_require__("./ClientApp/app/app.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Temporary
// Container-Dumb

// Container-Smart




// services

//
// Components


// Container-Dumb




// Module

// import { UserModule } from './modules/user.module';
// Reducers



// Const
// Third-Party



// Angular Dependencies





var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_20__angular_core__["NgModule"])({
        declarations: [
            // Container-Dumb
            __WEBPACK_IMPORTED_MODULE_0__containers_dumb_login_login_component__["a" /* LoginComponent */],
            // Container-Smart
            __WEBPACK_IMPORTED_MODULE_1__containers_smart_user_user_component__["a" /* UserComponent */],
            __WEBPACK_IMPORTED_MODULE_23__app_component__["a" /* AppComponent */],
            //Components
            __WEBPACK_IMPORTED_MODULE_6__components_navmenu_navmenu_component__["a" /* NavMenuComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_sidenavmenu_sidenavmenu_component__["a" /* SideNavMenuComponent */],
            // Container-Dumb
            __WEBPACK_IMPORTED_MODULE_8__containers_dumb_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_9__containers_dumb_page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */],
            __WEBPACK_IMPORTED_MODULE_11__containers_smart_tree_tree_component__["a" /* TreeComponent */],
            __WEBPACK_IMPORTED_MODULE_10__containers_dumb_tree_view_tree_view_component__["a" /* TreeViewComponent */],
            __WEBPACK_IMPORTED_MODULE_2__containers_smart_viewDetails_general_info_component__["a" /* VDGeneralInfoComponent */],
            __WEBPACK_IMPORTED_MODULE_4__containers_smart_manageApproval_general_info_component__["a" /* MAGeneralInfoComponent */],
            __WEBPACK_IMPORTED_MODULE_3__containers_smart_manageProposal_general_info_component__["a" /* MPGeneralInfoComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_19__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_22__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_18_primeng_primeng__["TreeModule"],
            __WEBPACK_IMPORTED_MODULE_16__ngrx_store__["a" /* StoreModule */].provideStore({ 'login': __WEBPACK_IMPORTED_MODULE_13__reducers_login_login_reducer__["a" /* LoginReducer */], 'component': __WEBPACK_IMPORTED_MODULE_14__reducers_components_components_reducer__["a" /* ComponentsReducer */], 'module': __WEBPACK_IMPORTED_MODULE_15__reducers_menu_module_access_reducer__["a" /* ModuleReducer */] }),
            __WEBPACK_IMPORTED_MODULE_17__ngrx_store_devtools__["a" /* StoreDevtoolsModule */].instrumentOnlyWithExtension({}),
            // UserModule,
            __WEBPACK_IMPORTED_MODULE_21__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_12__routes_app_route_module__["a" /* AppRoutingModule */]
        ],
        providers: [{ provide: 'ORIGIN_URL', useValue: location.origin }, __WEBPACK_IMPORTED_MODULE_5__services_authorize_user_login_service__["a" /* UserLoginService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_23__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "./ClientApp/app/components/navmenu/navmenu.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<nav class=\"navbar-toggleable-md navbar navbar-inverse bg-inverse\">\r\n    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\r\n        aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n    <a class='navbar-brand' [routerLink]=\"['/home']\">SuperIndo</a>\r\n\r\n    <div id=\"navbarSupportedContent\" class=\"collapse navbar-collapse  justify-content-end\">\r\n        <ul class=\"navbar-nav nav\">\r\n            <li class=\"nav-item active\">\r\n                <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" href=\"#\">Link</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link disabled\" href=\"#\">Disabled</a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</nav>-->\r\n<nav class=\"navbar navbar-default navbar-static-top\" role=\"navigation\" style=\"margin-bottom: 0\">\r\n    <div class=\"navbar-header\">\r\n        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\r\n                    <span class=\"sr-only\">Toggle navigation</span>\r\n                    <span class=\"icon-bar\"></span>\r\n                    <span class=\"icon-bar\"></span>\r\n                    <span class=\"icon-bar\"></span>\r\n                </button>\r\n        <a class=\"navbar-brand\">SuperIndo App</a>\r\n    </div>\r\n    <!-- /.navbar-header -->\r\n\r\n    <ul id=\"account-management-ul\" class=\"nav navbar-top-links navbar-right\">\r\n        <li class=\"account-management-li\">{{userName}}</li>\r\n        <li class=\"account-management-li\" (click)=\"SignOut()\">Log Out</li>\r\n    </ul>\r\n    <!-- /.navbar-top-links -->\r\n    <side-nav-menu></side-nav-menu>\r\n\r\n</nav>"

/***/ }),

/***/ "./ClientApp/app/components/navmenu/navmenu.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar {\n  background-color: #2D3337; }\n  .navbar #account-management-ul {\n    padding-top: 15px;\n    color: white; }\n    .navbar #account-management-ul .account-management-li {\n      padding-right: 15px; }\n  .navbar .navbar-header .navbar-brand {\n    color: white; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./ClientApp/app/components/navmenu/navmenu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_login_login_action__ = __webpack_require__("./ClientApp/app/actions/login/login.action.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavMenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavMenuComponent = (function () {
    function NavMenuComponent(store) {
        this.store = store;
        this.userState = this.store.select('login');
    }
    NavMenuComponent.prototype.SignOut = function () {
        var user = {};
        user.GroupName = null;
        user.TokenId = null;
        user.UserLoginState = __WEBPACK_IMPORTED_MODULE_2__actions_login_login_action__["b" /* NOT_AUTHORIZED */];
        user.UserName = null;
        localStorage.clear();
        this.store.dispatch({ type: __WEBPACK_IMPORTED_MODULE_2__actions_login_login_action__["b" /* NOT_AUTHORIZED */], payload: user });
    };
    return NavMenuComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], NavMenuComponent.prototype, "userName", void 0);
NavMenuComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'nav-menu',
        template: __webpack_require__("./ClientApp/app/components/navmenu/navmenu.component.html"),
        styles: [__webpack_require__("./ClientApp/app/components/navmenu/navmenu.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["g" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["g" /* Store */]) === "function" && _a || Object])
], NavMenuComponent);

var _a;
//# sourceMappingURL=navmenu.component.js.map

/***/ }),

/***/ "./ClientApp/app/components/sidenavmenu/sidenavmenu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar-default sidebar\" role=\"navigation\">\r\n    <div class=\"sidebar-nav navbar-collapse\">\r\n        <ul class=\"nav in\" id=\"side-menu\">\r\n            <li [routerLinkActive]=\"['link-active']\">\r\n                <a [routerLink]=\"['/home']\">\r\n                   Home\r\n                </a>\r\n            </li>\r\n            <li [routerLinkActive]=\"['link-active']\">\r\n                <a [routerLink]=\"['/tree']\">\r\n                   ERP Portal Legacy\r\n                </a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n    <!-- /.sidebar-collapse -->\r\n</div>"

/***/ }),

/***/ "./ClientApp/app/components/sidenavmenu/sidenavmenu.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sidebar {\n  background-color: #2d3337; }\n  .sidebar .nav li a {\n    color: #fff; }\n    .sidebar .nav li a:hover, .sidebar .nav li a:active, .sidebar .nav li a:focus {\n      background-color: #666; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./ClientApp/app/components/sidenavmenu/sidenavmenu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SideNavMenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SideNavMenuComponent = (function () {
    function SideNavMenuComponent() {
    }
    return SideNavMenuComponent;
}());
SideNavMenuComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'side-nav-menu',
        template: __webpack_require__("./ClientApp/app/components/sidenavmenu/sidenavmenu.component.html"),
        styles: [__webpack_require__("./ClientApp/app/components/sidenavmenu/sidenavmenu.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], SideNavMenuComponent);

//# sourceMappingURL=sidenavmenu.component.js.map

/***/ }),

/***/ "./ClientApp/app/consts/route.const.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__containers_dumb_home_home_component__ = __webpack_require__("./ClientApp/app/containers/dumb/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__containers_dumb_page_not_found_page_not_found_component__ = __webpack_require__("./ClientApp/app/containers/dumb/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__containers_dumb_tree_view_tree_view_component__ = __webpack_require__("./ClientApp/app/containers/dumb/tree-view/tree-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__containers_smart_viewDetails_general_info_component__ = __webpack_require__("./ClientApp/app/containers/smart/viewDetails/general-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__containers_smart_manageProposal_general_info_component__ = __webpack_require__("./ClientApp/app/containers/smart/manageProposal/general-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__containers_smart_manageApproval_general_info_component__ = __webpack_require__("./ClientApp/app/containers/smart/manageApproval/general-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__guards_auth_guard__ = __webpack_require__("./ClientApp/app/guards/auth.guard.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appRoutes; });
// Container-Dumb







var appRoutes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_0__containers_dumb_home_home_component__["a" /* HomeComponent */] },
    { path: 'tree', component: __WEBPACK_IMPORTED_MODULE_2__containers_dumb_tree_view_tree_view_component__["a" /* TreeViewComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'ma-general-info', component: __WEBPACK_IMPORTED_MODULE_5__containers_smart_manageApproval_general_info_component__["a" /* MAGeneralInfoComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'vd-general-info', component: __WEBPACK_IMPORTED_MODULE_3__containers_smart_viewDetails_general_info_component__["a" /* VDGeneralInfoComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'mp-general-info', component: __WEBPACK_IMPORTED_MODULE_4__containers_smart_manageProposal_general_info_component__["a" /* MPGeneralInfoComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__guards_auth_guard__["a" /* AuthGuard */]] },
    //   {
    //     path: 'heroes',
    //     component: HeroListComponent,
    //     data: { title: 'Heroes List' }
    //   },
    //   { path: '',
    //     redirectTo: '/heroes',
    //     pathMatch: 'full'
    //   },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_1__containers_dumb_page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */] }
];
//# sourceMappingURL=route.const.js.map

/***/ }),

/***/ "./ClientApp/app/containers/dumb/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\r\n  <img width=\"300\" src=\"../../../../../images/Super_Indo.png\">\r\n</div>"

/***/ }),

/***/ "./ClientApp/app/containers/dumb/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'home',
        template: __webpack_require__("./ClientApp/app/containers/dumb/home/home.component.html")
    })
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "./ClientApp/app/containers/dumb/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-4 col-md-offset-4\">\r\n            <div class=\"login-panel panel panel-default\">\r\n                <div class=\"panel-heading\">\r\n                    <h3 class=\"panel-title\">Please Sign In</h3>\r\n                </div>\r\n                <div class=\"panel-body\">\r\n                    <form #loginForm=\"ngForm\" (ngSubmit)=\"SubmitUserLogin(loginForm)\" role=\"form\">\r\n                        <fieldset>\r\n                            <div class=\"form-group\">\r\n                                <input class=\"form-control\" id=\"name\" placeholder=\"Name\" name=\"name\" required ngModel #name=\"ngModel\" autofocus=\"\" type=\"text\">\r\n                                <div [hidden]=\"name.valid || name.pristine\" class=\"alert alert-danger\">\r\n                                    UserName is required\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <input class=\"form-control\" placeholder=\"Password\" id=\"password\" ngModel #password=\"ngModel\" name=\"password\" required value=\"\"\r\n                                    type=\"password\">\r\n                                <div [hidden]=\"password.valid || password.pristine\" class=\"alert alert-danger\">\r\n                                    Password is required\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"checkbox\">\r\n                                <label>\r\n                                        <input name=\"remember\" value=\"Remember Me\" type=\"checkbox\">Remember Me\r\n                                    </label>\r\n                            </div>\r\n                            <!-- Change this to a button or input when using this as a form -->\r\n\r\n                            <button type=\"submit\" class=\"btn btn-lg btn-success btn-block\">Login</button>\r\n                        </fieldset>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./ClientApp/app/containers/dumb/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authorize_user_login_service__ = __webpack_require__("./ClientApp/app/services/authorize/user-login.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = (function () {
    function LoginComponent(userLoginService) {
        this.userLoginService = userLoginService;
        this.SubmitUserLoginEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    LoginComponent.prototype.SubmitUserLogin = function (form) {
        var _this = this;
        var userLoginModel = {};
        userLoginModel.userName = form.value['name'];
        userLoginModel.password = form.value['password'];
        this.userLoginService.authorizeUser(userLoginModel).subscribe(function (result) {
            return (_this.userLoginStateModel = result);
        }, function (err) { return console.log(err); }, function () {
            _this.SubmitUserLoginEvent.emit(_this.userLoginStateModel);
        });
    };
    return LoginComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], LoginComponent.prototype, "SubmitUserLoginEvent", void 0);
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'login',
        template: __webpack_require__("./ClientApp/app/containers/dumb/login/login.component.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_authorize_user_login_service__["a" /* UserLoginService */]]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_authorize_user_login_service__["a" /* UserLoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_authorize_user_login_service__["a" /* UserLoginService */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "./ClientApp/app/containers/dumb/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>PageNotFound 404</h1>"

/***/ }),

/***/ "./ClientApp/app/containers/dumb/page-not-found/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    return PageNotFoundComponent;
}());
PageNotFoundComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-not-found',
        template: __webpack_require__("./ClientApp/app/containers/dumb/page-not-found/page-not-found.component.html")
    })
], PageNotFoundComponent);

//# sourceMappingURL=page-not-found.component.js.map

/***/ }),

/***/ "./ClientApp/app/containers/dumb/tree-view/tree-view.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"menuList\">\r\n    <!--<tree [MenuList]=\"menuList\"></tree>-->\r\n    <p-tree [value]=\"files\" selectionMode=\"single\" [(selection)]=\"selectedFile\" (onNodeSelect)=\"nodeSelect($event)\"></p-tree>\r\n</div>"

/***/ }),

/***/ "./ClientApp/app/containers/dumb/tree-view/tree-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_menu_module_access_service__ = __webpack_require__("./ClientApp/app/services/menu/module-access.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_menu_module_access_action__ = __webpack_require__("./ClientApp/app/actions/menu/module-access.action.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions_components_components_access_action__ = __webpack_require__("./ClientApp/app/actions/components/components-access.action.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeViewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TreeViewComponent = (function () {
    function TreeViewComponent(ModuleService, ComponentsStore, ModuleStore, LoginStore, router) {
        this.ModuleService = ModuleService;
        this.ComponentsStore = ComponentsStore;
        this.ModuleStore = ModuleStore;
        this.LoginStore = LoginStore;
        this.router = router;
        this.componentStore = this.ComponentsStore.select('component');
        this.moduleStore = this.ModuleStore.select('module');
        this.loginStateObservable = this.LoginStore.select('login');
    }
    TreeViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.menu = {};
        this.LoginSub = this.loginStateObservable.subscribe(function (x) {
            if (x.UserLoginState !== 'AUTHORIZED') {
                _this.router.navigateByUrl('/home');
            }
            _this.grpName = x.GroupName;
        });
        this.ModuleService
            .GetModuleList()
            .subscribe(function (result) { return (_this.menu = result); }, function (err) { return console.log(err); }, function () { return _this.AddNode(_this.menu); });
    };
    TreeViewComponent.prototype.FetchMenuData = function () { };
    TreeViewComponent.prototype.AddNode = function (newNode) {
        this.files = {};
        this.files = newNode;
        this.menuList = {};
        this.menuList = newNode;
    };
    TreeViewComponent.prototype.nodeSelect = function (event) {
        var x = event.node.id;
        this.Route(x);
    };
    TreeViewComponent.prototype.ngOnChanges = function (changes) {
        // for (let x in changes) {
        // 	let chg = changes[x];
        // 	let curr = JSON.stringify(chg.currentValue);
        // 	let prev = JSON.stringify(chg.previousValue);
        // 	console.log(chg + ' ' + curr + ' ' + prev);
        // }
        console.log('changed');
    };
    TreeViewComponent.prototype.Route = function (id) {
        var _this = this;
        var menuAccess;
        this.ModuleService
            .AuthorizeMenu(id, this.grpName)
            .subscribe(function (x) { return (menuAccess = x); }, function (err) { return console.log(err); }, function () { return _this.AccessMenu(menuAccess, id); });
    };
    TreeViewComponent.prototype.AccessMenu = function (menuAccess, id) {
        var _this = this;
        if (menuAccess == 'PERMITTED') {
            var URLString_1;
            var componentArray_1 = {};
            this.ModuleStore.dispatch({
                type: __WEBPACK_IMPORTED_MODULE_3__actions_menu_module_access_action__["a" /* PERMITTED */],
                payload: { ModuleId: id, Permitted: __WEBPACK_IMPORTED_MODULE_3__actions_menu_module_access_action__["a" /* PERMITTED */] }
            });
            this.ModuleService.GetComponents(id, this.grpName).subscribe(function (x) { return (componentArray_1 = x); }, function (err) { return console.log(err); }, function () {
                _this.ComponentsStore.dispatch({
                    type: __WEBPACK_IMPORTED_MODULE_4__actions_components_components_access_action__["a" /* UPDATE */],
                    payload: { ComponentArray: componentArray_1 }
                });
                _this.ModuleService
                    .GetMenuURL(id)
                    .subscribe(function (x) { return (URLString_1 = x); }, function (err) { return console.log(err); }, function () { return _this.RedirectUrl(URLString_1); });
            });
        }
        else {
            this.ModuleStore.dispatch({
                type: __WEBPACK_IMPORTED_MODULE_3__actions_menu_module_access_action__["b" /* NOT_PERMITTED */],
                payload: { Permitted: __WEBPACK_IMPORTED_MODULE_3__actions_menu_module_access_action__["b" /* NOT_PERMITTED */] }
            });
            alert('You are not Authorize to this Module');
        }
    };
    TreeViewComponent.prototype.RedirectUrl = function (url) {
        this.router.navigateByUrl(url);
    };
    return TreeViewComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", Array)
], TreeViewComponent.prototype, "MenuList", void 0);
TreeViewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'tree-view',
        template: __webpack_require__("./ClientApp/app/containers/dumb/tree-view/tree-view.component.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_0__services_menu_module_access_service__["a" /* ModuleAccessService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_menu_module_access_service__["a" /* ModuleAccessService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_menu_module_access_service__["a" /* ModuleAccessService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["g" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["g" /* Store */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["g" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["g" /* Store */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["g" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["g" /* Store */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["Router"]) === "function" && _e || Object])
], TreeViewComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=tree-view.component.js.map

/***/ }),

/***/ "./ClientApp/app/containers/smart/manageApproval/general-info.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-12\" style=\"padding-top: 30px;\">\r\n    <table class=\"table table-striped table-bordered table-hover dataTable no-footer dtr-inline\" id=\"dataTables-example\" role=\"grid\"\r\n        aria-describedby=\"dataTables-example_info\" style=\"width: 100%;\" width=\"100%\">\r\n        <thead>\r\n            <tr role=\"row\">\r\n                <th>SKU</th>\r\n                <th>Product Name</th>\r\n                <th>Approval Status</th>\r\n                <th rowspan=\"2\">Image</th>\r\n                <th rowspan=\"2\">Action</th>\r\n            </tr>\r\n            <tr>\r\n                <th>\r\n                    <form (ngSubmit)=\"SKUSearch(SKUform)\" #SKUform=\"ngForm\">\r\n                    <div class=\"input-group add-on\">\r\n                        <input class=\"form-control\" placeholder=\"Search\" name=\"srch-term\" ngModel id=\"srch-term\" type=\"text\">\r\n                        <div class=\"input-group-btn\">\r\n                            <button class=\"btn btn-default\" type=\"submit\"><i class=\"fa fa-search\"></i></button>\r\n                        </div>\r\n                    </div>\r\n                    </form>\r\n                </th>\r\n                <th>\r\n                    <form (ngSubmit)=\"ProductSearch(Productform)\" #Productform=\"ngForm\">\r\n                    <div class=\"input-group add-on\">\r\n                        <input class=\"form-control\" placeholder=\"Search\" name=\"srch-term\" ngModel id=\"srch-term\" type=\"text\">\r\n                        <div class=\"input-group-btn\">\r\n                            <button class=\"btn btn-default\" type=\"submit\"><i class=\"fa fa-search\"></i></button>\r\n                        </div>\r\n                    </div>\r\n                    </form>\r\n                </th>\r\n                <th>\r\n                    <form (ngSubmit)=\"StatusSearch(Statusform)\" #Statusform=\"ngForm\">\r\n                    <div class=\"input-group add-on\">\r\n                        <input class=\"form-control\" placeholder=\"Search\" name=\"srch-term\" ngModel id=\"srch-term\" type=\"text\">\r\n                        <div class=\"input-group-btn\">\r\n                            <button class=\"btn btn-default\" type=\"submit\"><i class=\"fa fa-search\"></i></button>\r\n                        </div>\r\n                    </div>\r\n                    </form>\r\n                </th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr *ngFor=\"let dataFilter of datafilterArray\">\r\n                <th>{{(dataFilter)?.SKU}}</th>\r\n                <th>{{(dataFilter)?.ProductName}}</th>\r\n                <th>{{(dataFilter)?.ApprovalStatus}}</th>\r\n                <th><img [attr.src]=\"(dataFilter)?.ImageLink\"></th>\r\n                <th>\r\n                    <button class=\"btn btn-default\" *ngIf=\"btnApproveActivated\">Approve</button>\r\n                    <button class=\"btn btn-default\" *ngIf=\"btnRejectActivated\">Reject</button>\r\n                    <button class=\"btn btn-default\" *ngIf=\"btnDetailsActivated\">Details</button>\r\n                    <button class=\"btn btn-default\" *ngIf=\"btnApprovalActivated\">Approval History</button>\r\n                </th>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</div>"

/***/ }),

/***/ "./ClientApp/app/containers/smart/manageApproval/general-info.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "th {\n  text-align: center !important;\n  vertical-align: middle !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./ClientApp/app/containers/smart/manageApproval/general-info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_menu_module_access_service__ = __webpack_require__("./ClientApp/app/services/menu/module-access.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions_login_login_action__ = __webpack_require__("./ClientApp/app/actions/login/login.action.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_menu_module_access_action__ = __webpack_require__("./ClientApp/app/actions/menu/module-access.action.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__actions_components_components_access_action__ = __webpack_require__("./ClientApp/app/actions/components/components-access.action.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MAGeneralInfoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MAGeneralInfoComponent = (function () {
    function MAGeneralInfoComponent(moduleAccessService, componentStore, loginStore, moduleStore, router) {
        this.moduleAccessService = moduleAccessService;
        this.componentStore = componentStore;
        this.loginStore = loginStore;
        this.moduleStore = moduleStore;
        this.router = router;
        this.btnRejectActivated = false;
        this.btnApproveActivated = false;
        this.btnDetailsActivated = false;
        this.btnApprovalActivated = false;
        this.datafilterArray = [];
        this.loginState = this.loginStore.select('login');
        this.moduleState = this.moduleStore.select('module');
        this.componentState = this.componentStore.select('component');
    }
    MAGeneralInfoComponent.prototype.ngOnChanges = function (changes) {
        console.log(changes);
    };
    MAGeneralInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.componentSub = this.componentState.subscribe(function (x) {
            _this.moduleSub = _this.moduleState.subscribe(function (y) {
                if (y.Permitted !== 'PERMITTED') {
                    _this.router.navigateByUrl('/tree');
                }
                _this.CreateModuleModel(y);
                console.log('ModuleStoreSubscription');
                _this.loginSub = _this.loginState.subscribe(function (z) {
                    if (z.UserLoginState !== 'AUTHORIZED') {
                        _this.router.navigateByUrl('/home');
                    }
                    _this.loginModel = z;
                    _this.ValidateUserState(z, y);
                    console.log('LoginStoreSubscription');
                });
            });
            console.log('componentStoreSubscription');
            _this.CreateComponentObj(x);
        });
    };
    MAGeneralInfoComponent.prototype.SKUSearch = function (SKUform) {
        if (SKUform.value['srch-term'] == '') {
            this.datafilterArray = this.dataPure;
        }
        else {
            this.datafilterArray = this.dataPure.filter(function (x) { return x.SKU == SKUform.value['srch-term']; });
        }
    };
    MAGeneralInfoComponent.prototype.ProductSearch = function (Productform) {
        if (Productform.value['srch-term'] == '') {
            this.datafilterArray = this.dataPure;
        }
        else {
            this.datafilterArray = this.dataPure.filter(function (x) { return x.ProductName == Productform.value['srch-term']; });
        }
    };
    MAGeneralInfoComponent.prototype.StatusSearch = function (Statusform) {
        if (Statusform.value['srch-term'] == '') {
            this.datafilterArray = this.dataPure;
        }
        else {
            this.datafilterArray = this.dataPure.filter(function (x) { return x.ApprovalStatus == Statusform.value['srch-term']; });
        }
    };
    MAGeneralInfoComponent.prototype.CreateComponentObj = function (x) {
        var _this = this;
        this.componentObj = {};
        this.componentObj.ComponentArray = x.ComponentArray;
        this.componentObj.ComponentArray.forEach(function (x) { return _this.MappingComponent(x.appStructTypId, x.IsAuthorized); });
    };
    MAGeneralInfoComponent.prototype.MappingComponent = function (name, Activate) {
        switch (name) {
            case 'General Info - MA - btnApprove':
                console.log('btnApprove');
                if (Activate === __WEBPACK_IMPORTED_MODULE_6__actions_components_components_access_action__["b" /* YES */]) {
                    this.btnApproveActivated = true;
                    console.log(this.btnApprovalActivated.valueOf);
                    break;
                }
                this.btnApproveActivated = false;
                break;
            case 'General Info - MA - btnReject':
                console.log('btnReject');
                if (Activate === __WEBPACK_IMPORTED_MODULE_6__actions_components_components_access_action__["b" /* YES */]) {
                    this.btnRejectActivated = true;
                    console.log(this.btnRejectActivated.valueOf);
                    break;
                }
                this.btnRejectActivated = false;
                break;
            case 'General Info - MA - btnDetails':
                console.log('btnDetail');
                if (Activate === __WEBPACK_IMPORTED_MODULE_6__actions_components_components_access_action__["b" /* YES */]) {
                    this.btnDetailsActivated = true;
                    console.log(this.btnDetailsActivated.valueOf);
                    break;
                }
                this.btnDetailsActivated = false;
                break;
            case 'General Info - MA - btnApprovalHistory':
                console.log('btnHistory');
                if (Activate === __WEBPACK_IMPORTED_MODULE_6__actions_components_components_access_action__["b" /* YES */]) {
                    this.btnApprovalActivated = true;
                    console.log(this.btnApprovalActivated.valueOf);
                    break;
                }
                this.btnApprovalActivated = false;
                break;
            default:
                break;
        }
    };
    MAGeneralInfoComponent.prototype.CreateModuleModel = function (x) {
        this.moduleModel = {};
        this.moduleModel = x;
    };
    MAGeneralInfoComponent.prototype.getDataFilter = function (parentId, GrpName) {
        var _this = this;
        console.log('getdateFilterCalled');
        if (this.loginModel.GroupName === 'DIVBUYER') {
            console.log('DivBuyerService');
            this.moduleAccessService.GetWorkFlowDIVBUYER().subscribe(function (x) { return (_this.datafilterArray = x); }, function (err) { return console.log(err); }, function () { return (_this.dataPure = _this.datafilterArray); });
        }
        else if (this.loginModel.GroupName === 'DPTFOOD') {
            console.log('DptFoodService');
            this.moduleAccessService
                .GetWorkFlowDPTFOOD()
                .subscribe(function (x) { return (_this.datafilterArray = x); }, function (err) { return console.log(err); }, function () { return (_this.dataPure = _this.datafilterArray); });
        }
    };
    MAGeneralInfoComponent.prototype.ValidateUserState = function (result, moduleAccessModel) {
        if (result.UserLoginState === __WEBPACK_IMPORTED_MODULE_4__actions_login_login_action__["a" /* AUTHORIZED */]) {
            console.log('validateUserAuth');
            if (moduleAccessModel.Permitted === __WEBPACK_IMPORTED_MODULE_5__actions_menu_module_access_action__["a" /* PERMITTED */]) {
                console.log('validateUserModulePermitted');
                this.getDataFilter(this.moduleModel.ModuleId, result.GroupName);
            }
            else {
                this.router.navigateByUrl('/tree');
            }
        }
        else {
            this.router.navigateByUrl('/home');
        }
    };
    return MAGeneralInfoComponent;
}());
MAGeneralInfoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ma-general-info',
        template: __webpack_require__("./ClientApp/app/containers/smart/manageApproval/general-info.component.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_menu_module_access_service__["a" /* ModuleAccessService */]],
        styles: [__webpack_require__("./ClientApp/app/containers/smart/manageApproval/general-info.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_menu_module_access_service__["a" /* ModuleAccessService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_menu_module_access_service__["a" /* ModuleAccessService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["g" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["g" /* Store */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["g" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["g" /* Store */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["g" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["g" /* Store */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _e || Object])
], MAGeneralInfoComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=general-info.component.js.map

/***/ }),

/***/ "./ClientApp/app/containers/smart/manageProposal/general-info.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-12\" style=\"padding-top: 30px;\">\r\n    <table class=\"table table-striped table-bordered table-hover dataTable no-footer dtr-inline\" id=\"dataTables-example\" role=\"grid\"\r\n        aria-describedby=\"dataTables-example_info\" style=\"width: 100%;\" width=\"100%\">\r\n        <thead>\r\n            <tr role=\"row\">\r\n                <th>SKU</th>\r\n                <th>Product Name</th>\r\n                <th>Approval Status</th>\r\n                <th rowspan=\"2\">Image</th>\r\n                <th rowspan=\"2\">Action</th>\r\n            </tr>\r\n            <tr>\r\n                <th>\r\n                    <form (ngSubmit)=\"SKUSearch(SKUform)\" #SKUform=\"ngForm\">\r\n                    <div class=\"input-group add-on\">\r\n                        <input class=\"form-control\" placeholder=\"Search\" name=\"srch-term\" ngModel id=\"srch-term\" type=\"text\">\r\n                        <div class=\"input-group-btn\">\r\n                            <button class=\"btn btn-default\" type=\"submit\"><i class=\"fa fa-search\"></i></button>\r\n                        </div>\r\n                    </div>\r\n                    </form>\r\n                </th>\r\n                <th>\r\n                    <form (ngSubmit)=\"ProductSearch(Productform)\" #Productform=\"ngForm\">\r\n                    <div class=\"input-group add-on\">\r\n                        <input class=\"form-control\" placeholder=\"Search\" name=\"srch-term\" ngModel id=\"srch-term\" type=\"text\">\r\n                        <div class=\"input-group-btn\">\r\n                            <button class=\"btn btn-default\" type=\"submit\"><i class=\"fa fa-search\"></i></button>\r\n                        </div>\r\n                    </div>\r\n                    </form>\r\n                </th>\r\n                <th>\r\n                    <form (ngSubmit)=\"StatusSearch(Statusform)\" #Statusform=\"ngForm\">\r\n                    <div class=\"input-group add-on\">\r\n                        <input class=\"form-control\" placeholder=\"Search\" name=\"srch-term\" ngModel id=\"srch-term\" type=\"text\">\r\n                        <div class=\"input-group-btn\">\r\n                            <button class=\"btn btn-default\" type=\"submit\"><i class=\"fa fa-search\"></i></button>\r\n                        </div>\r\n                    </div>\r\n                    </form>\r\n                </th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr *ngFor=\"let dataFilter of datafilterArray\">\r\n                <th>{{(dataFilter)?.SKU}}</th>\r\n                <th>{{(dataFilter)?.ProductName}}</th>\r\n                <th>{{(dataFilter)?.ApprovalStatus}}</th>\r\n                <th><img [attr.src]=\"(dataFilter)?.ImageLink\"></th>\r\n                <th>\r\n                    <button class=\"btn btn-default\" *ngIf=\"btnDetailsActivated\">Details</button>\r\n                    <button class=\"btn btn-default\" *ngIf=\"btnApprovalActivated\">Approval History</button>\r\n                </th>\r\n            </tr>\r\n        </tbody>\r\n        <tfoot>\r\n            <th colspan=\"4\"></th>\r\n            <th><button class=\"btn btn-default\" *ngIf=\"btnNewActivated\" style=\"margin: 10px;\">New</button></th>\r\n        </tfoot>\r\n    </table>\r\n</div>"

/***/ }),

/***/ "./ClientApp/app/containers/smart/manageProposal/general-info.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "th {\n  text-align: center !important;\n  vertical-align: middle !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./ClientApp/app/containers/smart/manageProposal/general-info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_menu_module_access_service__ = __webpack_require__("./ClientApp/app/services/menu/module-access.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions_login_login_action__ = __webpack_require__("./ClientApp/app/actions/login/login.action.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_menu_module_access_action__ = __webpack_require__("./ClientApp/app/actions/menu/module-access.action.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__actions_components_components_access_action__ = __webpack_require__("./ClientApp/app/actions/components/components-access.action.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MPGeneralInfoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MPGeneralInfoComponent = (function () {
    function MPGeneralInfoComponent(moduleAccessService, componentStore, loginStore, moduleStore, router) {
        this.moduleAccessService = moduleAccessService;
        this.componentStore = componentStore;
        this.loginStore = loginStore;
        this.moduleStore = moduleStore;
        this.router = router;
        this.btnNewActivated = false;
        this.btnDetailsActivated = false;
        this.btnApprovalActivated = false;
        this.datafilterArray = [];
        this.loginState = this.loginStore.select('login');
        this.moduleState = this.moduleStore.select('module');
        this.componentState = this.componentStore.select('component');
    }
    MPGeneralInfoComponent.prototype.ngOnChanges = function (changes) {
        console.log(changes);
    };
    MPGeneralInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.componentSub = this.componentState.subscribe(function (x) {
            _this.moduleSub = _this.moduleState.subscribe(function (y) {
                if (y.Permitted !== 'PERMITTED') {
                    _this.router.navigateByUrl('/tree');
                }
                _this.CreateModuleModel(y);
                console.log('ModuleStoreSubscription');
                _this.loginSub = _this.loginState.subscribe(function (z) {
                    if (z.UserLoginState !== 'AUTHORIZED') {
                        _this.router.navigateByUrl('/home');
                    }
                    _this.loginModel = z;
                    _this.ValidateUserState(z, y);
                    console.log('LoginStoreSubscription');
                });
            });
            console.log('componentStoreSubscription');
            _this.CreateComponentObj(x);
        });
    };
    MPGeneralInfoComponent.prototype.SKUSearch = function (SKUform) {
        if (SKUform.value['srch-term'] == '') {
            this.datafilterArray = this.dataPure;
        }
        else {
            this.datafilterArray = this.dataPure.filter(function (x) { return x.SKU == SKUform.value['srch-term']; });
        }
    };
    MPGeneralInfoComponent.prototype.ProductSearch = function (Productform) {
        if (Productform.value['srch-term'] == '') {
            this.datafilterArray = this.dataPure;
        }
        else {
            this.datafilterArray = this.dataPure.filter(function (x) { return x.ProductName == Productform.value['srch-term']; });
        }
    };
    MPGeneralInfoComponent.prototype.StatusSearch = function (Statusform) {
        if (Statusform.value['srch-term'] == '') {
            this.datafilterArray = this.dataPure;
        }
        else {
            this.datafilterArray = this.dataPure.filter(function (x) { return x.ApprovalStatus == Statusform.value['srch-term']; });
        }
    };
    MPGeneralInfoComponent.prototype.CreateComponentObj = function (x) {
        var _this = this;
        this.componentObj = {};
        this.componentObj.ComponentArray = x.ComponentArray;
        this.componentObj.ComponentArray.forEach(function (x) { return _this.MappingComponent(x.appStructTypId, x.IsAuthorized); });
    };
    MPGeneralInfoComponent.prototype.MappingComponent = function (name, Activate) {
        switch (name) {
            case 'General Info - MP - btnNew':
                if (Activate === __WEBPACK_IMPORTED_MODULE_6__actions_components_components_access_action__["b" /* YES */]) {
                    console.log('btnNewMP');
                    this.btnNewActivated = true;
                    break;
                }
                this.btnNewActivated = false;
                break;
            case 'General Info - MP - btnDetails':
                if (Activate === __WEBPACK_IMPORTED_MODULE_6__actions_components_components_access_action__["b" /* YES */]) {
                    console.log('btnDetailMP');
                    this.btnDetailsActivated = true;
                    break;
                }
                this.btnDetailsActivated = false;
                break;
            case 'General Info - MP - btnApprovalHistory':
                if (Activate === __WEBPACK_IMPORTED_MODULE_6__actions_components_components_access_action__["b" /* YES */]) {
                    console.log('btnApprovalMP');
                    this.btnApprovalActivated = true;
                    break;
                }
                this.btnApprovalActivated = false;
                break;
            default:
                break;
        }
    };
    MPGeneralInfoComponent.prototype.CreateModuleModel = function (x) {
        this.moduleModel = {};
        this.moduleModel = x;
    };
    MPGeneralInfoComponent.prototype.getDataFilter = function (parentId, GrpName) {
        var _this = this;
        this.moduleAccessService.GetDataFilter(parentId, GrpName).subscribe(function (x) { return (_this.datafilterArray = x); }, function (err) { return console.log(err); }, function () { return (_this.dataPure = _this.datafilterArray); });
    };
    MPGeneralInfoComponent.prototype.ValidateUserState = function (result, moduleAccessModel) {
        if (result.UserLoginState === __WEBPACK_IMPORTED_MODULE_4__actions_login_login_action__["a" /* AUTHORIZED */]) {
            if (moduleAccessModel.Permitted === __WEBPACK_IMPORTED_MODULE_5__actions_menu_module_access_action__["a" /* PERMITTED */]) {
                this.getDataFilter(this.moduleModel.ModuleId, result.GroupName);
            }
            else {
                this.router.navigateByUrl('/tree');
            }
        }
        else {
            this.router.navigateByUrl('/home');
        }
    };
    return MPGeneralInfoComponent;
}());
MPGeneralInfoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'mp-general-info',
        template: __webpack_require__("./ClientApp/app/containers/smart/manageProposal/general-info.component.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_menu_module_access_service__["a" /* ModuleAccessService */]],
        styles: [__webpack_require__("./ClientApp/app/containers/smart/manageProposal/general-info.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_menu_module_access_service__["a" /* ModuleAccessService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_menu_module_access_service__["a" /* ModuleAccessService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["g" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["g" /* Store */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["g" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["g" /* Store */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["g" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["g" /* Store */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _e || Object])
], MPGeneralInfoComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=general-info.component.js.map

/***/ }),

/***/ "./ClientApp/app/containers/smart/tree/tree.component.html":
/***/ (function(module, exports) {

module.exports = "<li *ngFor=\"let menu of MenuList\">\r\n    <a (click)=\"Route(menu.id)\">{{menu.name}}</a>\r\n    <div *ngIf=\"menu.children\">\r\n        <ul>\r\n            <tree [MenuList]=\"menu.children\"></tree>\r\n        </ul>\r\n\r\n    </div>\r\n</li>"

/***/ }),

/***/ "./ClientApp/app/containers/smart/tree/tree.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_menu_module_access_service__ = __webpack_require__("./ClientApp/app/services/menu/module-access.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_menu_module_access_action__ = __webpack_require__("./ClientApp/app/actions/menu/module-access.action.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions_components_components_access_action__ = __webpack_require__("./ClientApp/app/actions/components/components-access.action.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TreeComponent = (function () {
    function TreeComponent(ModuleService, ComponentsStore, ModuleStore, LoginStore, router) {
        this.ModuleService = ModuleService;
        this.ComponentsStore = ComponentsStore;
        this.ModuleStore = ModuleStore;
        this.LoginStore = LoginStore;
        this.router = router;
        this.componentStore = this.ComponentsStore.select('component');
        this.moduleStore = this.ModuleStore.select('module');
        this.loginStateObservable = this.LoginStore.select('login');
    }
    TreeComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        // for (let x in changes) {
        // 	let chg = changes[x];
        // 	let curr = JSON.stringify(chg.currentValue);
        // 	let prev = JSON.stringify(chg.previousValue);
        // 	console.log(chg + ' ' + curr + ' ' + prev);
        // }
        this.LoginSub = this.loginStateObservable.subscribe(function (x) { return (_this.grpName = x.GroupName); });
    };
    TreeComponent.prototype.Route = function (id) {
        var _this = this;
        var menuAccess;
        this.ModuleService
            .AuthorizeMenu(id, this.grpName)
            .subscribe(function (x) { return (menuAccess = x); }, function (err) { return console.log(err); }, function () { return _this.AccessMenu(menuAccess, id); });
    };
    TreeComponent.prototype.AccessMenu = function (menuAccess, id) {
        var _this = this;
        if (menuAccess == 'PERMITTED') {
            var URLString_1;
            var componentArray_1 = {};
            this.ModuleStore.dispatch({
                type: __WEBPACK_IMPORTED_MODULE_3__actions_menu_module_access_action__["a" /* PERMITTED */],
                payload: { ModuleId: id, Permitted: __WEBPACK_IMPORTED_MODULE_3__actions_menu_module_access_action__["a" /* PERMITTED */] }
            });
            this.ModuleService.GetComponents(id, this.grpName).subscribe(function (x) { return (componentArray_1 = x); }, function (err) { return console.log(err); }, function () {
                _this.ComponentsStore.dispatch({ type: __WEBPACK_IMPORTED_MODULE_4__actions_components_components_access_action__["a" /* UPDATE */], payload: { ComponentArray: componentArray_1 } });
                _this.ModuleService
                    .GetMenuURL(id)
                    .subscribe(function (x) { return (URLString_1 = x); }, function (err) { return console.log(err); }, function () { return _this.RedirectUrl(URLString_1); });
            });
        }
        else {
            this.ModuleStore.dispatch({ type: __WEBPACK_IMPORTED_MODULE_3__actions_menu_module_access_action__["b" /* NOT_PERMITTED */], payload: { Permitted: __WEBPACK_IMPORTED_MODULE_3__actions_menu_module_access_action__["b" /* NOT_PERMITTED */] } });
            alert('You are not Authorize to this Module');
        }
    };
    TreeComponent.prototype.RedirectUrl = function (url) {
        this.router.navigateByUrl(url);
    };
    return TreeComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], TreeComponent.prototype, "MenuList", void 0);
TreeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'tree',
        template: __webpack_require__("./ClientApp/app/containers/smart/tree/tree.component.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_menu_module_access_service__["a" /* ModuleAccessService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_menu_module_access_service__["a" /* ModuleAccessService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_menu_module_access_service__["a" /* ModuleAccessService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["g" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["g" /* Store */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["g" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["g" /* Store */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["g" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["g" /* Store */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["Router"]) === "function" && _e || Object])
], TreeComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=tree.component.js.map

/***/ }),

/***/ "./ClientApp/app/containers/smart/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<ul>-->\r\n    <!--<li [routerLinkActive]=\"['link-active']\">\r\n        <a [routerLink]=\"['/home']\">\r\n                        <span class='glyphicon glyphicon-home'></span> Home\r\n        </a>\r\n    </li>-->\r\n    <!--<li [routerLinkActive]=\"['link-active']\">\r\n        <a [routerLink]=\"['/login']\">\r\n                        <span class='glyphicon glyphicon-home'></span> Login\r\n        </a>\r\n    </li>\r\n</ul>-->\r\n<login (SubmitUserLoginEvent)=\"SubmitUserLoginEventHandler($event)\"></login>"

/***/ }),

/***/ "./ClientApp/app/containers/smart/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_login_login_action__ = __webpack_require__("./ClientApp/app/actions/login/login.action.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserComponent = (function () {
    function UserComponent(store) {
        this.store = store;
        this.userState = this.store.select('login');
    }
    UserComponent.prototype.SubmitUserLoginEventHandler = function (userLoginState) {
        if (userLoginState.UserLoginState === __WEBPACK_IMPORTED_MODULE_2__actions_login_login_action__["a" /* AUTHORIZED */]) {
            this.store.dispatch({ type: __WEBPACK_IMPORTED_MODULE_2__actions_login_login_action__["a" /* AUTHORIZED */], payload: userLoginState });
            this.StoreUserSession(userLoginState);
        }
        else if (userLoginState.UserLoginState === __WEBPACK_IMPORTED_MODULE_2__actions_login_login_action__["b" /* NOT_AUTHORIZED */]) {
            this.store.dispatch({ type: __WEBPACK_IMPORTED_MODULE_2__actions_login_login_action__["b" /* NOT_AUTHORIZED */], payload: userLoginState });
            this.StoreUserSession(userLoginState);
            alert('Not Authorized');
        }
    };
    UserComponent.prototype.StoreUserSession = function (userLoginState) {
        localStorage.clear();
        localStorage.setItem('tokenid', userLoginState.TokenId);
        localStorage.setItem('username', userLoginState.UserName);
        localStorage.setItem('groupname', userLoginState.GroupName);
        localStorage.setItem('userloginstate', userLoginState.UserLoginState);
    };
    return UserComponent;
}());
UserComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'user',
        template: __webpack_require__("./ClientApp/app/containers/smart/user/user.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["g" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["g" /* Store */]) === "function" && _a || Object])
], UserComponent);

var _a;
//# sourceMappingURL=user.component.js.map

/***/ }),

/***/ "./ClientApp/app/containers/smart/viewDetails/general-info.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-12\" style=\"padding-top: 30px;\">\r\n    <table class=\"table table-striped table-bordered table-hover dataTable no-footer dtr-inline\" id=\"dataTables-example\" role=\"grid\"\r\n        aria-describedby=\"dataTables-example_info\" style=\"width: 100%;\" width=\"100%\">\r\n        <thead>\r\n            <tr role=\"row\">\r\n                <th>SKU</th>\r\n                <th>Product Name</th>\r\n                <th>Approval Status</th>\r\n                <th rowspan=\"2\">Image</th>\r\n                <th rowspan=\"2\">Action</th>\r\n            </tr>\r\n            <tr>\r\n                <th>\r\n                    <form (ngSubmit)=\"SKUSearch(SKUform)\" #SKUform=\"ngForm\">\r\n                    <div class=\"input-group add-on\">\r\n                        <input class=\"form-control\" placeholder=\"Search\" name=\"srch-term\" ngModel id=\"srch-term\" type=\"text\">\r\n                        <div class=\"input-group-btn\">\r\n                            <button class=\"btn btn-default\" type=\"submit\"><i class=\"fa fa-search\"></i></button>\r\n                        </div>\r\n                    </div>\r\n                    </form>\r\n                </th>\r\n                <th>\r\n                    <form (ngSubmit)=\"ProductSearch(Productform)\" #Productform=\"ngForm\">\r\n                    <div class=\"input-group add-on\">\r\n                        <input class=\"form-control\" placeholder=\"Search\" name=\"srch-term\" ngModel id=\"srch-term\" type=\"text\">\r\n                        <div class=\"input-group-btn\">\r\n                            <button class=\"btn btn-default\" type=\"submit\"><i class=\"fa fa-search\"></i></button>\r\n                        </div>\r\n                    </div>\r\n                    </form>\r\n                </th>\r\n                <th>\r\n                    <form (ngSubmit)=\"StatusSearch(Statusform)\" #Statusform=\"ngForm\">\r\n                    <div class=\"input-group add-on\">\r\n                        <input class=\"form-control\" placeholder=\"Search\" name=\"srch-term\" ngModel id=\"srch-term\" type=\"text\">\r\n                        <div class=\"input-group-btn\">\r\n                            <button class=\"btn btn-default\" type=\"submit\"><i class=\"fa fa-search\"></i></button>\r\n                        </div>\r\n                    </div>\r\n                    </form>\r\n                </th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr *ngFor=\"let dataFilter of datafilterArray\">\r\n                <th>{{(dataFilter)?.SKU}}</th>\r\n                <th>{{(dataFilter)?.ProductName}}</th>\r\n                <th>{{(dataFilter)?.ApprovalStatus}}</th>\r\n                <th><img [attr.src]=\"(dataFilter)?.ImageLink\"></th>\r\n                <th>\r\n                    <button class=\"btn btn-default\" *ngIf=\"btnDetailsActivated\">Details</button>\r\n                    <button class=\"btn btn-default\" *ngIf=\"btnApprovalActivated\">Approval History</button>\r\n                </th>\r\n            </tr>\r\n        </tbody>\r\n        <tfoot>\r\n            <th colspan=\"4\"></th>\r\n            <th><button class=\"btn btn-default\" *ngIf=\"btnNewActivated\" style=\"margin: 10px;\">New</button></th>\r\n        </tfoot>\r\n    </table>\r\n</div>"

/***/ }),

/***/ "./ClientApp/app/containers/smart/viewDetails/general-info.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "th {\n  text-align: center !important;\n  vertical-align: middle !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./ClientApp/app/containers/smart/viewDetails/general-info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_menu_module_access_service__ = __webpack_require__("./ClientApp/app/services/menu/module-access.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions_login_login_action__ = __webpack_require__("./ClientApp/app/actions/login/login.action.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_menu_module_access_action__ = __webpack_require__("./ClientApp/app/actions/menu/module-access.action.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__actions_components_components_access_action__ = __webpack_require__("./ClientApp/app/actions/components/components-access.action.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VDGeneralInfoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var VDGeneralInfoComponent = (function () {
    function VDGeneralInfoComponent(moduleAccessService, componentStore, loginStore, moduleStore, router) {
        this.moduleAccessService = moduleAccessService;
        this.componentStore = componentStore;
        this.loginStore = loginStore;
        this.moduleStore = moduleStore;
        this.router = router;
        this.btnNewActivated = false;
        this.btnDetailsActivated = false;
        this.btnApprovalActivated = false;
        this.datafilterArray = [];
        this.loginState = this.loginStore.select('login');
        this.componentState = this.componentStore.select('component');
        this.moduleState = this.moduleStore.select('module');
    }
    VDGeneralInfoComponent.prototype.ngOnChanges = function (changes) {
        console.log(changes);
    };
    VDGeneralInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.componentSub = this.componentState.subscribe(function (x) {
            _this.moduleSub = _this.moduleState.subscribe(function (y) {
                if (y.Permitted !== 'PERMITTED') {
                    _this.router.navigateByUrl('/tree');
                }
                _this.CreateModuleModel(y);
                console.log('ModuleStoreSubscription');
                _this.loginSub = _this.loginState.subscribe(function (z) {
                    if (z.UserLoginState !== 'AUTHORIZED') {
                        _this.router.navigateByUrl('/home');
                    }
                    _this.loginModel = z;
                    _this.ValidateUserState(z, y);
                    console.log('LoginStoreSubscription');
                });
            });
            console.log('componentStoreSubscription');
            _this.CreateComponentObj(x);
        });
    };
    VDGeneralInfoComponent.prototype.SKUSearch = function (SKUform) {
        if (SKUform.value['srch-term'] == '') {
            this.datafilterArray = this.dataPure;
        }
        else {
            this.datafilterArray = this.dataPure.filter(function (x) { return x.SKU == SKUform.value['srch-term']; });
        }
    };
    VDGeneralInfoComponent.prototype.ProductSearch = function (Productform) {
        if (Productform.value['srch-term'] == '') {
            this.datafilterArray = this.dataPure;
        }
        else {
            this.datafilterArray = this.dataPure.filter(function (x) { return x.ProductName == Productform.value['srch-term']; });
        }
    };
    VDGeneralInfoComponent.prototype.StatusSearch = function (Statusform) {
        if (Statusform.value['srch-term'] == '') {
            this.datafilterArray = this.dataPure;
        }
        else {
            this.datafilterArray = this.dataPure.filter(function (x) { return x.ApprovalStatus == Statusform.value['srch-term']; });
        }
    };
    VDGeneralInfoComponent.prototype.CreateComponentObj = function (x) {
        var _this = this;
        this.componentObj = {};
        this.componentObj.ComponentArray = x.ComponentArray;
        this.componentObj.ComponentArray.forEach(function (x) { return _this.MappingComponent(x.appStructTypId, x.IsAuthorized); });
    };
    VDGeneralInfoComponent.prototype.MappingComponent = function (name, Activate) {
        switch (name) {
            case 'General Info - View Details - btnNew':
                if (Activate === __WEBPACK_IMPORTED_MODULE_6__actions_components_components_access_action__["b" /* YES */]) {
                    this.btnNewActivated = true;
                    break;
                }
                this.btnNewActivated = false;
                break;
            case 'General Info - View Details - btnDetails':
                if (Activate === __WEBPACK_IMPORTED_MODULE_6__actions_components_components_access_action__["b" /* YES */]) {
                    this.btnDetailsActivated = true;
                    break;
                }
                this.btnDetailsActivated = false;
                break;
            case 'General Info - View Details - btnApprovalHistory':
                if (Activate === __WEBPACK_IMPORTED_MODULE_6__actions_components_components_access_action__["b" /* YES */]) {
                    this.btnApprovalActivated = true;
                    break;
                }
                this.btnApprovalActivated = false;
                break;
            default:
                break;
        }
    };
    VDGeneralInfoComponent.prototype.CreateModuleModel = function (x) {
        this.moduleModel = {};
        this.moduleModel = x;
    };
    VDGeneralInfoComponent.prototype.getDataFilter = function (parentId, GrpName) {
        var _this = this;
        this.moduleAccessService
            .GetDataFilter(parentId, GrpName)
            .subscribe(function (x) { return (_this.datafilterArray = x); }, function (err) { return console.log(err); }, function () { return (_this.dataPure = _this.datafilterArray); });
    };
    VDGeneralInfoComponent.prototype.ValidateUserState = function (result, moduleAccessModel) {
        if (result.UserLoginState === __WEBPACK_IMPORTED_MODULE_4__actions_login_login_action__["a" /* AUTHORIZED */]) {
            if (moduleAccessModel.Permitted === __WEBPACK_IMPORTED_MODULE_5__actions_menu_module_access_action__["a" /* PERMITTED */]) {
                this.getDataFilter(this.moduleModel.ModuleId, result.GroupName);
            }
            else {
                this.router.navigateByUrl('/tree');
            }
        }
        else {
            this.router.navigateByUrl('/home');
        }
    };
    return VDGeneralInfoComponent;
}());
VDGeneralInfoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'vd-general-info',
        template: __webpack_require__("./ClientApp/app/containers/smart/viewDetails/general-info.component.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_menu_module_access_service__["a" /* ModuleAccessService */]],
        styles: [__webpack_require__("./ClientApp/app/containers/smart/viewDetails/general-info.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_menu_module_access_service__["a" /* ModuleAccessService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_menu_module_access_service__["a" /* ModuleAccessService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["g" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["g" /* Store */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["g" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["g" /* Store */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["g" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["g" /* Store */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _e || Object])
], VDGeneralInfoComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=general-info.component.js.map

/***/ }),

/***/ "./ClientApp/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authorize_user_login_service__ = __webpack_require__("./ClientApp/app/services/authorize/user-login.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('tokenid')) {
            if (this.authService.sessionUser(localStorage.getItem('tokenid'))) {
                return true;
            }
            return false;
        }
        else {
            this.router.navigate(['/home']);
            return false;
        }
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_authorize_user_login_service__["a" /* UserLoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_authorize_user_login_service__["a" /* UserLoginService */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "./ClientApp/app/reducers/components/components.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__states_components_components_state_model__ = __webpack_require__("./ClientApp/app/states/components/components-state.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_components_components_access_action__ = __webpack_require__("./ClientApp/app/actions/components/components-access.action.ts");
/* harmony export (immutable) */ __webpack_exports__["a"] = ComponentsReducer;


function ComponentsReducer(state, action) {
    if (state === void 0) { state = __WEBPACK_IMPORTED_MODULE_0__states_components_components_state_model__["a" /* INITIAL_STATE */]; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_1__actions_components_components_access_action__["a" /* UPDATE */]:
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
}
//# sourceMappingURL=components.reducer.js.map

/***/ }),

/***/ "./ClientApp/app/reducers/login/login.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__states_login_models_login_state_model__ = __webpack_require__("./ClientApp/app/states/login/models/login-state.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_login_login_action__ = __webpack_require__("./ClientApp/app/actions/login/login.action.ts");
/* harmony export (immutable) */ __webpack_exports__["a"] = LoginReducer;


function LoginReducer(state, action) {
    if (state === void 0) { state = __WEBPACK_IMPORTED_MODULE_0__states_login_models_login_state_model__["a" /* INITIAL_STATE */]; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_1__actions_login_login_action__["a" /* AUTHORIZED */]:
            return Object.assign({}, state, action.payload);
        case __WEBPACK_IMPORTED_MODULE_1__actions_login_login_action__["b" /* NOT_AUTHORIZED */]:
            return Object.assign({}, state, action.payload);
        case __WEBPACK_IMPORTED_MODULE_1__actions_login_login_action__["c" /* LOAD_SESSION */]:
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
}
//# sourceMappingURL=login.reducer.js.map

/***/ }),

/***/ "./ClientApp/app/reducers/menu/module-access.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__states_menu_models_module_access_model__ = __webpack_require__("./ClientApp/app/states/menu/models/module-access.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_menu_module_access_action__ = __webpack_require__("./ClientApp/app/actions/menu/module-access.action.ts");
/* harmony export (immutable) */ __webpack_exports__["a"] = ModuleReducer;


function ModuleReducer(state, action) {
    if (state === void 0) { state = __WEBPACK_IMPORTED_MODULE_0__states_menu_models_module_access_model__["a" /* INITIAL_STATE */]; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_1__actions_menu_module_access_action__["a" /* PERMITTED */]:
            return Object.assign({}, state, action.payload);
        case __WEBPACK_IMPORTED_MODULE_1__actions_menu_module_access_action__["b" /* NOT_PERMITTED */]:
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
}
//# sourceMappingURL=module-access.reducer.js.map

/***/ }),

/***/ "./ClientApp/app/routes/app-route.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__consts_route_const__ = __webpack_require__("./ClientApp/app/consts/route.const.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Const

var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forRoot(__WEBPACK_IMPORTED_MODULE_2__consts_route_const__["a" /* appRoutes */], { enableTracing: true })],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-route.module.js.map

/***/ }),

/***/ "./ClientApp/app/services/authorize/user-login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserLoginService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// Angular Dependencies



var UserLoginService = (function () {
    function UserLoginService(http, originUrl) {
        this.http = http;
        this.originUrl = originUrl;
    }
    UserLoginService.prototype.authorizeUser = function (userLoginModel) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http
            .post('http://localhost:51150/api/APIAuthentication/AuthorizeUser/', userLoginModel, { headers: headers })
            .map(function (result) { return result.json(); });
    };
    UserLoginService.prototype.sessionUser = function (tokenId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http
            .post('http://localhost:51150/api/APIAuthentication/SessionAuth/', tokenId, { headers: headers })
            .map(function (result) { return result.json(); });
    };
    return UserLoginService;
}());
UserLoginService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"])('ORIGIN_URL')),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* Http */]) === "function" && _a || Object, String])
], UserLoginService);

var _a;
//# sourceMappingURL=user-login.service.js.map

/***/ }),

/***/ "./ClientApp/app/services/menu/module-access.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModuleAccessService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Angular Dependencies



var ModuleAccessService = (function () {
    function ModuleAccessService(http) {
        this.http = http;
    }
    ModuleAccessService.prototype.GetModuleList = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Headers */]();
        headers.append('Access-Control-Allow-Headers', 'origin, content-type, accept');
        headers.append('Access-Control-Allow-Methods', 'GET');
        headers.append('Access-Control-Allow-Origin', '*');
        return this.http
            .get('http://localhost:57973/api/APIModule/GetERPModule/', { headers: headers })
            .map(function (result) { return result.json(); });
    };
    ModuleAccessService.prototype.AuthorizeMenu = function (appId, grpName) {
        var menuGroupAuth = {};
        menuGroupAuth.AppId = appId;
        menuGroupAuth.GroupName = grpName;
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Allow-Headers', 'origin, content-type, accept');
        headers.append('Access-Control-Allow-Methods', '*');
        headers.append('Access-Control-Allow-Origin', '*');
        return this.http
            .post('http://localhost:57973/api/APIModule/CheckAccessMenu/', menuGroupAuth, { headers: headers })
            .map(function (x) { return x.json(); });
    };
    ModuleAccessService.prototype.GetMenuURL = function (appId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Allow-Headers', 'origin, content-type, accept');
        headers.append('Access-Control-Allow-Methods', '*');
        headers.append('Access-Control-Allow-Origin', '*');
        return this.http
            .post('http://localhost:57973/api/APIModule/GetURLMenu/', appId, { headers: headers })
            .map(function (x) { return x.json(); });
    };
    ModuleAccessService.prototype.GetComponents = function (ParentId, grpName) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Allow-Headers', 'origin, content-type, accept');
        headers.append('Access-Control-Allow-Methods', '*');
        headers.append('Access-Control-Allow-Origin', '*');
        var componentModel = {};
        componentModel.ParentId = ParentId;
        componentModel.GroupName = grpName;
        return this.http
            .post('http://localhost:57973/api/APIModule/GetComponents/', componentModel, { headers: headers })
            .map(function (x) { return x.json(); });
    };
    ModuleAccessService.prototype.GetWorkFlowDPTFOOD = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Headers */]();
        headers.append('Access-Control-Allow-Headers', 'origin, content-type, accept');
        headers.append('Access-Control-Allow-Methods', 'GET');
        headers.append('Access-Control-Allow-Origin', '*');
        return this.http
            .get('http://localhost:57973/api/APIModule/GetWorkFlowDPTFOOD/', { headers: headers })
            .map(function (result) { return result.json(); });
    };
    ModuleAccessService.prototype.GetWorkFlowDIVBUYER = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Headers */]();
        headers.append('Access-Control-Allow-Headers', 'origin, content-type, accept');
        headers.append('Access-Control-Allow-Methods', 'GET');
        headers.append('Access-Control-Allow-Origin', '*');
        return this.http
            .get('http://localhost:57973/api/APIModule/GetWorkFlowDIVBUYER/', { headers: headers })
            .map(function (result) { return result.json(); });
    };
    ModuleAccessService.prototype.GetDataFilter = function (ParentId, grpName) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Allow-Headers', 'origin, content-type, accept');
        headers.append('Access-Control-Allow-Methods', '*');
        headers.append('Access-Control-Allow-Origin', '*');
        var componentModel = {};
        componentModel.ParentId = ParentId;
        componentModel.GroupName = grpName;
        return this.http
            .post('http://localhost:57973/api/APIModule/GetFilter/', componentModel, { headers: headers })
            .map(function (x) { return x.json(); });
    };
    return ModuleAccessService;
}());
ModuleAccessService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* Http */]) === "function" && _a || Object])
], ModuleAccessService);

var _a;
//# sourceMappingURL=module-access.service.js.map

/***/ }),

/***/ "./ClientApp/app/states/components/components-state.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return INITIAL_STATE; });
/* unused harmony export ComponentsStateModel */
var INITIAL_STATE = {
    ComponentArray: undefined
};
var ComponentsStateModel = (function () {
    function ComponentsStateModel(ComponentArray) {
        this.ComponentArray = ComponentArray;
    }
    return ComponentsStateModel;
}());

//# sourceMappingURL=components-state.model.js.map

/***/ }),

/***/ "./ClientApp/app/states/login/models/login-state.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_login_login_action__ = __webpack_require__("./ClientApp/app/actions/login/login.action.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return INITIAL_STATE; });
/* unused harmony export LoginStateModel */

var INITIAL_STATE = {
    UserName: undefined,
    GroupName: undefined,
    UserLoginState: __WEBPACK_IMPORTED_MODULE_0__actions_login_login_action__["b" /* NOT_AUTHORIZED */],
    TokenId: undefined
};
var LoginStateModel = (function () {
    function LoginStateModel(UserName, GroupName, UserLoginState, TokenId) {
        this.UserName = UserName;
        this.GroupName = GroupName;
        this.UserLoginState = UserLoginState;
        this.TokenId = TokenId;
    }
    return LoginStateModel;
}());

//# sourceMappingURL=login-state.model.js.map

/***/ }),

/***/ "./ClientApp/app/states/menu/models/module-access.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_menu_module_access_action__ = __webpack_require__("./ClientApp/app/actions/menu/module-access.action.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return INITIAL_STATE; });
/* unused harmony export ModuleAccessModel */

var INITIAL_STATE = {
    ModuleId: undefined,
    Permitted: __WEBPACK_IMPORTED_MODULE_0__actions_menu_module_access_action__["b" /* NOT_PERMITTED */]
};
var ModuleAccessModel = (function () {
    function ModuleAccessModel(ModuleId, Permitted) {
        this.ModuleId = ModuleId;
        this.Permitted = Permitted;
    }
    return ModuleAccessModel;
}());

//# sourceMappingURL=module-access.model.js.map

/***/ }),

/***/ "./ClientApp/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "./ClientApp/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./ClientApp/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./ClientApp/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./ClientApp/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map