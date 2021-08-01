"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const userController_1 = __importDefault(require("@controllers/userController"));
/* GET users listing. */
router.get('/', userController_1.default.sendUser);
exports.default = router;
//# sourceMappingURL=users.js.map