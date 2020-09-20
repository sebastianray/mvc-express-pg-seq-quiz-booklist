const { Router } = require('express');
const router = Router();
const BooksRoutes = require('./books')


router.get('/', (req, res) => {
    res.render('index.ejs')
    // res.send("HOME")
});

router.use('/books', BooksRoutes)


module.exports = router;