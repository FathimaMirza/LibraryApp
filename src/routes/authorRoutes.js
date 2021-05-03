const express = require('express');
const authorsRouter = express.Router();

function router(nav4){
    var authors = [
        {
            name: 'Joseph Barbera',
            book: 'Tom and Jerry',
            genre: 'Cartoon',
            img: 'JBarbera.jpg'
        },
        {
            name: 'J. K. Rowling',
            book: 'Harry Potter',
            genre: 'Fantasy',
            img: 'JKRowling.jpg'
        },
        {
            name: 'Basheer',
            book: 'Paathumayude Aadu',
            genre: 'Drama',
            img: 'basheer.jpg'
        }
    ]
    authorsRouter.get('/', function(req, res){
        res.render('authors', 
        {
            nav4,
            title: 'Library',
            authors
        });
    });
    
    authorsRouter.get('/:id', function(req, res){
        const id = req.params.id
        res.render('author', {
            nav4,
            title: 'Library',
            author: authors[id]
        })
    });

    return authorsRouter;
}

module.exports = router;