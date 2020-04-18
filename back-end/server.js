
const getBill = require('./api/getBill');
const express = require('express');
const app = express();
app.get('/', function (req, res) {
    console.log(__dirname)
    res.sendFile( __dirname + "/cashbook.html" );
 })
app.use('/public', express.static('public'));
app.use('/api', getBill);
app.listen(3000);
console.log('success listen at port: 3000');
