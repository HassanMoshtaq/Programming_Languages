import express from "express";                         // Creating local server
const app = express();
const port = 3000;

app.use(express.static("Public"));                  // Static files 
app.get("/",(req,res) =>{

    res.render("index.ejs");

});
app.get("/C-Programming",(req,res) =>{

    res.render("C.ejs");

});
app.get("/Cpp-Programming",(req,res) =>{

    res.render("C++.ejs");

});
app.get("/Csharp-Programming",(req,res) =>{

    res.render("C#.ejs");

});
app.get("/Python-Programming",(req,res) =>{

    res.render("Python.ejs");

});




app.listen(port,(req,res) =>{

    console.log("The server is running on port number: " + port);
})