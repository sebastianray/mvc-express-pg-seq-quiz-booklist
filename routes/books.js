const { Router } = require('express');
const router = Router();
const BooksController = require('../controllers/booksController')

router.get('/', BooksController.getBooks);
router.get('/add', BooksController.addFormBooks)
router.post('/add', BooksController.addBook)
router.get('/edit/:id', BooksController.editFormBooks)
router.post('/edit/:id', BooksController.updateBook)
router.get('/delete/:id', BooksController.deleteBook)
router.get('/:id', BooksController.findById);

module.exports = router;