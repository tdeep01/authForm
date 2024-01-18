const constants = require(__basePath + 'app/Config/constants');
const Mysql = require(constants.path.base + 'app/Core/mysql');
exports.ping = async function(req, res) {
    let instance = Mysql.getInstance();
    let mysqlConCheck = await instance.query();
    mysqlConCheck = mysqlConCheck[0] && mysqlConCheck[0].solutions;
    return res.status(200).json({
        message : "it works",
        mysql   : mysqlConCheck == 2 ? 'mysql up' : 'mysql down'
    })
}