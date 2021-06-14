const express = require('express');
const router = express.Router();
const {Product} = require('../../models')

//Create data
router.post('/', async function(req, res) {
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

    const product = await Product.create({name:name,price:price,quantity:quantity, createdAt:Date.now()})

    try {
        return res.json({
            status: 'success created product',
            code: 201,
            data: {
                id:product.id,
                name:product.name,
                price:product.price,
                quantity:product.quantity,
                createdAt:product.createdAt,
                updatedAt:product.createdAt
            }

        })
    }catch (e){
        return res.json({
            status:e.message,
            code:500
        })
    }

})

module.exports = router