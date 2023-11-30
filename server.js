const express = require('express');
const app = express();
const path = require('path');
const port = 3000;


app.set('view engine', 'ejs');




// Serve static files
app.use(express.static('public'));

app.get('/favicon.ico', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'favicon.ico'));
});


// Define routes
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/about', (req, res) => {
  res.render('about');
});


app.get('/characters', (req, res) => {
  res.render('characters', { /* data */ });
});

app.get('/faq', (req, res) => {
  res.render('faq', { /* data */ });
});

app.get('/contact', (req, res) => {
  res.render('contact', { /* data */ });
});

app.get('/chaewon', (req, res) => {
  res.render('chaewon');
});

app.get('/sakura', (req, res) => {
  res.render('sakura');
});

app.get('/yunjin', (req, res) => {
  res.render('yunjin');
});

app.get('/kazuha', (req, res) => {
  res.render('kazuha');
});

app.get('/eunchae', (req, res) => {
  res.render('eunchae');
});


// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
