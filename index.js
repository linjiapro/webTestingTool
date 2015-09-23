var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/200json', function(req, res) {
	res.json({success: "200 json api"});
});

app.get('/500error', function(req, res) {
  res.status(500);
  res.send("500 error");
});

app.get('/', function(req, res) {
	res.json({success: "app is running"});
});
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


