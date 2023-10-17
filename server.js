const express = require('express');

const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();
app.get('/', function(req, res) {
  res.send('Hello World Again!');
});

app.get('/:fname', function(req, res){
  res.send('Hello '+req.params.fname);
});

app.listen(PORT, HOST, function() {
  console.log(`Running on http://${HOST}:${PORT}`);
});