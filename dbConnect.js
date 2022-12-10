// add all the database connection host in this file
require('dotenv').config()

//mongoDB connection...
const MongoClient = require('mongodb').MongoClient;

//add database connections....to add the database connection we need to have client set up first (previous step)
const uri = 'mongodb+srv://emilychin:chh@cluster0.kuqpnue.mongodb.net/?retryWrites=true&w=majority'
const client = new MongoClient(uri,{useNewUrlParser:true})

client.connect((err,db) => {
    if(!err){
        console.log('MongoDB Connected')
    }
    else {
        console.log("DB Error: ", err);
        process.exit(1);
    }
})

// module use to help extract all the objects that we are going to use in different file
module.exports = client;