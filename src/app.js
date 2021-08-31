const express = require('express');
const app = express();
const hbs = require('hbs');
const fs = require('fs');
const studentRouter = require('../routes/studentRouter');
const path = require('path');
const bodyParser = require("body-parser");

const staticPage = path.join(__dirname,'../public');
const viewsPath = path.join(__dirname,'../templates/views');
const partialsPath = path.join(__dirname,'../templates/partials');



app.set('view engine','hbs');
app.set('views',viewsPath);
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static(staticPage));
const filenames = fs.readdirSync(partialsPath);

filenames.forEach(function (filename) {
  let matches = /^([^.]+).hbs$/.exec(filename);
  if (!matches) {
    return;
  }
  let name = matches[1];
  let template = fs.readFileSync(partialsPath + '/' + filename, 'utf8');
  hbs.registerPartial(name, template);
});

app.use('/',studentRouter);

module.exports = app;