"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_ViewModel_1 = __importDefault(require("../models/view/user.ViewModel"));
function getUserList() {
    return [new user_ViewModel_1.default('petran', 'petranb2@gmail.com'), new user_ViewModel_1.default('petranb4', 'petranb4@gmail.com'), new user_ViewModel_1.default('petranb3', 'petranb3@gmail.com')];
}
exports.default = { getUserList };
//# sourceMappingURL=user.repo.js.map