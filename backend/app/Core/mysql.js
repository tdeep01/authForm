const mysql = require('mysql');
const constants = require(__basePath + 'app/Config/constants');
const config    = require(constants.path.config);
class Mysql {

    // singleton design pattern for mysql connection
    static #instance

    constructor(){
        this.con = mysql.createConnection(config['MYSQL_CONNECTION']);
    }

    static getInstance(){
        if(!Mysql.#instance) {
            Mysql.#instance = new Mysql();
        }
        return Mysql.#instance;
    }

    startConnection(){
        this.con.connect(function(err) {
            if (err) {
              console.error('error connecting: ' + err.stack);
              return;
            }
           
            console.log('connected as id ' + connection.threadId);
          });
    }

    query(sql = 'SELECT 1 + 1 AS solutions'){
        return new Promise((resolve, reject) => {
            return this.con.query(sql, function (error, results, fields) {
                if (error) return reject(error);
                // console.log('The solution is: ', results);
                return resolve(results);
            });
        })
    }
}
module.exports = Mysql;