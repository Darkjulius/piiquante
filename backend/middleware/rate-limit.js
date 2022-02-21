const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
    windowMs: 5 * 60 * 1000,
    max: 3,
    message: "Tentative de connexion échouée. Le compte est bloqué pour 5 minutes"

});

module.exports = limiter;