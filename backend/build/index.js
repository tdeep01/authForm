global.__basePath      = process.cwd() + '/';
global.__ENV           = process.env.__ENV
const app              = require(__basePath + 'app/server');
const Mysql            = require(__basePath + 'app/Core/mysql');

app.listen(8081, () => {
    console.log('listening to port 8081');
    let dbInstance = Mysql.getInstance();
    dbInstance.query();
})