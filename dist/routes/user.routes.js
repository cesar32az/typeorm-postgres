"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var middlewares_1 = require("../middlewares");
var dtos_1 = require("../dtos");
var user_controller_1 = require("../controllers/user.controller");
var router = express_1.Router();
router
    .get('/', user_controller_1.getAllUsers)
    .get('/:id', middlewares_1.isDefinedParam(), user_controller_1.getOneUser)
    .post('/', middlewares_1.validationMiddleware(dtos_1.UserDTO), user_controller_1.createUser)
    .put('/:id', middlewares_1.isDefinedParam(), middlewares_1.validationMiddleware(dtos_1.UserDTO, true), user_controller_1.updateUser)
    .delete('/:id', middlewares_1.isDefinedParam(), user_controller_1.deleteUser);
exports.default = router;
//# sourceMappingURL=user.routes.js.map