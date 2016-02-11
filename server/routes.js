'use strict';


module.exports = function(app) {

    app.get('/test', function (req, res) {
        res.send('<h1>Hello World!</h1>');
    });

};

