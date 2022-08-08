"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const multer_1 = __importDefault(require("multer"));
const bookController_1 = __importDefault(require("../controller/bookController"));
const upload = (0, multer_1.default)();
exports.router = (0, express_1.Router)();
exports.router.get('/book/list', bookController_1.default.showListBook);
exports.router.get('/book/create', bookController_1.default.showCreateBook);
exports.router.post('/book/create', upload.none(), bookController_1.default.createBook);
exports.router.get('/book/update/:id', bookController_1.default.editBook);
exports.router.post('/book/update/:id', upload.none(), bookController_1.default.updateBook);
exports.router.get('/book/delete/:id', bookController_1.default.deleteBook);
//# sourceMappingURL=book.router.js.map