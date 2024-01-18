const basePath = global.__basePath;
const ENV = global.__ENV;
module.exports = {
    path: {
        base   : basePath,
        app    : basePath + 'app/',
        controller : basePath + 'app/Controller/',
        model  : basePath + 'app/Model/',
        config  : basePath + `app/Config/config.${ENV}.json`
    }
}