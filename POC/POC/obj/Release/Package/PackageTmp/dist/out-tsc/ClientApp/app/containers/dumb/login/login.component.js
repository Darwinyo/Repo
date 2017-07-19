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
var user_login_service_1 = require("../../../services/authorize/user-login.service");
var LoginComponent = (function () {
    function LoginComponent(userLoginService) {
        this.userLoginService = userLoginService;
        this.SubmitUserLoginEvent = new core_1.EventEmitter();
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
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], LoginComponent.prototype, "SubmitUserLoginEvent", void 0);
LoginComponent = __decorate([
    core_1.Component({
        selector: 'login',
        templateUrl: './login.component.html',
        providers: [user_login_service_1.UserLoginService]
    }),
    __metadata("design:paramtypes", [user_login_service_1.UserLoginService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map