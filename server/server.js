const express = require('express')
const app = express()

const config = {PORT: 3594}

app.get('/employees', (req,res) =>{
    res.send([{name:'Маргарита Петрівна'},
        {name:'Лариса Іванівна'},
        {name:'Павло Колінько'},
        {name:'Віталій Петров'},
        {name:'Кирило Сидоров'}, {name: 'Кирило Петров'}]);
})

app.get('/birthday', (req,res) => {
   res.send(
       [{name:'Маргарита Петрівна',
           add: '04.12.2020' === new Date().toLocaleDateString() ?
               {today: true,text:'Сьогодні святкує день народження'} :
               {today: false,text:'Нещодавно святкував/ла день народження'}},
           {name:'Лариса Іванівна',
               add: '04.08.2020' === new Date().toLocaleDateString() ?
                   {today: true,text:'Сьогодні святкує день народження'} :
                   {today: false,text:'Нещодавно святкував/ла день народження'}}]
   );
})

module.exports.start = function start(){
    app.listen(config.PORT, () => {
        console.log('Server start on port: ' + config.PORT)
    })
}