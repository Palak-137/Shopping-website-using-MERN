import { createStore, combineReducers,applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import
 { productListReducer,
   productDetailsReducer,
   productDeleteReducer,
   productTopRatedReducer } from "./reducers/productReducers"

import {cartReducer} from "./reducers/cartReducer.js"
import { userLoginReducer,
    userRegisterReducer,
    userDetailsReducer, 
    userUpdateProfileReducer,
    userListReducer,
    userDeleteReducer,
    userUpdateReducer } from './reducers/userReducres.js'

import  { orderCreateReducer,
    orderDetailsReducer,
    orderListReducer,
    orderPayReducer } from './reducers/orderReducers.js'


const reducer = combineReducers({
   productList: productListReducer,
   productDetails: productDetailsReducer,
   cart: cartReducer,
   userLogin: userLoginReducer,
   userRegister: userRegisterReducer,
   userDetails: userDetailsReducer,
   userUpdateProfile: userUpdateProfileReducer,
   orderCreate: orderCreateReducer,
   orderDetails: orderDetailsReducer,
   orderPay: orderPayReducer,
   userList: userListReducer,
   userDelete: userDeleteReducer,
   userUpdate: userUpdateReducer,
   productDelete: productDeleteReducer,
   orderList: orderListReducer,
   productTopRated: productTopRatedReducer

})


const cartItemFromStorage = localStorage.getItem('cartItems') 
? JSON.parse(localStorage.getItem('cartItems')) 
: []

const userInfoFromStorage = localStorage.getItem('userInfo') 
? JSON.parse(localStorage.getItem('userInfo')) 
: null

const shippingAddressFromStorage = localStorage.getItem('shippingAddress') 
? JSON.parse(localStorage.getItem('shippingAddress')) 
: {}

const initialState = {
    cart: {cartItems: cartItemFromStorage, shippingAddress: shippingAddressFromStorage},
    userLogin: {userInfo: userInfoFromStorage},
}

const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware)))

export default store;

