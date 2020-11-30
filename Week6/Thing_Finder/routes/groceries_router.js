const express = require("express")
const groceriesRouter = express.Router()
const {v4: uuidv4 } = require("uuid")

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

groceriesRouter.get("/", (req, res) => {
    res.send(groceries)
})





module.exports = groceriesRouter