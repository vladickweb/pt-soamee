const express = require('express')
const router = express.Router()
const ApiControllers = require('./api.controllers')

router.get('/books', ApiControllers.getBooks)
router.get('/book/:id', ApiControllers.getOneBook)
router.post('/book', ApiControllers.createBook)
router.put('/book/:id', ApiControllers.updateBook)
router.get('/authors', ApiControllers.getAuthors)
router.get('/author/:id', ApiControllers.getOneAuthor)
router.post('/author', ApiControllers.createAuthor)
router.put('/author/:id', ApiControllers.updateAuthor)

module.exports = router