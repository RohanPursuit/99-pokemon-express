const express = require("express")
const pokemon = require("./models/pokemon.json")

const app = express()

app.get('/', (req, res) =>{
    console.log("Get /")
    res.send("Welcome 99 Pokemon")
})

app.get('/bugs', (req, res) =>{
    console.log("Get /bugs")
    res.send("99 little bugs in the code")
})

app.get('/bugs/:numberOfBugs', (req, res) =>{
    console.log("Get /bugs/:numberOfBugs")
    const bugCount = Number(req.params.numberOfBugs)
    const isOver = bugCount >= 200

    res.send(`<p>${bugCount} little bugs in the code</p><a href=${!isOver ? bugCount + 2 : '/'}>${isOver ? "Too many bugs!! Start over!" : "Pull one down, patch it around"}</a>`)
})

app.get('/pokemon', (req, res) => {
    console.log("Get /Pokemon")
    res.send(pokemon)
})

app.get('/pokemon/search', (req, res) => {
    const { name: nameSearched } = req.query
    console.log("Get /Pokemon")
    res.send(pokemon.filter(({name})=> name.toLowerCase() === nameSearched.toLowerCase()))
})

app.get('/pokemon/:index', (req, res) => {
    console.log("Get /pokemon/:index")
    const { index } = req.params
    res.send(pokemon[index] || `Sorry, no pokemon found at ${index}`)
})

app.get('/:verb/:adjective/:noun', (req, res) => {
    console.log("Get /:verb/:adjective/:noun")
    const { verb, adjective, noun} = req.params
    res.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`)
})

module.exports = app;