'use strict';
module.exports = function (app) {
    var service = require('./api/services/marvelHeroes')
    app.route('/api/hero/:id').get(service.getHero);
    app.route('/api/stories/:id').get(service.getStories);
    app.get('/', function (req, res) {
        res.sendFile(__dirname + '/public/index.html');
    });
}