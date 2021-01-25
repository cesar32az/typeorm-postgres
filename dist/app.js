"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var morgan_1 = __importDefault(require("morgan"));
require("reflect-metadata");
var routes_1 = __importDefault(require("./routes"));
var typeorm_1 = require("./config/typeorm");
var app = express_1.default();
app.set('port', process.env.PORT || 4000);
typeorm_1.connect();
app.use(cors_1.default());
app.use(morgan_1.default('dev'));
app.use(express_1.default.json());
app.use('/api', routes_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map