var express = require('express');
var app = express();
app.use('/', express.static(__dirname + '/client1'));
/*app.use('/', express.static(__dirname + '/dist'));*/
var port = process.env.PORT || 3958;

app.listen(port, function () {
  console.log('listening on port %d!', this.address().port);
});
