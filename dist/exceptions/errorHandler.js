"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
var errorHandler = function (err, req, res, next) {
    if (res.headersSent) {
        return next(err);
    }
    res.status(err.status).json({
        error: {
            message: err.message,
            status: err.status,
            stack: err.stack,
        },
    });
};
exports.errorHandler = errorHandler;
//# sourceMappingURL=errorHandler.js.map