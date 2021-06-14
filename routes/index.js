const express = require('express');
const router = express.Router();
const {Product} = require('../models')
/* GET home page. */
router.get('/', async function(req, res) {

  const product = await Product.findAll()

  const data = JSON.stringify(product)
  console.log(data)
  res.json({
     data : product
  })

});

module.exports = router;
