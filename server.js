global.fetch = require('node-fetch');
const config = require('universal-config');
const Unsplash = require('unsplash-js').default;
const toJson = require('unsplash-js').toJson;
const express = require('express');

const unsplash = new Unsplash({
    applicationId: '0e52dd4cd503ccdc9023c630bf91cc53c891e55ac073d78eca22dfdbb9c85862' || config.get('APPLICATION_ID'),
    secret: config.get('SECRET'),
    callbackUrl: config.get('CALLBACK_URL')
});

const app = express();

app.get('/api/photos', (req, res) => {
    unsplash.photos.listPhotos(req.query.start,req.query.end)
        .then(toJson)
        .then(json => res.json(json));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>console.log(`Server started on port ${PORT}`));