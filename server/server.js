const express = require('express')
const app = express()

const config ={PORT: 3594}

app.get('/user', (req,res) =>{
    res.send({
        id:1,
        user: "ASDASD"
    })
} )

module.exports.start = function start(){
    app.listen(config.PORT, () => {
        console.log('Server start on port: ' + config.PORT)
    })
}