"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_ViewModel_1 = __importDefault(require("../models/view/user.ViewModel"));
function getUserInfo() {
    const userView = new user_ViewModel_1.default('petran', 'petranb2@gmail.com');
    return userView;
}
exports.default = { getUserInfo };
//# sourceMappingURL=user.service.js.map