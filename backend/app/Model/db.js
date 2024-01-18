const constants = require(__basePath + 'app/Config/constants');
const Mysql = require(constants.path.base + 'app/Core/mysql');
exports.saveDataInDb = function(payload){
    let sqlDbInstance = Mysql.getInstance();
    let userData = {
        firstName : payload.firstName,
        lastName : payload.lastName,
        password : payload.password
    };
    return sqlDbInstance.query(`
    INSERT INTO users(
        userName,
        Email,
        userData
    ) VALUES (
        '${payload.userName}',
        '${payload.email}',
        '${JSON.stringify(userData)}'
    );`);
}