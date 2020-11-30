//It will calling express to be able to build the server
const express = require("express")

//express is a function and it needs to be call
const app = express()

//Morgan is an extension to be able to indentify errors
const morgan = require("morgan")

//very important this will convert JavaScript to Jason
app.use(express.json())

//Is require to use Morgan
app.use(morgan("dev"))

//Is importing the express router from jediRouter
app.use("/bountyRoute", require("./jediRouter"))

//this will handle all errors to be reflected from everywhere
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

//Its building the server to be call into postman or the client (HTML)
app.listen(9000, () =>{
//When everything goes well it will populate the message if not check the codes
    console.log("The server is running on port 9000")
}) 