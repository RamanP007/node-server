"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const outerRoute_1 = require("./outerRoute");
class RoutesCustom {
    constructor(app) {
        app.use('/', outerRoute_1.router);
    }
}
exports.default = RoutesCustom;
//# sourceMappingURL=index.js.map