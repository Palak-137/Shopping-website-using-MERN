import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'
import generateToken from '../utils/generateToken.js'

// @desc Auth user and get token
// @route POST /api/users
// @acess public

const authUser = asyncHandler(async (req,res)=>{
  const { email, password} =  req.body

   const user = await User.findOne({ email })

   if(user && (await user.matchPassword(password))){
     res.json({
       _id: user._id,
       name: user.name,
       email: user.email,
       isAdmin: user.isAdmin,
       token: generateToken(user._id)
     })
   }else{
     res.status(401)
     throw new Error("Invalid email or password ")
   }
})

// @desc Get user profile
// @route POST /api/users/profile
// @acess private

const getUserProfile = asyncHandler(async (req,res)=>{

   const user = await User.findById(req.user._id)
   
   if(user){
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
      })  
   }else{
     res.status(404)
     throw new Error('User not found')
   }
})

// @desc  Register a new user
// @route POST /api/users
// @acess public

const registerUser = asyncHandler(async (req,res)=>{
  const { name,email, password} =  req.body

   const userExist = await User.findOne({ email })

   if(userExist){
     res.status(400)
     throw new Error('User already exist')
   }
   const user = await User.create({
     name,
     email,
     password
   })
   if(user){
      res.status(201).json({
       _id: user._id,
       name: user.name,
       email: user.email,
       isAdmin: user.isAdmin,
       token: generateToken(user._id)
      })
   }else{
      res.status(400)
      throw new Error('invalid user data')
   }
})


// @desc Update profile
// @route PUT /api/users/profile
// @acess private

const updateUserProfile = asyncHandler(async (req,res)=>{

  const user = await User.findById(req.user._id)
  
  if(user){
    
    user.name = req.body.name || user.name
    user.email = req.body.email || user.email
    if(req.body.password){
      user.password = req.body.password
    }
 
    const updatedUser = await user.save()
 
    res.json({
      _id:  updatedUser._id,
      name: updatedUser.name,
      email:  updatedUser.email,
      isAdmin: updatedUser.isAdmin,
      token: generateToken( updatedUser._id)
    })

  }else{
    res.status(404)
    throw new Error('User not found')
  }
})
// @desc get all users
// @route PUT /api/users
// @acess private/admin

const getUsers = asyncHandler(async (req,res)=>{

  const users = await User.find()
  res.json(users)
 
})

// @desc delete user
// @route PUT /api/users/:id
// @acess private/admin

const deleteUser =  asyncHandler(async (req,res)=>{

  const user = await User.findById(req.params.id)
  if(user){
    await user.remove()
    res.json({message: 'user removed'})
  }else{
    res.status(404)
    throw new Error('User not found')
  }
 
})

// @desc get user by id
// @route PUT /api/users/:id
// @acess private/admin

const getUserById = asyncHandler(async (req,res)=>{

  const users = await (await User.findById(req.params.id)).select('-password')
  if(users){
    res.json(users)
  }else{
    res.status(404)
    throw new Error('User not found')
  }
 
})

// @desc update user
// @route PUT /api/users/:id
// @acess private/admin

const updateUser = asyncHandler(async (req,res)=>{

  const user = await User.findById(req.params.id)
  
  if(user){
    
    user.name = req.body.name || user.name
    user.email = req.body.email || user.email
    user.isAdmin = req.body.isAdmin
   
 
    const updatedUser = await user.save()
 
    res.json({
      _id:  updatedUser._id,
      name: updatedUser.name,
      email:  updatedUser.email,
      isAdmin: updatedUser.isAdmin,
    })

  }else{
    res.status(404)
    throw new Error('User not found')
  }
})



export { getUserProfile,
  authUser,
  registerUser,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById ,
  updateUser};