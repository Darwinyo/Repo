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
var router_1 = require("@angular/router");
var module_access_service_1 = require("../../../services/menu/module-access.service");
var store_1 = require("@ngrx/store");
var login_action_1 = require("../../../actions/login/login.action");
var module_access_action_1 = require("../../../actions/menu/module-access.action");
var components_access_action_1 = require("../../../actions/components/components-access.action");
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
                if (Activate === components_access_action_1.YES) {
                    console.log('btnNewMP');
                    this.btnNewActivated = true;
                    break;
                }
                this.btnNewActivated = false;
                break;
            case 'General Info - MP - btnDetails':
                if (Activate === components_access_action_1.YES) {
                    console.log('btnDetailMP');
                    this.btnDetailsActivated = true;
                    break;
                }
                this.btnDetailsActivated = false;
                break;
            case 'General Info - MP - btnApprovalHistory':
                if (Activate === components_access_action_1.YES) {
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
        if (result.UserLoginState === login_action_1.AUTHORIZED) {
            if (moduleAccessModel.Permitted === module_access_action_1.PERMITTED) {
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
    core_1.Component({
        selector: 'mp-general-info',
        templateUrl: './general-info.component.html',
        providers: [module_access_service_1.ModuleAccessService],
        styleUrls: ['./general-info.component.scss']
    }),
    __metadata("design:paramtypes", [module_access_service_1.ModuleAccessService,
        store_1.Store,
        store_1.Store,
        store_1.Store,
        router_1.Router])
], MPGeneralInfoComponent);
exports.MPGeneralInfoComponent = MPGeneralInfoComponent;
//# sourceMappingURL=general-info.component.js.map