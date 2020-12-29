import { createStore, combineReducers,applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import
 { productListReducer,
   productDetailsReducer } from "./reducers/productReducers"
import {cartReducer} from "./reducers/cartReducer.js"

const reducer = combineReducers({
   productList: productListReducer,
   productDetails: productDetailsReducer,
   cart: cartReducer,
})

const cartItemFromStorage = localStorage.getItem('cartItem') ? JSON.parse(localStorage.getItem('cartItems')) : []

const initialState = {
    cart: {cartItems: cartItemFromStorage}
}

const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware)))

export default store;

