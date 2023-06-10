"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const service_1 = __importDefault(require("./service"));
const messages_1 = __importDefault(require("./messages"));
class AuthController {
    constructor() {
        this.authService = new service_1.default;
        this.register = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const args = req.body;
            try {
                const response = yield this.authService.register(args.email, args.password, args.fullName, args.mobile);
                if (response instanceof Error) {
                    res.send({ status: 1, data: null, error: response.message });
                    return;
                }
                res.send({ status: 1, data: response, error: null });
            }
            catch (error) {
                console.log(error);
                res.send({ status: 0, data: null, error: (error === null || error === void 0 ? void 0 : error.message) || messages_1.default.MSG001 });
            }
        });
        this.login = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const args = req.body;
            try {
                const response = yield this.authService.login(args.email, args.password);
                if (response instanceof Error) {
                    res.send({ status: 1, data: null, error: response.message });
                    return;
                }
                res.send({ status: 1, data: response, error: null });
            }
            catch (error) {
                res.send({ status: 0, data: null, error: (error === null || error === void 0 ? void 0 : error.message) || messages_1.default.MSG001 });
            }
        });
    }
}
exports.default = AuthController;
//# sourceMappingURL=controller.js.map