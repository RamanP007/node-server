"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
require("dotenv/config");
const pg_1 = require("pg");
const connectionURL = process.env.DATABASE_URL;
console.log(connectionURL);
exports.client = new pg_1.Client({
    user: process.env.DATABASE_USER,
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE_NAME,
    password: process.env.DATABASE_PASSWORD,
    port: process.env.DATABASE_PORT,
});
exports.client.connect(function (err) {
    if (err)
        throw err;
    console.log("Database Connection has been established");
});
//# sourceMappingURL=db.config.js.map