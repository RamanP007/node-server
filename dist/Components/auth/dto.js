"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginUserDTO = exports.RegisterUserDTO = void 0;
const class_validator_1 = require("class-validator");
class RegisterUserDTO {
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(10, 20)
], RegisterUserDTO.prototype, "fullName", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)()
], RegisterUserDTO.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Length)(10, 12)
], RegisterUserDTO.prototype, "mobile", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)()
], RegisterUserDTO.prototype, "googleId", void 0);
__decorate([
    (0, class_validator_1.IsStrongPassword)(),
    (0, class_validator_1.Matches)(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, { message: 'Password too weak' }),
    (0, class_validator_1.IsNotEmpty)()
], RegisterUserDTO.prototype, "password", void 0);
exports.RegisterUserDTO = RegisterUserDTO;
class LoginUserDTO {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)()
], LoginUserDTO.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)()
], LoginUserDTO.prototype, "password", void 0);
exports.LoginUserDTO = LoginUserDTO;
//# sourceMappingURL=dto.js.map