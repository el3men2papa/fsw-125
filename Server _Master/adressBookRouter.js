const express = require("express")
const addressBookRouter = express.Router()
const {v4: uuidv4} = require("uuid")

const addressBook = [
    { 
    FirstName: "Jochy",
    LastName: "Martinez",
    Address1: "1232 23rd RD",
    Address2: "Apt 3",
    State: "NY",
    zipCode: 11324,
    _id: uuidv4()
    },
    {
        FirstName: "",
        LastName: "",
        Address1: "",
        Address2: "",
        State: "",
        zipCode: "",
        _id: uuidv4()
    },
    {
        FirstName: "",
        LastName: "",
        Address1: "",
        Address2: "",
        State: "",
        zipCode: "",
        _id: uuidv4()
    },
    {
        FirstName: "",
        LastName: "",
        Address1: "",
        Address2: "",
        State: "",
        zipCode: "",
        _id: uuidv4()
    }
    
]

addressBookRouter.get("/", (req, res) => {
res.status(200).send(addressBookRouter)
})

addressBookRouter.post("/:addressBook", (req, res) => {
    const newAddress = req.body
    newAddress._id = uuidv4()
    addressBookRouter.push(newAddress)
    res.status(201).send(newAddress)
})

addressBookRouter.delete("/:addressBookId", (req, res, next) => {
    const addressId = req.params.addressBookId
    const addressIndex = addressBookRouter.findIndex(addressId => addressId._id === addressId)
    addressBookRouter.splice(addressIndex, 1)
    res.send(`You have deleted the address for ${FirstName} ${LastName}`)
})