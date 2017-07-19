"use strict";
var login_state_model_1 = require("../../states/login/models/login-state.model");
var LoginActions = require("../../actions/login/login.action");
function LoginReducer(state, action) {
    if (state === void 0) { state = login_state_model_1.INITIAL_STATE; }
    switch (action.type) {
        case LoginActions.AUTHORIZED:
            return Object.assign({}, state, action.payload);
        case LoginActions.NOT_AUTHORIZED:
            return Object.assign({}, state, action.payload);
        case LoginActions.LOAD_SESSION:
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
}
exports.LoginReducer = LoginReducer;
//# sourceMappingURL=login.reducer.js.map