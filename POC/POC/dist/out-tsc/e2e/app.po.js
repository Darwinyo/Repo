"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var AngularCliPage = (function () {
    function AngularCliPage() {
    }
    AngularCliPage.prototype.navigateTo = function () {
        return protractor_1.browser.get('/');
    };
    AngularCliPage.prototype.getParagraphText = function () {
        return protractor_1.element(protractor_1.by.css('app-root h1')).getText();
    };
    return AngularCliPage;
}());
exports.AngularCliPage = AngularCliPage;
//# sourceMappingURL=app.po.js.map