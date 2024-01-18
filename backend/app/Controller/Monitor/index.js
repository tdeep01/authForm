const router     = require('express').Router({
    caseSensitive: true,
    strict       : true
});
const constants = require(__basePath + 'app/Config/constants');
const monitor = require(constants.path.controller + 'Monitor/monitor')

router.get('/ping',
    monitor.ping
)

module.exports = {
    router
}