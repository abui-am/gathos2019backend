var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  bodyParser = require('body-parser'),
  controller = require('./controller'),
  cors = require('cors');

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./routes');
routes(app);

app.get('/products/:id', function(req, res, next) {
  res.json({ msg: 'This is CORS-enabled for all origins!' });
});

app.listen(port);
console.log('gathos backend, RESTful API server started on: ' + port);
