const passwordSchema = require('../models/pwd');

module.exports = (req, res, next) => {
    if (!passwordSchema.validate(req.body.password)) {
        res.status(400).json({ message: 'Le mot de passe doit contenir 8 caractères minimum, une majuscule, minuscules et deux chiffres minimum !!!' })
    } else {
        next();
    }
};