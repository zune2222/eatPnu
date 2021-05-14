const express = require('express');
const path = require('path');
const app = express();
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'static','html'));
app.use(express.static(path.join(__dirname, 'static')));
app.get('/', (req, res) => {
  res.render(path.join(__dirname, 'static','html', 'home'));
});
app.get('/gallery', (req, res) => {
  res.render(path.join(__dirname, 'static', 'html', 'gallery'));
});
app.get('/login', (req, res) => {
  res.render(path.join(__dirname, 'static', 'html', 'login'));
});
app.listen(8080, () => {
  console.log('Express App on port 8080!');
});