//const express = require("express") // Common.js moduler
import express from "express" // ES6 modules, inkluder "type": "module" i package.json
import bodyparser from "body-parser" 
import cors from "cors"

const app = express()
const PORT = process.env.PORT || 3000

// Middleware
app.use(bodyparser.json())
app.use(cors())

// Routes - Endpoints - Behöver url + http-metod för att något ska triggas
// Method GET 
app.get('/whatever', (req, res) => {
    // Det som triggas kalaas för "routehandler"
    res.send("Hello from route '/'")
})

// Method POST 
app.post('/whatever', (req, res) => {

    const {a, b} = req.body;
    res.json({"first": a, "second": b });    
})

//Method PUT
app.put('/whatever', (req, res) => {
    res.send("A PUT-request")
})

//Method DELETE
app.delete('/whatever', (req, res) => {
    res.send('A DELETE-request')
})


app.listen(PORT, () => {
    console.log(`Servern kör på http://localhost:${PORT}`)
})