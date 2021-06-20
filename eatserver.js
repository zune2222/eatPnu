const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'static')));
var favicon = require('serve-favicon');
app.use(favicon(path.join(__dirname,'static','favicon.ico')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'static','html', 'home.html'));
});
app.get('/koreanFood', (req, res) => {
  res.sendFile(path.join(__dirname, 'static', 'html', 'koreanFood.html'));
});
app.get('/meat', (req, res) => {
  res.sendFile(path.join(__dirname, 'static', 'html', 'meat.html'));
});
app.get('/other', (req, res) => {
  res.sendFile(path.join(__dirname, 'static', 'html', 'other.html'));
});
app.get('/ramen', (req, res) => {
  res.sendFile(path.join(__dirname, 'static', 'html', 'ramen.html'));
});
app.get('/americanFood', (req, res) => {
  res.sendFile(path.join(__dirname, 'static', 'html', 'americanFood.html'));
});
app.get('/chineseFood', (req, res) => {
  res.sendFile(path.join(__dirname, 'static', 'html', 'chineseFood.html'));
});
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'static', 'html', 'login.html'));
});
app.get('/weatherAny', (req, res) => {
  res.sendFile(path.join(__dirname, 'static', 'html', 'weatherAny.html'));
});
app.get('/intro', (req, res) => {
  res.sendFile(path.join(__dirname, 'static', 'html', 'introduceMe.html'));
});
app.listen(8080, () => {
  console.log('Express App on port 8080!');
});