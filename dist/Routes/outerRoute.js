"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const outerController_1 = require("../Controllers/outerController");
const outer = new outerController_1.OuterController();
exports.router = express_1.default.Router();
exports.router.get("/", outer.welcomeUser);
exports.router.get("/register", outer.register);
//# sourceMappingURL=outerRoute.js.map