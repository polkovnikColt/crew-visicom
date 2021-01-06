const express = require('express')
const db = require('./db')
const app = express()

const config = {PORT: 3594}

app.get('/employees', (req, res) => {
    res.send(db.getEmployees());
})

app.get('/birthday', (req, res) => {
    res.send(db.getBirthday());
})

app.get('/links', (req,res) => {
    res.send([{title: 'Дирекція'},
        {title: 'Керівництво',email:'gmail@gmail.com'},
        {title: 'Бухгалтерія',email:'gmail@gmail.com'},
        {title: 'Секретар',email:'gmail@gmail.com'},
        {title: 'Менеджмент радіопланування',email:'gmail@gmail.com'},
        {title: 'Група створення цифрових карт',email:'gmail@gmail.com'},
        {title: 'Група обробки цифрових карт регіонів',email:'gmail@gmail.com'},
        {title: 'Відділ фотограмметричної обробки ДДЗЗ',email:'gmail@gmail.com'},
        {title: 'Група автоматичного дешифрування ДДЗЗ міст',email:'gmail@gmail.com'},
        {title: 'Група автоматичного дешифрування ДДЗЗ регіонів',email:'gmail@gmail.com'},
        {title: 'Відділ стереообробки ДДЗЗ',email:'gmail@gmail.com'},
        {title: 'Відділ збору та обробки атрибутивних даних',email:'gmail@gmail.com'},
        {title: 'Відділ підготовки даних для систем радіопланування',email:'gmail@gmail.com'},
        {title: 'Відділ системного адміністрування',email:'gmail@gmail.com'},
        {title: 'Програмування, web',email:'gmail@gmail.com'},
        {title: 'Транспортний відділ',email:'gmail@gmail.com'},
        {title: 'Підрозділ технічного обслуговування',email:'gmail@gmail.com'},
        {title: 'Група графіки та дизайну',email:'gmail@gmail.com'},
        {title: 'Всі'}]);
})

app.post('/addEmployees', (req, res) => {
    const data = req.body;
    db.addEmployees(data);
    res.sendStatus(200);
})

app.post('/sendMail', (req, res) => {
    const data = req.body;
    console.log(data)
    db.sendMail(data);
    res.sendStatus(200);
})

module.exports.start = function start() {
    app.listen(config.PORT, () => {
        console.log('Server start on port: ' + config.PORT)
    })
}