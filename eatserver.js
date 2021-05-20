const express = require('express');
const path = require('path');
const app = express();
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'static','html'));
app.use(express.static(path.join(__dirname, 'static')));
app.get('/', (req, res) => {
  res.render(path.join(__dirname, 'static','html', 'home'));
});
app.get('/koreanFood', (req, res) => {
  res.render(path.join(__dirname, 'static', 'html', 'koreanFood'));
});
app.get('/meat', (req, res) => {
  res.render(path.join(__dirname, 'static', 'html', 'meat'));
});
app.get('/other', (req, res) => {
  res.render(path.join(__dirname, 'static', 'html', 'other'));
});
app.get('/ramen', (req, res) => {
  res.render(path.join(__dirname, 'static', 'html', 'ramen'));
});
app.get('/americanFood', (req, res) => {
  res.render(path.join(__dirname, 'static', 'html', 'americanFood'));
});
app.get('/chineseFood', (req, res) => {
  res.render(path.join(__dirname, 'static', 'html', 'chineseFood'));
});
app.get('/login', (req, res) => {
  res.render(path.join(__dirname, 'static', 'html', 'login'));
});
app.listen(8090, () => {
  console.log('Express App on port 8090!');
});