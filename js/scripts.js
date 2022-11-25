// this scripts file is use to make the system dynamic, make changes in here not the server.js
var express = require("express")
var app = express()

app.use(express.static(__dirname+'/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

var port = process.env.port || 3000;

app.listen(port,()=>{
    console.log("App listening to: "+port)
})

