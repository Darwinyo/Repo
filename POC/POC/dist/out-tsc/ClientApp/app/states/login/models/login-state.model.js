"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var login_action_1 = require("../../../actions/login/login.action");
exports.INITIAL_STATE = {
    UserName: undefined,
    GroupName: undefined,
    UserLoginState: login_action_1.NOT_AUTHORIZED,
    TokenId: undefined
};
var LoginStateModel = (function () {
    function LoginStateModel(UserName, GroupName, UserLoginState, TokenId) {
        this.UserName = UserName;
        this.GroupName = GroupName;
        this.UserLoginState = UserLoginState;
        this.TokenId = TokenId;
    }
    return LoginStateModel;
}());
exports.LoginStateModel = LoginStateModel;
//# sourceMappingURL=login-state.model.js.map