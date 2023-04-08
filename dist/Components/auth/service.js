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
require("dotenv/config");
const client_1 = require("@prisma/client");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class UserService {
    constructor() {
        this.prisma = new client_1.PrismaClient();
        this.isEmailExist = (email) => __awaiter(this, void 0, void 0, function* () {
            const response = yield this.prisma.user.count({
                where: { email }
            });
            console.log(response);
            if (response)
                return true;
            return false;
        });
        this.isMobileExist = (phone) => __awaiter(this, void 0, void 0, function* () {
            const response = yield this.prisma.user.count({
                where: { phone }
            });
            if (response)
                return true;
            return false;
        });
        this.hashedPassword = (password) => {
            return bcrypt_1.default.hashSync(password, 10);
        };
        this.checkPassword = (password, hashedPassword) => {
            return bcrypt_1.default.compareSync(password, hashedPassword);
        };
        this.generateJWTToken = (data) => {
            return jsonwebtoken_1.default.sign(data, process.env.SECRET, { expiresIn: '1d' });
        };
        this.register = (email, password, fullname, phone) => __awaiter(this, void 0, void 0, function* () {
            if (yield this.isEmailExist(email))
                return new Error('Email already Exist');
            if (yield this.isMobileExist(phone))
                return new Error('Mobile already Exist');
            const hashedPassword = yield this.hashedPassword(password);
            const user = yield this.prisma.user.create({
                data: {
                    email, password: hashedPassword, fullname, phone
                }
            });
            const tokenData = {
                id: user.id,
                name: user.fullname,
                email: user.email
            };
            return this.generateJWTToken(tokenData);
        });
        this.login = (email, password) => __awaiter(this, void 0, void 0, function* () {
            const user = yield this.prisma.user.findUnique({ where: { email } });
            if (!user)
                return new Error('User not found');
            if (!this.checkPassword(password, user.password))
                return new Error('Wrong Password');
            const tokenData = {
                id: user.id,
                name: user.fullname,
                email: user.email
            };
            return this.generateJWTToken(tokenData);
        });
    }
}
exports.default = UserService;
//# sourceMappingURL=service.js.map