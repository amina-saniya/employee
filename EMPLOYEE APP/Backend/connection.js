
var mongoose = require('mongoose')

mongoose.connect('mongodb+srv://nihalasherin2017:nihala114@cluster0.1r1vs.mongodb.net/CCSIT?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
        console.log ("db connected")
    })
    .catch((err) => {
        console.log("err")
    })
