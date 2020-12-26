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
        {title: 'Керівництво'},
        {title: 'Бухгалтерія'},
        {title: 'Секретар'},
        {title: 'Менеджмент радіопланування'},
        {title: 'Група створення цифрових карт'},
        {title: 'Група обробки цифрових карт регіонів'},
        {title: 'Відділ фотограмметричної обробки ДДЗЗ'},
        {title: 'Група автоматичного дешифрування ДДЗЗ міст'},
        {title: 'Група автоматичного дешифрування ДДЗЗ регіонів'},
        {title: 'Відділ стереообробки ДДЗЗ'},
        {title: 'Відділ збору та обробки атрибутивних даних'},
        {title: 'Відділ підготовки даних для систем радіопланування'},
        {title: 'Відділ системного адміністрування'},
        {title: 'Програмування, web'},
        {title: 'Транспортний відділ'},
        {title: 'Підрозділ технічного обслуговування'},
        {title: 'Група графіки та дизайну'},
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