"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDefinedParam = void 0;
var class_validator_1 = require("class-validator");
var exceptions_1 = require("../exceptions");
var isDefinedParam = function (value, param, validateId) {
    if (value === void 0) { value = 'params'; }
    if (param === void 0) { param = 'id'; }
    if (validateId === void 0) { validateId = true; }
    return function (req, res, next) {
        var paramValue = req[value][param];
        var exist = class_validator_1.isNotEmpty(req[value][param]);
        var isValidNumber = false;
        if (validateId) {
            isValidNumber = class_validator_1.isNumber(paramValue);
            if (!exist) {
                return next(new exceptions_1.HttpException(400, value + " is required and shoul be id number"));
            }
        }
        else if (!exist)
            return next(new exceptions_1.HttpException(400, value + " is required"));
        next();
    };
};
exports.isDefinedParam = isDefinedParam;
//# sourceMappingURL=isDefinedParamMiddleware.js.map