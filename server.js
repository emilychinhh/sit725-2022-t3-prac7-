var express = require("express")
var app = express()
var cors = require("cors");
const { setInternalBufferSize } = require("bson");
let projectCollection;
let dbConnect = require("./dbConnect"); // let server.js file connect with dbConnect file :)
let projectRoutes = require("./routes/projectRoutes");

app.use(express.static(__dirname+'/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())
app.use('/api/projects', projectRoutes)

// prac 6 updates
app.get('/addTwoNumbers/:firstNumber/:secondNumber', function(req,res,next)
{
    var firstNumber = parseInt(req.params.firstNumber) 
    var secondNumber = parseInt(req.params.secondNumber)
    var result = firstNumber + secondNumber || null
    if(result == null) {
      res.json({result: result, statusCode: 400}).status(400)
    }
    else { res.json({result: result, statusCode: 200}).status(200) } 
  })
  
const cardList = [
    {
        title: "Kitten 2",
        image: "images/capoo1.jpeg",
        link: "About Kitten 2",
        desciption: "Demo desciption about kitten 2"
    },
    {
        title: "Kitten 3",
        image: "images/capoo2.jpeg",
        link: "About Kitten 3",
        desciption: "Demo desciption about kitten 3"
    }
]

var port = process.env.port || 8080;

app.listen(port,()=>{
    console.log("App listening to: "+port)
    // createCollection("Pets") 
})