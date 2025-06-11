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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const router = require('express').Router();
const db_1 = __importDefault(require("../db"));
// Starting with /api/books
router.get('/', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allBooks = yield db_1.default.book.findMany();
        res.json(allBooks);
    }
    catch (error) {
        next(error);
    }
}));
router.get('/:bookId', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const oneBook = yield db_1.default.book.findUnique({ where: { id: parseInt(req.params.bookId) } });
        res.json(oneBook);
    }
    catch (error) {
        next(error);
    }
}));
router.post('/', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newBook = yield db_1.default.book.create({ data: req.body });
        res.status(201).json(newBook);
    }
    catch (error) {
        next(error);
    }
}));
router.put('/:bookId', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedBook = yield db_1.default.book.update({
            where: { id: parseInt(req.params.bookId) },
            data: req.body,
        });
        res.status(202).json(updatedBook);
    }
    catch (error) {
        next(error);
    }
}));
router.delete('/:bookId', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield db_1.default.book.delete({ where: { id: parseInt(req.params.bookId) } });
        res.status(204).json();
    }
    catch (error) {
        next(error);
    }
}));
module.exports = router;
