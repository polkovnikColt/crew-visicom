const express = require('express');
const db = require('./db/db');
const app = express.Router();

app.get('/employees/all', (req, res) => {
    res.send(db.getEmployees());
});

app.get('/employees/birthday', (req, res) => {
    res.send(db.getBirthday());
});

app.post('/employees/add', (req, res) => {
    const data = req.body;
    db.addEmployees(data);
    res.sendStatus(200);
});
app.put('/employees/change/:id', (req,res) => {

})

app.delete('/employees/delete/:id',(req,res) => {

})

module.exports.employees = app;