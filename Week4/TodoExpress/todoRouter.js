
const express = require("express")
//express is a function and it needs to be call
const todoRouter = express.Router()
//This create a ramdom ID (had to install npm install uuid)
const { v4: uuidv4 } = require('uuid');

//It looks for a request to the body and turn it into req.body
//very important you will be needing const { json } = require("express")


const todoList = [
    {
        Name: "Doll House",
        Description: "Has to be tall and wide",
        PictureSample: "https://store.schoolspecialty.com/OA_HTML/xxssi_ibeGetWCCImage.jsp?docName=F3862948&Rendition=Large",
        Compleated: true,
        _id: uuidv4()
    }
]

//is calling all my fake data into the server
todoRouter.get("/", (req, res) => {
     //I will send the fake data to the server (API)
    res.send(todoList)
})

//Get one
todoRouter.get("/:todoId", (req, res) => {
    const singleTodoId = req.params.todoId
    const foundTodoList = todoList.find(todoId => todoId._id === singleTodoId)
    res.send(foundTodoList)
})

//Add
todoRouter.post("/", (req, res)=> {
    const newTodoList = req.body
    newTodoList._id = uuidv4()
    todoList.push(newTodoList)
    res.send("New to do list was added")
})

//Update
todoRouter.put("/:todoId", (req, res) => {
    const singleTodoId = req.params.todoId
    const todoIndex = todoList.findIndex(todoId => todoId._id === singleTodoId)
    const updateTodo = Object.assign(todoList[todoIndex], req.body)
    res.send(updateTodo)
})

//Delete
todoRouter.delete("/:todoId", (req, res) => {
    const singleTodoId = req.params.todoId
    const todoIndex = todoList.findIndex(todoId => todoId._id === singleTodoId)
    todoList.splice(todoIndex, 1)
    res.send("You have removed an Item")
})



module.exports = todoRouter