import { Request, Response, NextFunction } from 'express'

const router = require('express').Router()

router.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.json('All good in here')
})

const bookRoutes = require('./book.routes')
router.use('/books', bookRoutes)

module.exports = router
