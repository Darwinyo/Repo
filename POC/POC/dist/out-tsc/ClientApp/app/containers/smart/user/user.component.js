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
var LoginActions = require("../../../actions/login/login.action");
var UserComponent = (function () {
    function UserComponent(store) {
        this.store = store;
        this.userState = this.store.select('login');
    }
    UserComponent.prototype.SubmitUserLoginEventHandler = function (userLoginState) {
        if (userLoginState.UserLoginState === LoginActions.AUTHORIZED) {
            this.store.dispatch({ type: LoginActions.AUTHORIZED, payload: userLoginState });
            this.StoreUserSession(userLoginState);
        }
        else if (userLoginState.UserLoginState === LoginActions.NOT_AUTHORIZED) {
            this.store.dispatch({ type: LoginActions.NOT_AUTHORIZED, payload: userLoginState });
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
    core_1.Component({
        selector: 'user',
        templateUrl: './user.component.html'
    }),
    __metadata("design:paramtypes", [store_1.Store])
], UserComponent);
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.component.js.map