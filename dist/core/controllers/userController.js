"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_service_1 = __importDefault(require("../services/user.service"));
function sendUser(req, res, next) {
    res.json(user_service_1.default.getUserInfo());
}
;
exports.default = { sendUser };
//# sourceMappingURL=userController.js.map