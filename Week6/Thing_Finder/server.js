const express = require("express")
const app = express()
const morgan = require("morgan")
app.use(morgan("dev"))
app.use(express.json())

app.use("/groceries", require("./routes/groceries_router"))

app.listen(9000, () => {
    console.log("The server is running on port 9000")
})