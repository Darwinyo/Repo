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
var router_1 = require("@angular/router");
var module_access_service_1 = require("../../../services/menu/module-access.service");
var store_1 = require("@ngrx/store");
var login_action_1 = require("../../../actions/login/login.action");
var module_access_action_1 = require("../../../actions/menu/module-access.action");
var components_access_action_1 = require("../../../actions/components/components-access.action");
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
                if (Activate === components_access_action_1.YES) {
                    this.btnApproveActivated = true;
                    console.log(this.btnApprovalActivated.valueOf);
                    break;
                }
                this.btnApproveActivated = false;
                break;
            case 'General Info - MA - btnReject':
                console.log('btnReject');
                if (Activate === components_access_action_1.YES) {
                    this.btnRejectActivated = true;
                    console.log(this.btnRejectActivated.valueOf);
                    break;
                }
                this.btnRejectActivated = false;
                break;
            case 'General Info - MA - btnDetails':
                console.log('btnDetail');
                if (Activate === components_access_action_1.YES) {
                    this.btnDetailsActivated = true;
                    console.log(this.btnDetailsActivated.valueOf);
                    break;
                }
                this.btnDetailsActivated = false;
                break;
            case 'General Info - MA - btnApprovalHistory':
                console.log('btnHistory');
                if (Activate === components_access_action_1.YES) {
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
        if (result.UserLoginState === login_action_1.AUTHORIZED) {
            console.log('validateUserAuth');
            if (moduleAccessModel.Permitted === module_access_action_1.PERMITTED) {
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
    core_1.Component({
        selector: 'ma-general-info',
        templateUrl: './general-info.component.html',
        providers: [module_access_service_1.ModuleAccessService],
        styleUrls: ['./general-info.component.scss']
    }),
    __metadata("design:paramtypes", [module_access_service_1.ModuleAccessService,
        store_1.Store,
        store_1.Store,
        store_1.Store,
        router_1.Router])
], MAGeneralInfoComponent);
exports.MAGeneralInfoComponent = MAGeneralInfoComponent;
//# sourceMappingURL=general-info.component.js.map