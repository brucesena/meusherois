'use strict';
const Request = require("request");
const queryString = require('query-string');
const crypto = require('crypto');

function getCredentials() {
    var publicKey = process.env.MARVEL_PUBLIC_KEY;
    var privateKey = process.env.MARVEL_PRIVATE_KEY;
    var date = new Date();
    var ts = date.getTime();
    var content = ts + privateKey + publicKey;
    var hash = crypto.createHash('md5').update(content).digest('hex');
    const qs = queryString.stringify({
        ts: ts,
        apikey: publicKey,
        hash: hash,
        limit: 5,
        offset: 0
    });
    return '?' + qs;
}

function createUrl(api) {
    const url = 'http://gateway.marvel.com/v1/public/';
    return url + api + getCredentials();
};

module.exports.getHero = function (id) {
    var api = `characters/${id}`;
    return api;
}

module.exports.getStories = function (req, res) {
    var api = `characters/${req.params.id}/stories`;
    var url = createUrl(api);
    Request.get(url, function (error, _response, body) {
        try {
            if (error) {
                throw new Error("Erro ao acessar a api de histórias.");
            }
            var jsonObject = JSON.parse(body);
            var storiesData = [];
            jsonObject.data.results.forEach(element => {
                storiesData.push(element.originalIssue);
            });
            res.json({
                error: false,
                data: storiesData
            });
        } catch (err) {
            res.json({
                error: true,
                msg: err.message
            });
        }
    });
}

module.exports.getHero = function (req, res) {
    var api = `characters/${req.params.id}`;
    var url = createUrl(api);
    Request.get(url, function (error, _response, body) {
        try {
            if (error) {
                throw new Error("Erro ao acessar a api de heróis.");
            }
            var jsonObject = JSON.parse(body);
            var heroData = {
                name: jsonObject.data.results[0].name,
                description: jsonObject.data.results[0].description,
                links: jsonObject.data.results[0].urls,
                thumbnail: jsonObject.data.results[0].thumbnail
            };
            res.json({
                error: true,
                data: heroData
            });
        } catch (err) {
            res.json({
                error: true,
                msg: err.message
            });
        }
    });
}