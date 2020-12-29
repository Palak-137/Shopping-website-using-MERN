import asyncHandler from 'express-async-handler'


// @desc Auth user and get token
// @route POST /api/users
// @acess public

const authUser = asyncHandler(async (req,res)=>{
  const { email, password} =  req.body

  res.send({
      email,
      password     
  })
})

export {authUser};