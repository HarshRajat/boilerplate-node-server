"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Inspiration from https://github.com/santiq/bulletproof-nodejs
// ----
require("reflect-metadata"); // We need this in order to use @Decorators
const config_1 = __importDefault(require("./config"));
const express = require("express");
const logger_1 = __importDefault(require("./loaders/logger"));
function startServer() {
    return __awaiter(this, void 0, void 0, function* () {
        const app = express();
        /**
         * A little hack here
         * Import/Export can only be used in 'top-level code'
         * Well, at least in node 10 without babel and at the time of writing
         * So we are using good old require.
         **/
        yield require('./loaders').default({ expressApp: app });
        app.listen(config_1.default.port, (err) => {
            if (err) {
                logger_1.default.error(err);
                process.exit(1);
                return;
            }
            logger_1.default.info(`
      ################################################
      🛡️  Server listening on port: ${config_1.default.port} 🛡️
      ################################################
    `);
        });
    });
}
startServer();
//# sourceMappingURL=app.js.map