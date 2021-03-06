let express = require('express');
let router = express.Router();

// global route variables
let currentDate = new Date();
currentDate = currentDate.toLocaleTimeString();

/* GET home page. wildcard */
router.get('/', (req, res, next) => {
  res.render('index', { 
    title: 'Home', 
    date: currentDate
  });
});

/* GET about page. */
router.get('/about', (req, res, next) => {
  res.render('about', { 
    title: 'About'
  });
});

/* GET contact page. */
router.get('/contact', (req, res, next) => {
  res.render('contact', { 
    title: 'Contact'
  });
});

module.exports = router;
