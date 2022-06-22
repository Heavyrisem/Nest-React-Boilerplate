"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactService = void 0;
const path_1 = require("path");
const common_1 = require("@nestjs/common");
const http_proxy_1 = require("http-proxy");
const config_1 = require("@nestjs/config");
let ReactService = class ReactService {
    constructor(config) {
        this.config = config;
        this.devProxyServer = (0, http_proxy_1.createProxy)();
    }
    requestReact(request, response) {
        if (this.config.get('NODE_ENV') === 'development') {
            this.devProxyServer.web(request, response, { target: this.config.get('REACT_URL') });
        }
        else {
            const { url } = request;
            const root = (0, path_1.resolve)('..', this.config.get('REACT_DIR'));
            const parsedPath = (0, path_1.join)(root, url);
            response.sendFile(parsedPath);
        }
    }
};
ReactService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], ReactService);
exports.ReactService = ReactService;
//# sourceMappingURL=react.service.js.map