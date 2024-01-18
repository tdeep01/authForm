const constants = require(__basePath + 'app/Config/constants');
const db = require(constants.path.model + 'db');
exports.saveDataInDb = async function(req, res) {
    try {
        let dbResponse = await db.saveDataInDb(req.body);
        if(Object.keys(dbResponse).length > 0) {
            return res.status(200).json({
                status : true,
                message : "data saved in db succesfuly"
            })
        } else {
            throw 'db error'
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status : false,
            message : "something went wrong"
        });
    }
}