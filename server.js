const express = require('express')
const app = express();
const port = 8080;

//set the jsx engine
app.set('view engine', 'jsx')

//still need to activate the engine
app.engine('jsx', require('express-react-views').createEngine())

//access static files
app.use(express.static('public')) //images,css,custom js

//create the root route (home page)
app.get("/", (req, res) => {
    res.status(200);
    res.render('home')
})

//create the (about page) route
app.get("/about", (req, res) => {
    res.status(200);
    res.render('about')
})

//create the (addcat page) route
app.get("/addcat", (req, res) => {
    res.status(200);
    res.render('addcat')
})

//create the (addbreed page) route
app.get("/addbreed", (req, res) => {
    res.status(200);
    res.render('addbreed')
})

//create the (posts page) route
app.get("/posts", (req, res) => {
    res.status(200);
    res.render('posts')
})

//set the port for the express app
app.listen(port, () => console.log(`Express running on port: ${port}...`));
