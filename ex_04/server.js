const express = require("express");
const app  = express();

app.set('view engine', 'ejs');
app.set('views', './ex_04/views');

app.get('/name/:name', function(req, res) {

   res.render("index", {name: "Hello " + req.params.name});
});


app.get('/name', function (req, res) {

    res.render("index", {name: "Hello unknown"});

});
app.listen(4242);