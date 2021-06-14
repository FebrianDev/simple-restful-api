require('dotenv').config()
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')

const indexRouter = require('./routes/index')
const {createProduct, getProductById, updateProductById,getAllProduct,deleteProductById} = require('./routes/products')

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/products', indexRouter)
app.use('/api/products', createProduct, getProductById, updateProductById,getAllProduct,deleteProductById)

module.exports = app
