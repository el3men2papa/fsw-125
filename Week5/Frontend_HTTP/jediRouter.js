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

//is calling all my fake data into the server
jediRouter.get("/", (req, res) => {
    res.send(bountyRoute)
})

jediRouter.post("/", (req, res) => {
    const newBountyRoute =req.body
     //It will create an ramdom ID to the new input
    newBountyRoute._id = uuidv4()
   //It will add the new input to the curent data
    bountyRoute.push(newBountyRoute)
res.send(newBountyRoute)
})

//It will delete an ID per request
jediRouter.delete("/:jediId",(req, res) => {
     //It will pull the user ID imput
    const singleJediId =  req.params.jediId
    //It will look the user Id to match with Json ID 
    const jediIndex = bountyRoute.findIndex(jediId => jediId._id === singleJediId)
    //It will delete the user entire data that contains the ID
    bountyRoute.splice(jediIndex, 1)
    //After it exceed with the deleted ID will display the message
    res.send("You have Killed a Jedi")
})

 //This will get 1 based on the user ID
    jediRouter.get("/:jediId", (req, res) => {
    //It will pull the user ID imput
    const singleJediId = req.params.jediId
    //It will look the user Id to match with Json ID 
    const foundJedi = bountyRoute.find(jediId => jediId._id === singleJediId)
    //After the ID match it will populate 
    res.send(foundJedi)
})

jediRouter.put("/:jediId", (req, res) =>{
    //It will pull the user ID imput
    const singleJediId = req.params.jediId
     //It will look the user Id to match with Json ID 
    const jediIndex = bountyRoute.findIndex(jediId => jediId._id === singleJediId)
     //will update what the user is updateding based on the client
    const updateBounty = Object.assign(bountyRoute[jediIndex], req.body)
    //After the update will come with the results with the changes
    res.send(updateBounty)
})

//Is exporting the router to other components
module.exports = jediRouter
