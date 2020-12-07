const express = require("express")

const addressBookRouter = express.Router()

const { v4: uuidv4 } = require('uuid');

const addressBook = [
    { 
    FirstName: "Jochy",
    LastName: "Martinez",
    Address1: "1232 23rd RD",
    Address2: "Apt 3",
    State: "NY",
    zipCode: "11324",
    Active: true,
    PhoneNumber: 7184573531,
    _id: uuidv4()
    },
    {
        FirstName: "Andrew",
        LastName: "Hannon",
        Address1: "617 47th st",
        Address2: "Apt 21",
        State: "FL",
        zipCode: "11324",
        Active: true,
        PhoneNumber: 7724571212,
        _id: uuidv4()
    },
    {
        FirstName: "German",
        LastName: "martinez",
        Address1: "6152 32nd rd",
        Address2: "",
        State: "FL",
        zipCode: "11478",
        Active: true,
        PhoneNumber: 7725478512,
        _id: uuidv4()
    },
    {
        FirstName: "Andrea",
        LastName: "Cacerez",
        Address1: "1 N 7th st",
        Address2: "2nd Floor",
        State: "NY",
        zipCode: "10001",
        Active: true,
        PhoneNumber: 7185462189,
        _id: uuidv4()
    }
    
]

addressBookRouter.get("/", (req, res) => {
    res.status(200).send(addressBook)
})

addressBookRouter.post("/", (req, res) => {
    const newAddress =req.body
    newAddress._id = uuidv4()
    addressBook.push(newAddress)
    res.status(201).send(newAddress)
})

addressBookRouter.delete("/:addressId",(req, res) => {
    const singleAddressId =  req.params.addressId
    const addressIndex = addressBook.findIndex(addressId => addressId._id === singleAddressId)
    addressBook.splice(addressIndex, 1)
    res.send("You have deleted address")
})

addressBookRouter.get("/:addressId", (req, res, next) => {
    const singleAddressId = req.params.addressId
    const foundAddress = addressBook.find(addressId => addressId._id === singleAddressId)
    if(!foundAddress){
        const error = new Error(`${addressId} is not a valid ID`)
        res.status(500)
        return next(error)
    }
    res.status(200).send(foundAddress)
})

addressBookRouter.put("/:addressId", (req, res) =>{
    const singleAddressId = req.params.addressId
    const addressIndex = addressBook.findIndex(addressId => addressId._id === singleAddressId)
    const updateAddress = Object.assign(addressBook[addressIndex], req.body)
    res.status(201).send(updateAddress)
})

addressBookRouter.get("/search/firstName", (req, res, next) => {
    const firstName = req.query.firstName
    if(!firstName){
        const error = new Error(`${firstName} Is not found`)
        return next(error)
    }
    const filterFirstname = addressBook.filter(addressBook => addressBook.FirstName === firstName)
    res.status(200).send(filterFirstname)
})

addressBookRouter.get("/search/lastName", (req, res, next) => {
    const lastName = req.query.lastName
    if(!lastName){
        const error = new Error(`${lastName} Is not found `)
        return next(error)
    }
    const filterLastName = addressBook.filter(addressBook => addressBook.LastName === lastName)
    res.status(200).send(filterLastName)
})

addressBookRouter.get("/search/zipCode", (req, res, next) => {
    const zipCodes = req.query.zipCode
    if(!zipCodes){
        const error = new Error(`${zipCodes} Is not found`)
        return next(error)
    }
    const filterZipCode = addressBook.filter(addressBook => addressBook.zipCode === zipCodes)
    res.status(200).send(filterZipCode)
})

addressBookRouter.get("/search/state", (req, res, next) => {
    const states = req.query.state
    if(!states){
        const error = new Error(`${states} Is not found`)
        return next(error)
    }
    const filterState = addressBook.filter(addressBook => addressBook.State === states)
    res.status(200).send(filterState)
})

module.exports = addressBookRouter