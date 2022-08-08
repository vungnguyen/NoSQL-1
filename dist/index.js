"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const book_router_1 = require("./src/routes/book.router");
const PORT = 3000;
const app = (0, express_1.default)();
app.set('views', './src/views/');
app.set('view engine', 'ejs');
mongoose_1.default.connect('mongodb://localhost:27017/book_manager').then(() => {
    console.log('DB connected');
}).catch(() => {
    console.log('connect error');
});
app.use(body_parser_1.default.json());
app.use('', book_router_1.router);
app.listen(PORT, () => {
    console.log(`server running at http://localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map