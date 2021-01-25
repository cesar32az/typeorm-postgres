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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.createUser = exports.getOneUser = exports.getAllUsers = void 0;
var typeorm_1 = require("typeorm");
var User_1 = require("../entity/User");
var getAllUsers = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var users, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4, typeorm_1.getRepository(User_1.User).find()];
            case 1:
                users = _a.sent();
                return [2, res.json({ users: users })];
            case 2:
                error_1 = _a.sent();
                console.log(error_1);
                return [2, res.status(400).json({ error: error_1 })];
            case 3: return [2];
        }
    });
}); };
exports.getAllUsers = getAllUsers;
var getOneUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, user, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                return [4, typeorm_1.getRepository(User_1.User).findOne(id)];
            case 1:
                user = _a.sent();
                if (!user)
                    return [2, res.status(404).json({ message: 'User not found' })];
                return [2, res.json({ user: user })];
            case 2:
                error_2 = _a.sent();
                console.log(error_2);
                return [2, res.status(400).json({ error: error_2 })];
            case 3: return [2];
        }
    });
}); };
exports.getOneUser = getOneUser;
var createUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var user, newUser, results, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                user = req.body;
                return [4, typeorm_1.getRepository(User_1.User).create(user)];
            case 1:
                newUser = _a.sent();
                return [4, typeorm_1.getRepository(User_1.User).save(newUser)];
            case 2:
                results = _a.sent();
                return [2, res.json({ newUser: results })];
            case 3:
                error_3 = _a.sent();
                console.log(error_3);
                return [2, res.status(400).json({ error: error_3 })];
            case 4: return [2];
        }
    });
}); };
exports.createUser = createUser;
var updateUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, newData, user, userUpdated, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                id = req.params.id;
                newData = req.body;
                return [4, typeorm_1.getRepository(User_1.User).findOne(id)];
            case 1:
                user = _a.sent();
                if (!user)
                    return [2, res.status(404).json({ message: 'User not found' })];
                typeorm_1.getRepository(User_1.User).merge(user, newData);
                return [4, typeorm_1.getRepository(User_1.User).save(user)];
            case 2:
                userUpdated = _a.sent();
                return [2, res.json({ userUpdated: userUpdated })];
            case 3:
                error_4 = _a.sent();
                console.log(error_4);
                return [2, res.status(400).json({ error: error_4 })];
            case 4: return [2];
        }
    });
}); };
exports.updateUser = updateUser;
var deleteUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, user, results, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                id = req.params.id;
                return [4, typeorm_1.getRepository(User_1.User).findOne(id)];
            case 1:
                user = _a.sent();
                if (!user)
                    return [2, res.status(404).json({ message: 'User not found' })];
                return [4, typeorm_1.getRepository(User_1.User).delete(id)];
            case 2:
                results = _a.sent();
                return [2, res.json({ results: results })];
            case 3:
                error_5 = _a.sent();
                console.log(error_5);
                return [2, res.status(400).json({ error: error_5 })];
            case 4: return [2];
        }
    });
}); };
exports.deleteUser = deleteUser;
//# sourceMappingURL=user.controller.js.map