var express = require('express');
var path = require('path');

var app = express();

var publicFolder = path.resolve("public");

app.use(express.static(publicFolder));
app.use((req, res) => res.sendFile(`${publicFolder}/index.html`))

var port = process.env.PORT || 8888;

app.listen(port, function () {
  console.log('listening on port ' + port);
});