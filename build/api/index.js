"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pushtokens_1 = __importDefault(require("./routes/pushtokens"));
// guaranteed to get dependencies
exports.default = () => {
    const app = express_1.Router();
    pushtokens_1.default(app);
    return app;
};
//# sourceMappingURL=index.js.map