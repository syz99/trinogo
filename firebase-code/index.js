//index.js

const functions = require('firebase-functions');
const app = require('express')();

const {
    getAllPlaces
} = require('./APIs/places')

app.get('/places', getAllPlaces);
exports.api = functions.https.onRequest(app);
