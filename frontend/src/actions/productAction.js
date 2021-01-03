import { PRODUCT_LIST_FAIL,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_REQUEST,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS, 
    PRODUCT_DETAILS_FAIL,
    PRODUCT_DELETE_FAIL,
    PRODUCT_DELETE_SUCCESS,
    PRODUCT_DELETE_REQUEST,
    PRODUCT_TOP_REQUEST,
    PRODUCT_TOP_SUCCESS,
    PRODUCT_TOP_FAIL
    } 
    from "../constants/productConstant";
import axios from "axios";

export const listProducts=(keyword='') => async(dispatch)=> {
   try{
       dispatch({type: PRODUCT_LIST_REQUEST})

       const {data} = await axios.get(`/api/products?keyword=${keyword}`)

       dispatch({
           type: PRODUCT_LIST_SUCCESS,
           payload: data,
       })
   }catch(error){
    dispatch({
        type: PRODUCT_LIST_FAIL,
        payload: error.response && error.response.data.message 
        ? error.response.data.message 
        : error.message,
    })
   }
}


export const listProductsDetails=(id) => async(dispatch)=> {
    try{
        dispatch({type: PRODUCT_DETAILS_REQUEST})
 
        const {data} = await axios.get(`/api/products/${id}`)
 
        dispatch({
            type: PRODUCT_DETAILS_SUCCESS,
            payload: data,
        })
    }catch(error){
     dispatch({
         type: PRODUCT_DETAILS_FAIL,
         payload: error.response && error.response.data.message 
         ? error.response.data.message 
         : error.message,
     })
    }
 }



   
 export const deleteProduct = (id)=> async(dispatch,getState)=>{
    try{
      dispatch({
          type: PRODUCT_DELETE_REQUEST
      })
      const { userLogin: { userInfo }, } = getState()

      const config = {
          headers:{

              Authorization: `Bearer ${userInfo.token}`
          }
      }
       await axios.delete(`/api/products/${id}`,config)
      dispatch({
          type: PRODUCT_DELETE_SUCCESS ,
      })
    }
    catch(error){
     dispatch({
         type: PRODUCT_DELETE_FAIL,
         payload: error.response && error.response.data.message 
         ? error.response.data.message 
         : error.message,  
     })
    }
 }

 export const listTopProducts = () => async(dispatch)=> {
    try{
        dispatch({type: PRODUCT_TOP_REQUEST})
 
        const {data} = await axios.get(`/api/products/top`)
 
        dispatch({
            type: PRODUCT_TOP_SUCCESS,
            payload: data,
        })
    }catch(error){
     dispatch({
         type: PRODUCT_TOP_FAIL,
         payload: error.response && error.response.data.message 
         ? error.response.data.message 
         : error.message,
     })
    }
 }