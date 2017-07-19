"use strict";
var app_po_1 = require("./app.po");
describe('angular-cli App', function () {
    var page;
    beforeEach(function () {
        page = new app_po_1.AngularCliPage();
    });
    it('should display welcome message', function () {
        page.navigateTo();
        expect(page.getParagraphText()).toEqual('Welcome to app!!');
    });
});
//# sourceMappingURL=app.e2e-spec.js.map