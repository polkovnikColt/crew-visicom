const mongoose = require('mongoose');

function getAllEmployees(){
 return [{name: 'Маргарита Петрівна',birthday: '18.12.2020'},
     {name: 'Лариса Іванівна',birthday: '30.08.1987'},
     {name: 'Павло Колінько' ,birthday: '17.06.2001'},
     {name: 'Віталій Петров',birthday: '03.01.1998'},
     {name: 'Кирило Сидоров',birthday: '19.05.1967'},
     {name: 'Кирило Петров',birthday: '14.12.1989'}];
}

module.exports.addEmployees = function (userData) {
    return null;
}

module.exports.getEmployees = function () {
    return getAllEmployees();
}

module.exports.getBirthday = function () {
    const date = new Date().toLocaleString();
    console.log(date)
    return getAllEmployees().filter((item) => item.birthday === date);
}
