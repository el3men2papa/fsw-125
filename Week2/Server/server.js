
//We are calling express that is coming in a Function format
const express = require("express")
//we are calling express Function adding to any giving name
const app = express()

//Movies Data
const movies = [
    {tittle1: "The Matrix"},
    {tittle2: "Ready Playe One"},
    {tittle3: "Stars Wars"},
    {tittle4: "Mulan"}
]

//Actors Data 
const actor = [
{tittle1: "Keanu Reeves"},
{tittle2: "Tye Sheridan"},
{tittle3: "Mark Hamill"},
{tittle4: "Jet Li"}

]

//Year Data
const year = [
    {tittle1: 1999},
    {tittle1: 2018},
    {tittle1: 1977},
    {tittle1: 2020}
]
//1.Endpoint (mouth path)
//2. Callback Function
//this port will get movies tittles
app.get(/*1*/"/movies", /*2*/(req, res) =>{
res.send(movies)
})

//this port will get Actors names
app.get("/actor",(req, res) =>{
    res.send(actor)
})

//This will get year data
app.get("/year", (req, res) =>{
    res.send(year)
})
    //1.Assign a Port       2. When the server is working CallBack
app.listen(9000, () => {
    console.log("The server is working")
}) 