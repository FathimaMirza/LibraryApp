const express = require('express');
const booksRouter = express.Router();

function router(nav4){
    var books = [
        {
            title: 'Tom and Jerry',
            author: 'Joseph Barbera',
            genre: 'Cartoon',
            img: 'tom&jerry.jpg'
        },
        {
            title: 'Harry Potter',
            author: 'J. K. Rowling',
            genre: 'Fantasy',
            img: 'harry_potter.png'
        },
        {
            title: 'Paathumayude Aadu',
            author: 'Basheer',
            genre: 'Drama',
            img: 'paathumayude_aadu.jpg'
        }
    ]
    booksRouter.get('/', function(req, res){
        res.render('books', 
        {
            nav4,
            title: 'Library',
            books
        });
    });
    
    booksRouter.get('/:id', function(req, res){
        const id = req.params.id
        res.render('book', {
            nav4,
            title: 'Library',
            book: books[id]
        })
    });

    return booksRouter;
}

module.exports = router;