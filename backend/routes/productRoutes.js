import express from "express";
import { protect,admin } from '../middleware/authMiddleware.js'

import {
   getProductById,
   getProducts,
   deleteProduct ,
   getTopProducts
  } from '../Controllers/productController.js'

const router = express.Router()

router.route('/').get(getProducts) 
router.get('/top',getTopProducts);
router.route('/:id').get(getProductById) 
router.route('/:id').delete(protect,admin,deleteProduct) 
 
export default router;