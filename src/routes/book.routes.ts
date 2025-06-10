import { NextFunction, Request, Response } from 'express'

const router = require('express').Router()
import prisma from '../db'

// Starting with /api/books
router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const allBooks = await prisma.book.findMany()
    res.json(allBooks)
  } catch (error) {
    next(error)
  }
})

router.get('/:bookId', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const oneBook = await prisma.book.findUnique({ where: { id: parseInt(req.params.bookId) } })
    res.json(oneBook)
  } catch (error) {
    next(error)
  }
})

router.post('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const newBook = await prisma.book.create({ data: req.body })
    res.status(201).json(newBook)
  } catch (error) {
    next(error)
  }
})

router.put('/:bookId', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const updatedBook = await prisma.book.update({
      where: { id: parseInt(req.params.bookId) },
      data: req.body,
    })
    res.status(202).json(updatedBook)
  } catch (error) {
    next(error)
  }
})

router.delete('/:bookId', async (req: Request, res: Response, next: NextFunction) => {
  try {
    await prisma.book.delete({ where: { id: parseInt(req.params.bookId) } })
    res.status(204).json()
  } catch (error) {
    next(error)
  }
})

module.exports = router
