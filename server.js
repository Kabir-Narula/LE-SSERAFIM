const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');



const port = 3000;

// Serve static files
app.use(express.static('public'));



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

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
