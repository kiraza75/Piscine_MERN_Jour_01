const express = require("express");
const app  = express();

app.set('view engine', 'ejs');
app.set('views', './ex_05/views');

app.get('/name/:name', function(req, res) {

    if(req.query.age) {
        res.render("index", {name: "Hello " + req.params.name + " you have " + req.query.age});
    }
    else {
        res.render("index", {name: "Hello " + req.params.name + " i dont know your age"});
    }
});


app.get('/name', function (req, res) {

    res.render("index", {name: "Hello unknown, i dont know your age"});

});
app.listen(4242);