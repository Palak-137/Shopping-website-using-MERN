import express from "express";
import { authUser,getUserProfile,registerUser,updateUserProfile,getUsers } from "../Controllers/userController.js";
import { protect,admin } from '../middleware/authMiddleware.js'
const router = express.Router()

router.post('/login',authUser)
router.route('/profile')
.get(protect,getUserProfile)
.put(protect,updateUserProfile)
router.route('/').post(registerUser).get(protect,getUsers)

export default router;