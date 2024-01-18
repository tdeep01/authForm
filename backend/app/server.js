const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const constants         = require(__basePath + 'app/Config/constants');
const monitor = require(constants.path.controller + 'Monitor/');
const user = require(constants.path.controller + 'User/');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

//routes
app.use('/BACKEND/monitor', monitor.router);
app.use('/BACKEND/api/v1/user', user.router);

//not found

app.use((req, res) => {
    return res.status(404).json({
        status       : false,
        statusMessage: '404 - Page Not found'
    });
});

process.on('uncaughtException', (err) => {
    console.log('uncaughtException '+ err);
    process.exit(1);
});

module.exports = app;