const express = require("express");
const app = express();
const { Musician } = require("../models/index")
const { db } = require("../db/connection")

const port = 3000;

//TODO: Create a GET /musicians route to return all musicians 
app.get("/musicians", async (req,res) => {
    const musicians = await Musician.findAll();
    res.json(musicians);
})

app.get("/musicians/:id", async function(req,res) {
    const number = req.params.id;
    const musicians = await Musician.findByPk(number);
    res.json(musicians);
});


//PUT
app.put("/musicians", async (req,res) => {
    res.json(await Musician.create(req));
});


//POST
app.post("/musicians/:id", async (req,res) => {
    Musician[req.params.id] = req.body.Musician;
    res.json({Musician});
})

//DELETE
app.delete("/musicians/:id", async (req,res) => {
    await Musician.splice(req.params.id, 1);
    res.json({Musician});
})






module.exports = app;