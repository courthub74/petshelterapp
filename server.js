const express = require('express')
const app = express();
const port = 8080;
const cors = require("cors")();
const bp = require("body-parser");
const fetch = require("cross-fetch");
const asynchanlder = require("express-async-handler");
const formData = require("express-form-data");

app.use(bp.json());

app.use(formData.parse());
app.use(express.json());

//get the 'pets' info from json
const pets = require('./data/pets.json')

//experimental 'dataton' info 
const dataton = require('./data/dataton.json')


//set the jsx engine
app.set('view engine', 'jsx')

//still need to activate the engine
app.engine('jsx', require('express-react-views').createEngine())

//access static files
app.use(express.static('public')) //images,css,custom js

//create the root route (home page)
app.get("/", (req, res) => {
    res.status(200);
    res.render('home', { data: pets }) //named after the variable used for require
})

//create the (about page) route
app.get("/about", (req, res) => {
    res.status(200);
    res.render('about')  //named after the variable used for require
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

//create the (edit page) route
    //goes to the (edit page)
app.get("/edit", (req, res) => {
    console.log(req.query)
    res.status(200);
    res.render('edit', req.query );
})

//create the (edit page) route
    //POSTS to the edit page
app.post("/edit", (req, res) => {
    console.log(req.body);
    const { name, description, breed } = req.body;
    // res.send(name);
    //redirect for the get method
    res.redirect("/edit?message=Successfully Submitted")
});

//create the (posts page) route
app.get("/posts", (req, res) => {
    res.status(200);
    res.render('posts')
})

//Blondie Page
app.get("/blondie", (req, res) => {
    res.status(200);
    res.render('blondie', { data: dataton })  //named after the variable used for require
})

//set the port for the express app
app.listen(port, () => console.log(`Express running on port: ${port}...`));
