
const mongoose = require('mongoose');
//mongoose.connect('mongodb+srv://dpegwewa:<kemoneerine2!>@cluster0-3rguz.azure.mongodb.net/test?retryWrites=true&w=majority')
//const MongoClient = require("mongodb").MongoClient;
const dbConnectionUrl = "mongodb+srv://dpegwewa:<kemoneerine2!>@cluster0-3rguz.azure.mongodb.net/test?retryWrites=true&w=majority";

function initialize() {
    mongoose.connect(dbConnectionUrl,{useUnifiedTopology: true, 
    useNewUrlParser: true}, (err, db) => {
       if(err) {
     console.log('Database error: ' + err);
    } else {
     console.log('Successful database connection');
     }
    }); 
}




/* const options = {
    keepAlive: 1,
    useUnifiedTopology: true,
    useNewUrlParser: true,
  };

function initialize(
    dbName,
    dbCollectionName,
    successCallback,
    failureCallback
) {
    MongoClient.connect(dbConnectionUrl,{useUnifiedTopology: true, 
        useNewUrlParser: true}, (err, db) => {
           if(err) {
         console.log('Database error: ' + err);
        } else {
         console.log('Successful database connection');
         }
        }); 
} */

module.exports = {

    initialize
};