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

var port = process.env.port || 3000;

app.listen(port,()=>{
    console.log("App listening to: "+port)
    // createCollection("Pets") 
})