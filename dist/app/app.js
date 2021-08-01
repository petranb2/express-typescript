"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("module-alias/register");
require("source-map-support/register");
const express_1 = __importDefault(require("express"));
const setupMiddlewares_1 = __importDefault(require("./setupMiddlewares"));
const setupRouting_1 = __importDefault(require("./setupRouting"));
const port = 3000;
// define a global variable to have the project base dir
// global.__basedir = path.join(__dirname, "../");
const app = express_1.default();
// setup middlewares
setupMiddlewares_1.default(express_1.default, app);
// setup routing
setupRouting_1.default(app);
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map