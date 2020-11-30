
const express = require("express")
//express is a function and it needs to be call
const groceriesRouter = express.Router()
//This create a ramdom ID (had to install npm install uuid)
const { v4: uuidv4 } = require('uuid');

//It looks for a request to the body and turn it into req.body
//very important you will be needing const { json } = require("express")

const groceries = [
    {
        name: "bananas",
        type: "food",
        price: 200,
        _id: uuidv4()
    },

     {
        name: "pants",
        type: "clothing",
        price: 2500,
        _id: uuidv4()
    },

    {
        name:"basket ball",
        type: "toys",
        price: 1000,
        _id: uuidv4()
    },

    {
        name: "rockem sockem robots",
        type: "toy",
        price: 1500,
        _id: uuidv4()

    },

    {
        name: "shirt",
        type: "clothing",
        price: 800,
        _id: uuidv4()
    },

    {
        name: "soup",
        type: "food",
        price: "300",
        _id: uuidv4()
    },

    {
        name: "flour",
        type: "food",
        price: 100,
        _id: uuidv4()
    },

    {
        name: "apple",
        type: "food",
        price: 50,
        _id: uuidv4()
    } 
]


//is calling all my fake data into the server
groceriesRouter.get("/", (req, res) => {
     //I will send the fake data to the server (API)
    res.send(groceries)
})

//this will filter by type
groceriesRouter.get("/search/type", (req, res, next) => {
    const types = req.query.type
    if(!types){
        const error = new Error("You must provide a type of Cathergory")
        return next(error)
    }
    const filterType = groceries.filter(groceries => groceries.type === types)
    res.send(filterType)
})


//this will filter by name
groceriesRouter.get("/search/name", (req, res, next) => {
    const name = req.query.name
    if(!name){
        const error = new Error("You must provide a name of Cathergory")
        return next(error)
    }
    const filterName = groceries.filter(groceries => groceries.name === name)
    res.send(filterName)
})



//Get one
 groceriesRouter.get("/:groceriesId", (req, res, next) => {
    const singleGroceriesId = req.params.groceriesId
    const foundGroceries = groceries.find(groceriesId => groceriesId._id === singleGroceriesId)
    if(!foundGroceries){
        const error = new Error("The Grocery Id Was Not Found")
        return next(error)
    }
    res.send(foundGroceries) 
})

module.exports = groceriesRouter