"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validationMiddleware = void 0;
var class_validator_1 = require("class-validator");
var class_transformer_1 = require("class-transformer");
var exceptions_1 = require("../exceptions");
var validationMiddleware = function (dto, skipMissingProperties, value) {
    if (skipMissingProperties === void 0) { skipMissingProperties = false; }
    if (value === void 0) { value = 'body'; }
    return function (req, res, next) {
        class_validator_1.validate(class_transformer_1.plainToClass(dto, req[value]), {
            validationError: { target: false },
            skipMissingProperties: skipMissingProperties,
            whitelist: true,
            forbidUnknownValues: true,
        }).then(function (errors) {
            if (errors.length > 0) {
                var message = errors
                    .map(function (error) {
                    if (error.constraints)
                        return error.constraints.value;
                    return error.property + ": validation error";
                })
                    .join(', ');
                next(new exceptions_1.HttpException(400, message));
            }
            else {
                next();
            }
        });
    };
};
exports.validationMiddleware = validationMiddleware;
//# sourceMappingURL=validationMiddleware.js.map