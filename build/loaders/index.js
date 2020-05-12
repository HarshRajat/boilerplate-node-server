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
const express_1 = __importDefault(require("./express"));
const dependencyInjector_1 = __importDefault(require("./dependencyInjector"));
const mysql_1 = __importDefault(require("./mysql"));
const jobs_1 = __importDefault(require("./jobs"));
const logger_1 = __importDefault(require("./logger"));
//We have to import at least all the events once so they can be triggered
require("./events");
exports.default = ({ expressApp }) => __awaiter(void 0, void 0, void 0, function* () {
    logger_1.default.info('✌️ Loaders connected!');
    const mysqlConnection = yield mysql_1.default();
    logger_1.default.info('✌️ DB instantiated!');
    // It returns the agenda instance because it's needed in the subsequent loaders
    yield dependencyInjector_1.default();
    logger_1.default.info('✌️ Dependency Injector loaded');
    yield jobs_1.default({ mysqlConnection });
    logger_1.default.info('✌️ Jobs loaded');
    yield express_1.default({ app: expressApp });
    logger_1.default.info('✌️ Express loaded');
});
//# sourceMappingURL=index.js.map