"use strict";
var login_action_1 = require("../../../actions/login/login.action");
exports.INITIAL_STATE = {
    UserName: undefined,
    GroupName: undefined,
    UserLoginState: login_action_1.NOT_AUTHORIZED
};
var LoginStateModel = (function () {
    function LoginStateModel(UserName, GroupName, UserLoginState) {
        this.UserName = UserName;
        this.GroupName = GroupName;
        this.UserLoginState = UserLoginState;
    }
    return LoginStateModel;
}());
exports.LoginStateModel = LoginStateModel;
//# sourceMappingURL=login-state.model.js.map