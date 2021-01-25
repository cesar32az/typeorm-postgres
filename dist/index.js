"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = __importDefault(require("./app"));
var main = function () {
    try {
        app_1.default.listen(app_1.default.get("port"));
        console.log("Server on port " + app_1.default.get("port"));
    }
    catch (error) {
        console.log(error);
    }
};
main();
//# sourceMappingURL=index.js.map