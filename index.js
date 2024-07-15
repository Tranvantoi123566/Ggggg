const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')
const app = express();
const port = 300

const router = require('./Routes/router.js');
const db = require( './data/db.js');

app.use('/', router);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');




app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
