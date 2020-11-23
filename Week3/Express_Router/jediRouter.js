//When building a server will require express
const express = require("express")

//It will allow to connect with components
const jediRouter = express.Router()

//This create a ramdom ID (had to install npm install uuid)
const { v4: uuidv4 } = require('uuid');

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
//is calling my fake data into the server
jediRouter.get("/",(req, res) =>{
    //I will send the fake data to the server (API)
    res.send(bountyRoute)
})

//Going to be posting new data into the server, it will reset after the 
//server reset
jediRouter.post("/", (req, res) => {
    //it will pull the info from the API
    const newBountyRoute =req.body
    //It will create an ramdom ID to the new input
    newBountyRoute._id = uuidv4()
    //It will add the new input to the curent data
    bountyRoute.push(newBountyRoute)
    //When everything goes well it will populate the message if not check the codes
    res.send(`You have Succesfully added a new ${newBountyRoute.Type} to the database`)
})

module.exports = jediRouter

