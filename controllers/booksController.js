const { Books } = require('../models')

class BooksController {
    static getBooks(req, res){
        Books.findAll()
        .then(result => {
        // console.log(result)
            // res.send(result)
            res.render('bookslist.ejs', {books : result})
        })
        .catch(err => {
            console.log(err)
        })
    }

    static addFormBooks(req, res) {
        res.render('addBook.ejs');
    }

    static addBook(req,res){
        // res.send(req.body)
        const { title, author, releasedDate, pages, genre } = req.body;
        Books.create({
            title,
            author,
            releasedDate,
            pages,
            genre,
        })
            .then(result => {
                // res.send(result)
                res.redirect('/books')
            })
            .catch(err => {
                res.send(err)
            })
    }

    static findById(req, res) {
        const id = req.params.id;
        Books.findOne({
            where: { id }
        })
            .then(result => {
                res.send(result)
            })
            .catch(err => {
                res.send(err)
            })
    }

    static deleteBook(req,res){
        const id = req.params.id;
        Books.destroy({
            where: { id }
        })
            .then(() => {
                // res.send("Deleted")
                res.redirect('/books')
            })
            .catch(err => {
                res.send(err)
            })
    }

    static editFormBooks(req, res) {
        res.render('editBook.ejs');
    }

    static updateBook(req,res){
        const id = req.params.id;
        const { title, author, releasedDate, pages, genre } = req.body;
        Books.update({
            title,
            author,
            releasedDate,
            pages,
            genre,
        }, {
            where: { id }
        })
            .then(result => {
                res.send(result)
                // res.redirect('/books')
            })
            .catch(err => {
                res.send(err)
            })
    }
}

module.exports = BooksController;