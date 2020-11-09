const { json } = require("express")
const express = require("express")
const app = express()
const { v4: uuidv4 } = require('uuid')


app.use(express.json())

const bountyRoute = [
    { 
FirstName: "Jochy",
LastName: "Martinez",
Living: true,
BountyAmount: 4000,
Type: "Sith", 
_id: uuidv4()
}
] 


app.get("/bountyRoute",(req, res) =>{
    res.send(bountyRoute)
})


app.post("/bountyRoute", (req, res) => {
    const newBountyRoute =req.body
    newBountyRoute._id = uuidv4()
    bountyRoute.push(newBountyRoute)
    res.send(`You have Succesfully added a ${newBountyRoute.Type} to the database`)
})

app.listen(9000, () =>{
    console.log("The server is running on port 9000")
})
