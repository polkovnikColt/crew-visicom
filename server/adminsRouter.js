const express = require('express');
const db = require('./db/db');
const app = express.Router();

app.get('/admins/all', (req, res) => {
    res.send(db.getAdmins());
});

app.post('/admins/create', (req,res) =>{
    const body = req.body;

});

app.delete('/admins/delete/:id', (req,res) => {

})

module.exports.admins = app;