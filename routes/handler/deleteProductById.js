const express = require('express');
const router = express.Router();
const {Product} = require('../../models')

router.delete('/:id', async (req,res)=>{
    const idProduct = req.params.id

    const product = await Product.destroy({where:{id:idProduct}})
    console.log(product)
    if(product){
        res.json({
            status:'success delete data product',
            code:200
        })
    }else{
        res.json({
            status:'Failed! id not found',
            code:404
        })
    }
})

module.exports = router