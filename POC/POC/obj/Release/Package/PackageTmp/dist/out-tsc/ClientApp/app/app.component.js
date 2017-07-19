"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var store_1 = require("@ngrx/store");
var login_action_1 = require("./actions/login/login.action");
var AppComponent = (function () {
    function AppComponent(store) {
        this.store = store;
        this.userLogin = 'Anonymous';
        this.isLogged = false;
        this.title = 'app';
        this.loginStateObservable = this.store.select('login');
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.stateSubscription = this.loginStateObservable.subscribe(function (result) { return _this.ValidateUserState(result); });
    };
    AppComponent.prototype.ngOnDestroy = function () {
    };
    AppComponent.prototype.ValidateUserState = function (result) {
        if (result.UserLoginState === login_action_1.AUTHORIZED) {
            this.isLogged = true;
        }
        this.loginState = result;
        this.userLogin = result.UserName;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.scss']
    }),
    __metadata("design:paramtypes", [store_1.Store])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map