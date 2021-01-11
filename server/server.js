const express = require('express');
const db = require('./db/db');
const app = express();
const toolsRouter = require('./toolsRouter');
const employeesRouter = require('./employeesRouter');
const adminsRouter = require('./adminsRouter');

const config = {PORT: 3594};

app.use(adminsRouter.admins);

app.use(toolsRouter.tools);

app.use(employeesRouter.employees);

module.exports.start = function start() {
    app.listen(config.PORT, () => {
        console.log('Server start on port: ' + config.PORT)
    })
};