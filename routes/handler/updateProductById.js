const express = require('express');
const router = express.Router();
const {Product} = require('../../models')


//update data
router.put('/:id', async (req,res)=>{
    const idProduct = req.params.id

    const {name, price, quantity} = req.body

    if(!name){
        res.json({
            status:'failed! product name must be filled',
            code:400
        })
    }else if(!price){
        res.json({
            status:'failed! product price must be filled',
            code:400
        })
    }else if(price < 0){
        res.json({
            status:'failed! the product price must be greater than equal to 0',
            code:400
        })
    }
    else if(!quantity){
        res.json({
            status:'failed! product quantity must be filled',
            code:400
        })
    }else if(quantity < 0){
        res.json({
            status:'failed! the product quantity must be greater than equal to 0',
            code:400
        })
    }

    const product = await Product.update({name:name,price:price,quantity:quantity, updatedAt:Date.now()}, {where: {
            id: idProduct}})

    console.log(product)

    if(product[0] === 1){
        return res.json({
            status:"success updated data product",
            code:200,
        })
    }else{
        return res.json({
            status:"failed! id not found",
            code:404,
        })
    }

})

module.exports = router;
