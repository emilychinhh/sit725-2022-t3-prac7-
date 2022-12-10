let projectModel = require("../models/project")

// move from server -> route -> controller

// let client = require("../dbConnect"); // we need to make use this client here
// let projectCollection;

// setTimeout(() => {
//     projectCollection = client.mongoClient.db().collection("Project");
// }, 2000)

// //insert project...
// const insertProjects = (project,callback) => {
//     projectCollection.insert(project,callback); //calling projectCollection to insert the data into it
// }

// //get project
// const getProjects = (callback) => {
//     projectCollection.find({}).toArray(callback);
// }

// create project...
const createProjects = (req,res) => {
    console.log("New Project added", req.body)
    var newProject = req.body;
    projectModel.insertProjects(newProject,(err,result) => {
        if(err) {
            res.json({statusCode: 400, message: err})
        }
        else {
            res.json({statusCode: 200, message:"Project Successfully added", data: result})
        }
    })
}

// retrieve project...
const retrieveProjects = (req,res) => {
    projectModel.getProjects((err, result) => {
        if(err) {
            res.json({statusCode: 400, message: err})
        }
        else {
            res.json({statusCode: 200, message:"Sucess", data: result})
        }
       })
}

module.exports = {retrieveProjects, createProjects}