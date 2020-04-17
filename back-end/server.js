
const getBill = require('./api/getBill');
const express = require('express');
const app = express();

app.use('/api', getBill);
app.listen(3000);
console.log('success listen at port: 3000');
