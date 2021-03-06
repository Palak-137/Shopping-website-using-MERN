
import asyncHandler from 'express-async-handler'
import Order from '../models/orderModel.js'

const  addOrderItems= asyncHandler(async (req,res)=>{
    const { orderItems,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice
     } = req.body

     if(orderItems &&orderItems.length===0){
         res.status(400)
         throw new Error('No item ordered')
         return 
        }else{
            const order = new Order({
                user: req.user._id,
                orderItems,
                shippingAddress,
                paymentMethod,
                itemsPrice,
                taxPrice,
                shippingPrice,
                totalPrice
            })
            const createOrder = await order.save()

            res.status(201).json(createOrder)
        }
    })

const  getOrderById= asyncHandler(async (req,res)=>{
    
      const order = await (await Order.findById(req.params.id)).populate('user', 'name email')


    if(order){
        res.json(order)
    }else{
        res.status(404)
        throw new Error('Order not found')
    }
})



const  getOrders = asyncHandler(async (req,res)=>{
    
    const order = await Order.find({}).populate('user','id name')
      res.json(order)
 
})




    export {
        addOrderItems,
        getOrderById,
        getOrders
    }