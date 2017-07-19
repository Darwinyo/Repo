"use strict";
var ModuleAccessAction = require("../../../actions/menu/module-access.action");
exports.INITIAL_STATE = {
    ModuleId: undefined,
    Permitted: ModuleAccessAction.NOT_PERMITTED
};
var ModuleAccessModel = (function () {
    function ModuleAccessModel(ModuleId, Permitted) {
        this.ModuleId = ModuleId;
        this.Permitted = Permitted;
    }
    return ModuleAccessModel;
}());
exports.ModuleAccessModel = ModuleAccessModel;
//# sourceMappingURL=module-access.model.js.map