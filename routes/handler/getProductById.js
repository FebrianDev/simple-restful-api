const express = require('express');
const router = express.Router();
const {Product} = require('../../models')

//Get data by id
router.get('/:id', async (req,res) =>{
    const product = await Product.findOne({where:{
            id:req.params.id
        }})
    if(product !== null) {
        res.json({
            status:"success get product by id",
            code:200,
            data: product
        })
    }else{
        res.json({
            status:"failed! product not found",
            code:404,
        })
    }
})

module.exports = router