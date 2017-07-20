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
var module_access_service_1 = require("../../../services/menu/module-access.service");
var core_1 = require("@angular/core");
var store_1 = require("@ngrx/store");
var ModuleActions = require("../../../actions/menu/module-access.action");
var ComponentsActions = require("../../../actions/components/components-access.action");
var router_1 = require("@angular/router");
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
                type: ModuleActions.PERMITTED,
                payload: { ModuleId: id, Permitted: ModuleActions.PERMITTED }
            });
            this.ModuleService.GetComponents(id, this.grpName).subscribe(function (x) { return (componentArray_1 = x); }, function (err) { return console.log(err); }, function () {
                _this.ComponentsStore.dispatch({
                    type: ComponentsActions.UPDATE,
                    payload: { ComponentArray: componentArray_1 }
                });
                _this.ModuleService
                    .GetMenuURL(id)
                    .subscribe(function (x) { return (URLString_1 = x); }, function (err) { return console.log(err); }, function () { return _this.RedirectUrl(URLString_1); });
            });
        }
        else {
            this.ModuleStore.dispatch({
                type: ModuleActions.NOT_PERMITTED,
                payload: { Permitted: ModuleActions.NOT_PERMITTED }
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
    core_1.Input(),
    __metadata("design:type", Array)
], TreeViewComponent.prototype, "MenuList", void 0);
TreeViewComponent = __decorate([
    core_1.Component({
        selector: 'tree-view',
        templateUrl: './tree-view.component.html',
        providers: [module_access_service_1.ModuleAccessService]
    }),
    __metadata("design:paramtypes", [module_access_service_1.ModuleAccessService,
        store_1.Store,
        store_1.Store,
        store_1.Store,
        router_1.Router])
], TreeViewComponent);
exports.TreeViewComponent = TreeViewComponent;
//# sourceMappingURL=tree-view.component.js.map