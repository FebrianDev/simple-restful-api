const express = require('express');
const router = express.Router();
const {Product} = require('../../models')

router.get('/',async (req,res)=>{

    const product = await Product.findAll()
    res.json({
        status:'success',
        code:200,
        data : product
    })
})

module.exports = router