"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var components_state_model_1 = require("../../states/components/components-state.model");
var ComponentsAccessAction = require("../../actions/components/components-access.action");
function ComponentsReducer(state, action) {
    if (state === void 0) { state = components_state_model_1.INITIAL_STATE; }
    switch (action.type) {
        case ComponentsAccessAction.UPDATE:
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
}
exports.ComponentsReducer = ComponentsReducer;
//# sourceMappingURL=components.reducer.js.map