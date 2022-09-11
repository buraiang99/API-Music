const { validationResult } = require('express-validator');

const validationResults = (req, res, next) => {
    try {
        validationResult(req).throw();
        return next(); //Continua hacia el controlador 
    } catch (error) {
        res.status(403).send(error.array());
    }
}

module.exports = { validationResults };