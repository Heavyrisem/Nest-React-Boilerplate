"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggerService = void 0;
const nest_winston_1 = require("nest-winston");
const winston = require("winston");
const { errors, combine, json, timestamp, ms, prettyPrint } = winston.format;
class LoggerService {
    constructor(service) {
        this.logger = winston.createLogger({
            format: combine(errors({ stack: true }), json(), timestamp({ format: 'isoDateTime' }), ms(), prettyPrint()),
            defaultMeta: { service },
            transports: [
                new winston.transports.Console({
                    level: 'debug',
                    format: combine(nest_winston_1.utilities.format.nestLike('Nest-React-Boilerplate')),
                }),
            ],
        });
        console.log = (message, params) => {
            this.logger.debug(message, params);
        };
    }
    log(message) {
        this.logger.info(message);
    }
    error(message, trace) {
        this.logger.error(message, trace);
    }
    warn(message) {
        this.logger.warning(message);
    }
    debug(message) {
        this.logger.debug(message);
    }
    verbose(message) {
        this.logger.verbose(message);
    }
}
exports.LoggerService = LoggerService;
//# sourceMappingURL=logger.service.js.map