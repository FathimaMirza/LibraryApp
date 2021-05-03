const express = require('express');
const bookformRouter = express.Router();

function router(nav4){
    bookformRouter.get('/', function(req, res){
        res.render('bookform', 
        {
            nav4,
            title: 'Library'
        });
    });

    return bookformRouter;
}

module.exports = router;