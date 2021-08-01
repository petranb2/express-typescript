"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cookie_parser_1 = __importDefault(require("cookie-parser"));
var logger = require('morgan');
function setupMiddlewares(express, app) {
    console.log('setup middlewares start');
    app.use(logger('dev'));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cookie_parser_1.default());
    // app.use(express.static(path.join(__basedir, 'public')));
    console.log('setup middlewares end');
}
exports.default = setupMiddlewares;
//# sourceMappingURL=setupMiddlewares.js.map