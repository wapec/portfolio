var express = require('express');
var app = express();
app.use(express.static(__dirname + '/scr/app'));
app.listen(process.env.PORT || 3000);
