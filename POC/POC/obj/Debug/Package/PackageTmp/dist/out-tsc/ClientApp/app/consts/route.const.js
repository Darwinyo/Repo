"use strict";
// Container-Dumb
var home_component_1 = require("../containers/dumb/home/home.component");
var page_not_found_component_1 = require("../containers/dumb/page-not-found/page-not-found.component");
var tree_view_component_1 = require("../containers/dumb/tree-view/tree-view.component");
var general_info_component_1 = require("../containers/smart/viewDetails/general-info.component");
var general_info_component_2 = require("../containers/smart/manageProposal/general-info.component");
var general_info_component_3 = require("../containers/smart/manageApproval/general-info.component");
exports.appRoutes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'tree', component: tree_view_component_1.TreeViewComponent },
    { path: 'ma-general-info', component: general_info_component_3.MAGeneralInfoComponent },
    { path: 'vd-general-info', component: general_info_component_1.VDGeneralInfoComponent },
    { path: 'mp-general-info', component: general_info_component_2.MPGeneralInfoComponent },
    //   {
    //     path: 'heroes',
    //     component: HeroListComponent,
    //     data: { title: 'Heroes List' }
    //   },
    //   { path: '',
    //     redirectTo: '/heroes',
    //     pathMatch: 'full'
    //   },
    { path: '**', component: page_not_found_component_1.PageNotFoundComponent }
];
//# sourceMappingURL=route.const.js.map