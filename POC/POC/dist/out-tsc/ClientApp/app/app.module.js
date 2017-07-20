"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Temporary
// Container-Dumb
var login_component_1 = require("./containers/dumb/login/login.component");
// Container-Smart
var user_component_1 = require("./containers/smart/user/user.component");
var general_info_component_1 = require("./containers/smart/viewDetails/general-info.component");
var general_info_component_2 = require("./containers/smart/manageProposal/general-info.component");
var general_info_component_3 = require("./containers/smart/manageApproval/general-info.component");
// services
var user_login_service_1 = require("./services/authorize/user-login.service");
//
// Components
var navmenu_component_1 = require("./components/navmenu/navmenu.component");
var sidenavmenu_component_1 = require("./components/sidenavmenu/sidenavmenu.component");
// Container-Dumb
var home_component_1 = require("./containers/dumb/home/home.component");
var page_not_found_component_1 = require("./containers/dumb/page-not-found/page-not-found.component");
var tree_view_component_1 = require("./containers/dumb/tree-view/tree-view.component");
var tree_component_1 = require("./containers/smart/tree/tree.component");
// Module
var app_route_module_1 = require("./routes/app-route.module");
// import { UserModule } from './modules/user.module';
// Reducers
var login_reducer_1 = require("./reducers/login/login.reducer");
var components_reducer_1 = require("./reducers/components/components.reducer");
var module_access_reducer_1 = require("./reducers/menu/module-access.reducer");
// Const
// Third-Party
var store_1 = require("@ngrx/store");
var store_devtools_1 = require("@ngrx/store-devtools");
var primeng_1 = require("primeng/primeng");
// Angular Dependencies
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            // Container-Dumb
            login_component_1.LoginComponent,
            // Container-Smart
            user_component_1.UserComponent,
            app_component_1.AppComponent,
            //Components
            navmenu_component_1.NavMenuComponent,
            sidenavmenu_component_1.SideNavMenuComponent,
            // Container-Dumb
            home_component_1.HomeComponent,
            page_not_found_component_1.PageNotFoundComponent,
            tree_component_1.TreeComponent,
            tree_view_component_1.TreeViewComponent,
            general_info_component_1.VDGeneralInfoComponent,
            general_info_component_3.MAGeneralInfoComponent,
            general_info_component_2.MPGeneralInfoComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            primeng_1.TreeModule,
            store_1.StoreModule.provideStore({ 'login': login_reducer_1.LoginReducer, 'component': components_reducer_1.ComponentsReducer, 'module': module_access_reducer_1.ModuleReducer }),
            store_devtools_1.StoreDevtoolsModule.instrumentOnlyWithExtension({}),
            // UserModule,
            http_1.HttpModule,
            app_route_module_1.AppRoutingModule
        ],
        providers: [{ provide: 'ORIGIN_URL', useValue: location.origin }, user_login_service_1.UserLoginService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map