const express = require('express');
const app = express();
const hbs = require('hbs');
const port = process.env.PORT||3000;
const path = require("path");

const staticPath = path.join(__dirname, "../public");
const template_path = path.join(__dirname,"../templates/views");
const partials_path = path.join(__dirname,"../templates/partials");

app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partials_path);
app.use(express.static(staticPath));

app.get("/", function(req,res){
   res.render("index");
})

app.get("/about", function(req,res){
    res.render("about");
})

app.get("/weather", function(req,res){
    res.render("weather");
})

app.get("*", function(req,res){
    res.render("error", {
        errorMsg:"Can't understand what you are searching for.."
    });
})
app.listen(port, function(){
    console.log("serving on port number 3000");
})