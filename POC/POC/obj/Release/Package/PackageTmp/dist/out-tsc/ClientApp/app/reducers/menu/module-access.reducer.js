"use strict";
var module_access_model_1 = require("../../states/menu/models/module-access.model");
var ModuleAccessActions = require("../../actions/menu/module-access.action");
function ModuleReducer(state, action) {
    if (state === void 0) { state = module_access_model_1.INITIAL_STATE; }
    switch (action.type) {
        case ModuleAccessActions.PERMITTED:
            return Object.assign({}, state, action.payload);
        case ModuleAccessActions.NOT_PERMITTED:
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
}
exports.ModuleReducer = ModuleReducer;
//# sourceMappingURL=module-access.reducer.js.map