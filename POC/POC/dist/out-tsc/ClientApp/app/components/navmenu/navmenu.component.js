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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var store_1 = require("@ngrx/store");
var LoginActions = require("../../actions/login/login.action");
var NavMenuComponent = (function () {
    function NavMenuComponent(store) {
        this.store = store;
        this.userState = this.store.select('login');
    }
    NavMenuComponent.prototype.SignOut = function () {
        var user = {};
        user.GroupName = null;
        user.TokenId = null;
        user.UserLoginState = LoginActions.NOT_AUTHORIZED;
        user.UserName = null;
        localStorage.clear();
        this.store.dispatch({ type: LoginActions.NOT_AUTHORIZED, payload: user });
    };
    return NavMenuComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], NavMenuComponent.prototype, "userName", void 0);
NavMenuComponent = __decorate([
    core_1.Component({
        selector: 'nav-menu',
        templateUrl: './navmenu.component.html',
        styleUrls: ['./navmenu.component.scss']
    }),
    __metadata("design:paramtypes", [store_1.Store])
], NavMenuComponent);
exports.NavMenuComponent = NavMenuComponent;
//# sourceMappingURL=navmenu.component.js.map