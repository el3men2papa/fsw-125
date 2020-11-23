//its needed to be able to request body from API it will be needing 
//app.use(express.json())
const { json } = require("express")
//It will calling express to be able to build the server
const express = require("express")
//express is a function and it needs to be call
const app = express()
//This create a ramdom ID (had to install npm install uuid)
const { v4: uuidv4 } = require('uuid');



//It looks for a request to the body and turn it into req.body
//very important you will be needing const { json } = require("express")
app.use(express.json())

//Creates my fake data
const bountyRoute = [
    { 
FirstName: "Jochy",
LastName: "Martinez",
Living: true,
BountyAmount: 4000,
Type: "Sith", 
//It will create an ramdom ID 
_id: uuidv4()
}
]
//is calling all my fake data into the server
app.get("/bountyRoute",(req, res) =>{
    //I will send the fake data to the server (API)
    res.send(bountyRoute)
})

/* app.get(":/id", (req, res) => {
const jediId = req.params._id
const foundJedi = bountyRoute.find(jedi => jedi.)
}) */

//Going to be posting new data into the server, it will reset after the 
//server reset
app.post("/bountyRoute", (req, res) => {
    //it will pull the info from the API
    const newBountyRoute =req.body
    //It will create an ramdom ID to the new input
    newBountyRoute._id = uuidv4()
    //It will add the new input to the curent data
    bountyRoute.push(newBountyRoute)
    //When everything goes well it will populate the message if not check the codes
    res.send(`You have Succesfully added a new ${newBountyRoute.Type} to the database`)
})

app.get("/:jediId", (req, res) => {
    const jediId = req.params.jediId
    const foundJedi = bountyRoute.find(jedi => bountyRoute._id === jediId)
    res.send(foundJedi)
})

//It will delete an ID per request
app.delete("/:jediId",(req, res) => {

    const jediId =  req.params.jediId
    const jediIndex = bountyRoute.findIndex(jedi => bountyRoute._id === jediId)
    bountyRoute.splice(jediIndex, 1)
    res.send("You have Killed a Jedi")

})
/* 
//Its building the server to be call into postman or the client (HTML)
app.listen(9001, () =>{
    //When everything goes well it will populate the message if not check the codes
    console.log("The server is running on port 9000")
}) */








