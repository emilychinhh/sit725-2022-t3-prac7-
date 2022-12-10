
let client = require("../dbConnect"); // we need to make use this client here
let projectCollection;

setTimeout(() => {
    projectCollection = client.db().collection("Project");
}, 2000)

//insert project...
const insertProjects = (project,callback) => {
    projectCollection.insert(project,callback); //calling projectCollection to insert the data into it
}

//get project
const getProjects = (callback) => {
    projectCollection.find({}).toArray(callback);
}

module.exports = {insertProjects, getProjects}