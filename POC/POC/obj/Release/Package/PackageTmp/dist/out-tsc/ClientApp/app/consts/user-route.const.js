"use strict";
// Container-Dumb
var login_component_1 = require("../containers/dumb/login/login.component");
var user_component_1 = require("../containers/smart/user/user.component");
exports.userRoutes = [
    { path: '', component: user_component_1.UserComponent },
    { path: 'login', component: login_component_1.LoginComponent }
];
//# sourceMappingURL=user-route.const.js.map