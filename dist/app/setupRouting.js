"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("@routes/index"));
const users_1 = __importDefault(require("@routes/users"));
function setupRouting(app) {
    console.log('setup routing start');
    app.use('/', index_1.default);
    app.use('/users', users_1.default);
    console.log('setup routing end');
}
exports.default = setupRouting;
//# sourceMappingURL=setupRouting.js.map