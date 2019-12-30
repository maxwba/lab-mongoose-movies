const express = require('express');
const Celebrity = require('../models/celebrity')
const router  = express.Router();

router.get('/celebrities', (req, res, next) => {
    Celebrity.find()
      .then(allCelFromDB => {
        console.log('Retrieved Celebrities from DB:', allCelFromDB);
        res.render('./celebrities/index', { celebrity: allCelFromDB });
      })
      .catch(error => {
        console.log('Error while getting the books from the DB: ', error);
      })

  });
module.exports = router; 