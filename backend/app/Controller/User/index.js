const { check } = require('express-validator');
const router     = require('express').Router({
    caseSensitive: true,
    strict       : true
});
const constants = require(__basePath + 'app/Config/constants');
const controller = require(constants.path.controller + '/User/userController')
const validation = require(constants.path.controller + '/User/userValidation')

router.post(
    '/saveDataInDB',
    [
        check('firstName', 'firstName is required').isLength({min: 1}),
        check('lastName', 'lastName is required').isLength({min: 1}),
        check('email', 'invalid email').isEmail().isLength({min: 1, max: 255}),
        check('userName', 'invalid userName').isLength({ min: 1, max: 255 }),
        check('password', 'Password is required').isLength({ min: 1 })
    ],
    validation.validateData,
    controller.saveDataInDb
)

module.exports = {
    router
}