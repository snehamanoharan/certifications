const express = require('express');

const app = express();


app.set("view engine", "ejs");

//index page
app.get('/', function(req, res) {
    res.render('home');
});

//register
app.get('/register', function(req, res) {
    res.render('register');
});

//login
app.get('/login', function(req, res) {
    res.render('login');
});

//profile
app.get('/profile', function(req, res) {
    res.render('profile');
});


//check
app.get('/check', function(req, res) {
    res.render('check');
});

////cert-reg
app.get('/cert-reg', function(req, res) {
    res.render('cert-reg');
});
//port
app.listen(3000, function(req, res) {
    console.log("server started in port 3000")
})