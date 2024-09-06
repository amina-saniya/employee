var mongoose = require('mongoose')

var schema = mongoose.Schema({
    Name: String,
    Age: Number,
    Dept: String,
    Sal: Number
})
var employeemodel = mongoose.model("EMPLOYEE", schema)
module.exports = employeemodel;