import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'

const getProducts = asyncHandler(async (req,res)=>{

    const keyword = req.query.keyword ? {
        name: {
            $regex: req.query.keyword,
            $options: 'i'
        }
    } : {}
    
    const products = await Product.find({...keyword})
    res.json(products);
})

const getProductById = asyncHandler(async (req,res)=>{
    const product = await Product.findById(req.params.id)
    
    if(product){
        res.json(product)
    }else{
        res.status(404)
        throw new Error('Product not found')
    }
})



const deleteProduct = asyncHandler(async (req,res)=>{
    const product = await Product.findById(req.params.id)
    
    if(product){
        await product.remove();
        res.json({message: "product is deleted"})
    }else{
        res.status(404)
        throw new Error('Product not found')
    }
})


const getTopProducts = asyncHandler(async (req,res)=>{
    const products = await Product.find({}).sort({rating: -1}).limit(3)
    
    res.json(products)
})

export {
    getProductById,
    getProducts,
    deleteProduct,
    getTopProducts
}