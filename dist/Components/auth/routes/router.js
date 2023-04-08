"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controller_1 = __importDefault(require("../controller"));
const router = express_1.default.Router();
const auth = new controller_1.default;
router.get("/", (req, res) => {
    res.send("Welcome to Real world");
});
router.post("/register", auth.register);
router.post("/login", auth.login);
exports.default = router;
//# sourceMappingURL=router.js.map