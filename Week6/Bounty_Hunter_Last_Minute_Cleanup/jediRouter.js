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
BountyAmount: 8000,
Type: "Jedi", 
//It will create an ramdom ID 
_id: uuidv4()
},
{ 
    FirstName: "Andrew",
    LastName: "Hannon",
    Living: true,
    BountyAmount: 3000,
    Type: "Sith", 
    //It will create an ramdom ID 
    _id: uuidv4()
    },
    { 
        FirstName: "Luis",
        LastName: "Martinez",
        Living: true,
        BountyAmount: 4000,
        Type: "Jedi", 
        //It will create an ramdom ID 
        _id: uuidv4()
        },
        { 
            FirstName: "Brayhan",
            LastName: "Fernandez",
            Living: true,
            BountyAmount: 1000,
            Type: "Sith", 
            //It will create an ramdom ID 
            _id: uuidv4()
            }
]

//is calling all my fake data into the server
jediRouter.get("/", (req, res) => {
    res.status(200).send(bountyRoute)
})

jediRouter.post("/", (req, res) => {
    const newBountyRoute =req.body
     //It will create an ramdom ID to the new input
    newBountyRoute._id = uuidv4()
   //It will add the new input to the curent data
    bountyRoute.push(newBountyRoute)
res.status(201).send(newBountyRoute)
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
    jediRouter.get("/:jediId", (req, res, next) => {
    //It will pull the user ID imput
    const singleJediId = req.params.jediId
    //It will look the user Id to match with Json ID 
    const foundJedi = bountyRoute.find(jediId => jediId._id === singleJediId)
     //This will provide a message if ID is not difine
    if(!foundJedi){
        const error = new Error(`${singleJediId} is not a valid ID`)
        res.status(500)
        return next(error)
    }
    //After the ID match it will populate 
    res.status(200).send(foundJedi)
})

jediRouter.put("/:jediId", (req, res) =>{
    //It will pull the user ID imput
    const singleJediId = req.params.jediId
     //It will look the user Id to match with Json ID 
    const jediIndex = bountyRoute.findIndex(jediId => jediId._id === singleJediId)
     //will update what the user is updateding based on the client
    const updateBounty = Object.assign(bountyRoute[jediIndex], req.body)
    //After the update will come with the results with the changes
    res.status(201).send(updateBounty)
})

//this will filter by type
jediRouter.get("/search/type", (req, res, next) => {
    const types = req.query.type
    if(!types){
        const error = new Error(`${types} Is not valid You must provide a Bounty type of Cathergory`)
        return next(error)
    }
    const filterType = bountyRoute.filter(jedi => jedi.Type === types)
    res.status(200).send(filterType)
})

//Is exporting the router to other components
module.exports = jediRouter