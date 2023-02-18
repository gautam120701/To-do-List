const mongoose = require("mongoose");



mongoose.connect("mongodb://localhost/databasename")

.then(function(){
    console.log("database connected!");

})

.catch(function(error) {
    console.log(error.message)
})
