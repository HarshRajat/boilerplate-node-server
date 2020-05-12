"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const typedi_1 = require("typedi");
const eventDispatcher_1 = require("../decorators/eventDispatcher");
let AuthenticationService = class AuthenticationService {
    constructor(logger, eventDispatcher) {
        this.logger = logger;
        this.eventDispatcher = eventDispatcher;
    }
    requestFromLocalhost(req) {
        var ip = req.connection.remoteAddress;
        var host = req.get('host');
        return ip === "127.0.0.1" || ip === "::ffff:127.0.0.1" || ip === "::1" || host.indexOf("localhost") !== -1;
    }
};
AuthenticationService = __decorate([
    typedi_1.Service(),
    __param(0, typedi_1.Inject('logger')),
    __param(1, eventDispatcher_1.EventDispatcher())
], AuthenticationService);
exports.default = AuthenticationService;
//# sourceMappingURL=authentication.js.map