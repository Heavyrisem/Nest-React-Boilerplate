"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const user_service_1 = require("./user/user.service");
const user_controller_1 = require("./user/user.controller");
const react_module_1 = require("./react/react.module");
const config_module_1 = require("./modules/config/config.module");
const logger_middleware_1 = require("./modules/logging/logger.middleware");
let AppModule = class AppModule {
    configure(consumer) {
        consumer.apply(logger_middleware_1.LoggerMiddleware).forRoutes('*');
    }
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [config_module_1.ConfigurationModule, react_module_1.ReactModule],
        controllers: [app_controller_1.AppController, user_controller_1.TodoController],
        providers: [app_service_1.AppService, user_service_1.UserService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map