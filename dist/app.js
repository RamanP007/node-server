"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const Components_1 = require("./Components");
const app = (0, express_1.default)();
/* Parse application/x-www-form-urlencoded */
app.use(body_parser_1.default.urlencoded({ extended: false }));
/* Parse application/json */
app.use(body_parser_1.default.json());
/* Serve static files */
app.use(express_1.default.static("public"));
app.use(express_1.default.static("uploads"));
/* Enable cors */
app.use((0, cors_1.default)("*"));
app.use("/auth", Components_1.Auth.router);
const port = process.env.PORT;
/* Global root dir */
globalThis.ROOT_DIR = path_1.default.resolve(__dirname);
app.listen(port, () => {
    console.log(`Server is Running on Port ${port}`);
});
//# sourceMappingURL=app.js.map