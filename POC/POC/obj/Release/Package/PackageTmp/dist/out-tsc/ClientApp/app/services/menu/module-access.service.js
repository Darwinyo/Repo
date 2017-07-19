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
// Angular Dependencies
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
require("rxjs/add/operator/map");
var ModuleAccessService = (function () {
    function ModuleAccessService(http) {
        this.http = http;
    }
    ModuleAccessService.prototype.GetModuleList = function () {
        var headers = new http_1.Headers();
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
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Allow-Headers', 'origin, content-type, accept');
        headers.append('Access-Control-Allow-Methods', '*');
        headers.append('Access-Control-Allow-Origin', '*');
        return this.http
            .post('http://localhost:57973/api/APIModule/CheckAccessMenu/', menuGroupAuth, { headers: headers })
            .map(function (x) { return x.json(); });
    };
    ModuleAccessService.prototype.GetMenuURL = function (appId) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Allow-Headers', 'origin, content-type, accept');
        headers.append('Access-Control-Allow-Methods', '*');
        headers.append('Access-Control-Allow-Origin', '*');
        return this.http
            .post('http://localhost:57973/api/APIModule/GetURLMenu/', appId, { headers: headers })
            .map(function (x) { return x.json(); });
    };
    ModuleAccessService.prototype.GetComponents = function (ParentId, grpName) {
        var headers = new http_1.Headers();
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
        var headers = new http_1.Headers();
        headers.append('Access-Control-Allow-Headers', 'origin, content-type, accept');
        headers.append('Access-Control-Allow-Methods', 'GET');
        headers.append('Access-Control-Allow-Origin', '*');
        return this.http
            .get('http://localhost:57973/api/APIModule/GetWorkFlowDPTFOOD/', { headers: headers })
            .map(function (result) { return result.json(); });
    };
    ModuleAccessService.prototype.GetWorkFlowDIVBUYER = function () {
        var headers = new http_1.Headers();
        headers.append('Access-Control-Allow-Headers', 'origin, content-type, accept');
        headers.append('Access-Control-Allow-Methods', 'GET');
        headers.append('Access-Control-Allow-Origin', '*');
        return this.http
            .get('http://localhost:57973/api/APIModule/GetWorkFlowDIVBUYER/', { headers: headers })
            .map(function (result) { return result.json(); });
    };
    ModuleAccessService.prototype.GetDataFilter = function (ParentId, grpName) {
        var headers = new http_1.Headers();
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
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ModuleAccessService);
exports.ModuleAccessService = ModuleAccessService;
//# sourceMappingURL=module-access.service.js.map