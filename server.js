global.fetch = require('node-fetch');
const config = require('universal-config');
const Unsplash = require('unsplash').default;
const toJson = require('unsplash').toJson;
const express = require('express');

const unsplash = new Unsplash({
    applicationId: config.get('APPLICATION_ID'),
    secret: config.get('SECRET'),
    callbackurl: config.get('CALLBACK_URL')
});

const app = express();

app.get('/api/photos', (req, res) => {
    unsplash.photos.listPhotos(1,30)
        .then(toJson)
        .then(json => req.json(json));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>console.log(`Server started on port ${PORT}`));