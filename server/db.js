const mongoose = require('mongoose');

function getAllEmployees(){
    //mm-dd-yy
 return [{name: 'Маргарита Петрівна',birthday: '12-25-2020'},
     {name: 'Лариса Іванівна',birthday: '12-10-1987'},
     {name: 'Павло Колінько' ,birthday: '06-17-2001'},
     {name: 'Віталій Петров',birthday: '01-03-1998'},
     {name: 'Кирило Сидоров',birthday: '05-19-1967'},
     {name: 'Кирило Петров',birthday: '12-14-1989'}];
}

module.exports.addEmployees = function (userData) {
    return null;
}

module.exports.sendMail = function (data){
    console.log(data);
}

module.exports.getEmployees = function () {
    return getAllEmployees();
}

module.exports.getBirthday = function () {
    const date = new Date().toLocaleString().split(' ')[0];
    const modifiedDate  = date.substring(5,date.length);
    return getAllEmployees().filter((item) => item.birthday.substring(0,5) === modifiedDate);
}
