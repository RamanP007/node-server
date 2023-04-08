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
Object.defineProperty(exports, "__esModule", { value: true });
exports.OuterController = void 0;
const client_1 = require("@prisma/client");
class OuterController {
    welcomeUser(req, res) {
        res.send("Welcome to the New World!");
    }
    register(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const prisma = new client_1.PrismaClient();
            const newUser = yield prisma.user.create({
                data: {
                    fullname: "Alice",
                    email: "alice@prisma.io",
                    phone: "7412589653",
                    password: "Raman",
                },
            });
            res.send(newUser);
        });
    }
}
exports.OuterController = OuterController;
//# sourceMappingURL=outerController.js.map