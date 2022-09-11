const { check } = require('express-validator');
const { validationResults } = require('../utils/handleValidator');

const validatorCreateItem = [ 
    check('name').exists().notEmpty().withMessage('Name is required'),
    check('album').exists().notEmpty().withMessage('Album is required'),
    check('cover').exists().notEmpty().withMessage('Cover is required'),
    check('artist').exists().notEmpty().withMessage('Artist is required'),
    check('artist.name').exists().notEmpty().withMessage('Artist name is required'),
    check('artist.nickname').exists().notEmpty().withMessage('Artist nickname is required'),
    check('artist.nationality').exists().notEmpty(),
    check('duration').exists().notEmpty(),
    check('duration.start').exists().notEmpty(),
    check('duration.end').exists().notEmpty(),
    check('mediaID').exists().notEmpty().isMongoId().withMessage('Media id is required'),
    (req, res, next) => {
        return validationResults(req, res, next);
    }
];

module.exports = { validatorCreateItem };