var express = require("express")
var router = express.Router();
// let client = require("../dbConnect"); // we need to make use this client here
let projectCollection;
let controller = require("../controller");

// setTimeout(() => {
//     projectCollection = client.mongoClient.db().collection("Project");
// }, 2000)

// //insert project...
// const insertProjects = (project,callback) => {
//     projectCollection.insert(project,callback); //calling projectCollection to insert the data into it
// }

// object of getProjects
// const getProjects = (callback) => {
//     projectCollection.find({}).toArray(callback);
// }

//post api
router.post('/',(req,res) => {
    controller.projectController.createProjects(req,res)  
})

router.get('/',(req,res) => {
    controller.projectController.retrieveProjects(req,res)
 })

module.exports = router;
