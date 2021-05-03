const express = require('express');
const app = new express();
const port = process.env.PORT || 5000;

const nav1 =  [
    {link: '/login', name:'Log In'},
    {link: '/signup', name: 'Sign Up'}
]
const nav2 =  [
    {link: '/login', name:'Log In'}
]
const nav3 =  [
    {link: '/signup', name:'Sign Up'}
]
const nav4 =  [
    {link: '/books', name:'Books'},
    {link: '/authors', name:'Authors'},
    {link: '/bookform', name:'Add a New Book'},
    {link: '/login', name:'Log Out'}
]

const booksRouter = require('./src/routes/bookRoutes')(nav4);
const bookformRouter = require('./src/routes/bookformRoute')(nav4);
const authorsRouter = require('./src/routes/authorRoutes')(nav4);
const signupRouter = require('./src/routes/signupRoute')(nav2);
const loginRouter = require('./src/routes/loginRoute')(nav3);

app.use(express.static('./public'));  //for static files like css,js files

app.set('view engine', 'ejs'); //Template engine
app.set('views', './src/views');  //Path

app.use('/books', booksRouter);
app.use('/authors', authorsRouter);
app.use('/bookform', bookformRouter);
app.use('/signup', signupRouter);
app.use('/login', loginRouter);

app.get('/', function(req, res){
    res.render('index', 
    {
            nav1,
            title: 'Library'
    });
});
app.get('/welcome', function(req, res){
    res.render('welcome',
    {
        nav4,
        title: 'Library'
    });
});

app.listen(port,()=>{console.log("server ready at" + port)});