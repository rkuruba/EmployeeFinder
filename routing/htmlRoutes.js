const path = require('path');
module.exports = function (app) {

    app.get('/survey', function (req, res) {
      res.sendFile(path.join(__dirname,'../public/survey.html'));
    });
    app.get('/home', function (req, res) {
      res.sendFile(path.join(__dirname,'../public/home.html'));
    });
    app.get('/match', function (req, res) {
      res.sendFile(path.join(__dirname,'../public/match.html'));
    });
  }