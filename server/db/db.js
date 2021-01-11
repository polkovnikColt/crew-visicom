const mongoose = require('mongoose');

function getAllEmployees() {
    //mm-dd-yyyy
    return [{name: 'Маргарита Петрівна', birthday: '12-27-2020', branch: 'Секретар'},
        {
            name: 'Лариса Іванівна',
            birthday: new Date().toLocaleString().split(' ')[0].substring(5, this.length),
            branch: 'Група обробки цифрових карт регіонів'
        },
        {name: 'Павло Колінько', birthday: '06-17-2001', branch: 'Група обробки цифрових карт регіонів'},
        {name: 'Віталій Петров', birthday: '01-03-1998', branch: 'Програмування, web'},
        {name: 'Кирило Сидоров', birthday: '05-19-1967', branch: 'Транспортний відділ'},
        {name: 'Кирило Петров', birthday: '12-14-1989', branch: 'Група графіки та дизайну'}];
}

module.exports.getAdmins = function () {
    return [{password: "qwerty"}, {password: "1234567890"}];
}

module.exports.addEmployees = function (userData) {
    return null;
}

module.exports.sendMail = function (data) {
    console.log(data);
}

module.exports.getEmployees = function () {
    return getAllEmployees();
}

module.exports.getBirthday = function () {
    const date = new Date().toLocaleString().split(' ')[0];
    const modifiedDate = date.substring(5, date.length);
    return getAllEmployees().filter((item) => item.birthday.substring(0, 5) === modifiedDate);
}

