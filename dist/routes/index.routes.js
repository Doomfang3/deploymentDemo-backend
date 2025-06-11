"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router = require('express').Router();
router.get('/', (req, res, next) => {
    res.json('All good in here');
});
const bookRoutes = require('./book.routes');
router.use('/books', bookRoutes);
module.exports = router;
