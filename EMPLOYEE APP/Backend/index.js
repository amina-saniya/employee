//1.importing express
const express = require('express')
require("./connection")
var employee = require("./model/employee")
var cors = require("cors")
//2.initialize
const app = new express
app.use(express.json())
app.use(cors())

//3. Api creation
app.get('/', (req, res) => {
    res.send("messagefrom the server")
})
app.get('/trial', (req, res) => {
    res.send("trail messagefrom the server")
})
//add api
app.post("/add", async (req, res) => {
    try {
        await employee(req.body).save();
        res.send({ message: "data added!!" })
    } catch (error) {
        console.log(error)
    }
})
app.get("/view", async (req, res) => {
    try {
        var show = await employee.find();
        res.send(show)
    } catch (error) {
        console.log(error)
    }
        
})
//delete
app.delete("/remove/:id", async (req, res) => {
    try {
        await employee.findByIdAndDelete(req.params.id)
        res.send({ message: "data Deleted!!" })
    } catch (error) {
        console.log(error);
    }
            
})
app.put("/update/:id", async (req, res) => {
    try {
        await employee.findByIdAndUpdate(req.params.id, req.body);
        res.send({ message: 'updated successfully'})
    } catch (error) {
        console.log(error);
    }

})
//4.port
app.listen(3004, () => {
    console.log("port is running ");
})