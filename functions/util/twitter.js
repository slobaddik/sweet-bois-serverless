const functions = require('firebase-functions');
const Twitter   = require('twitter');
const env       = functions.config().app;

const {
    consumer_key,
    consumer_secret,
    access_token_key,
    access_token_secret,
} = env;

const client = new Twitter({
    consumer_key,
    consumer_secret,
    access_token_key,
    access_token_secret
});

module.exports = client;