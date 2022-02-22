const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

//Package pour la sécurité
const helmet = require('helmet');
require('dotenv').config();

const sauceRoutes = require('./routes/sauces');
const userRoutes = require('./routes/user');

// Connexion à MongoDB
mongoose.connect(process.env.SECRET,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

const app = express();

//Protection des en-têtes HTTP avec Helmet.
app.use(helmet());

//Configuration des en-têtes CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(express.json());

//Gestion des images dans un dossier images.
app.use('/images', express.static(path.join(__dirname, 'images')));

app.use('/api/sauces', sauceRoutes);
app.use('/api/auth', userRoutes);

module.exports = app;