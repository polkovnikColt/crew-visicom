const express = require('express')
const db = require('./db')
const app = express()

const config = {PORT: 3594}

app.get('/employees', (req,res) =>{
    res.send(db.getEmployees());
})

app.get('/birthday', (req,res) => {
   res.send(db.getBirthday())
})

app.post('/addEmployees', (req,res) => {
    const data = req.body
    db.addEmployees(data)
    res.sendStatus(200)
})

module.exports.start = function start(){
    app.listen(config.PORT, () => {
        console.log('Server start on port: ' + config.PORT)
    })
}