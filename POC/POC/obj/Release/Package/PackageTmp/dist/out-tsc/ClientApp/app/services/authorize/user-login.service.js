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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// Angular Dependencies
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
require("rxjs/add/operator/map");
var UserLoginService = (function () {
    function UserLoginService(http, originUrl) {
        this.http = http;
        this.originUrl = originUrl;
    }
    UserLoginService.prototype.authorizeUser = function (userLoginModel) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http
            .post('http://localhost:51150/api/APIAuthentication/AuthorizeUser/', userLoginModel, { headers: headers })
            .map(function (result) { return result.json(); });
    };
    return UserLoginService;
}());
UserLoginService = __decorate([
    core_1.Injectable(),
    __param(1, core_1.Inject('ORIGIN_URL')),
    __metadata("design:paramtypes", [http_1.Http, String])
], UserLoginService);
exports.UserLoginService = UserLoginService;
//# sourceMappingURL=user-login.service.js.map