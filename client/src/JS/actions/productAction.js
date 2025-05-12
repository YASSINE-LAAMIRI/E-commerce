import axios from "axios";
import { ADD_PRODUCT, DELETE_PRODUCT, EDIT_PRODUCT, FAIL_PRODUCT, GET_ALL_PRODUCTS,  GET_MY_PRODUCTS, GET_ONE_PRODUCT, LOAD_PRODUCT } from "../actionTypes/productActionTypes";

//Action for get all products
export const getAllProd = () => async (dispatch) => {
    //1. dispatcher le load
dispatch({type: LOAD_PRODUCT})
try{
    const result = await axios.get("/api/product/allProd");
    dispatch({
        type:GET_ALL_PRODUCTS,
        payload: result.data.listProd,
    })

}catch (error){
    dispatch({
        type: FAIL_PRODUCT,
        payload: error.response.data.errors,
    })
}
}

//Action for add product
export const addProduct = (newProduct) => async (dispatch) => {
    dispatch({type: LOAD_PRODUCT})
    try {
        //ajouter le token dans le header:
        let config={
            headers:{
                authorization: localStorage.getItem("token"),

            }
        }
       
//envoyer le nouveau produit et le token:
        const result = await axios.post("/api/product/addProduct",newProduct,config);
        
        dispatch({
            type:ADD_PRODUCT,
            payload: result.data,
        })
        
    dispatch(getMyProd())
    
    } catch (error) {
        dispatch({
            type: FAIL_PRODUCT,
            payload: error.response.data.errors,
        })
        
    }
}


//action for getone product
export const getOneProd = (id) =>async (dispatch) => {
    dispatch({type:LOAD_PRODUCT})
    try {

        const result = await axios.get(`/api/product/${id}`);
        dispatch({
            type: GET_ONE_PRODUCT,
            payload: result.data.prodToGet,
        })
    } catch (error) {
        dispatch({
            type: FAIL_PRODUCT,
            payload: error.response.data.errors,
        })
        
    }
}
//avoir les produit d'un user
export const getMyProd = () => async (dispatch) => {
    dispatch({type:LOAD_PRODUCT})
    try {
        let config={
            headers:{
                authorization: localStorage.getItem("token"),

            }
        }

        const result = await axios.get("/api/product/myProd",config);
        dispatch({
            type: GET_MY_PRODUCTS,
            payload: result.data
            
        })
//console.log(result.data)
       
      // dispatch(getAllProd())
    } catch (error) {
        dispatch({
            type: FAIL_PRODUCT,
            payload: error.response.data.errors,
        })
        
    }
}



//action for edit product
export const editProd = (id,prodToEdit) => async (dispatch) => {
    dispatch({type:LOAD_PRODUCT})
    try {
        let config={
            headers:{
                authorization: localStorage.getItem("token"),

            }
        } 
  
        const result = await axios.put (`/api/product/${id}`,prodToEdit,config);
        dispatch({
            type: EDIT_PRODUCT,
            payload: result.data,
        })
dispatch(getMyProd())
    } catch (error) {
        dispatch({
            type: FAIL_PRODUCT,
            payload: error.response.data.errors,
        })
    }
}

//action for delete product
export const deleteProd = (id) => async (dispatch) => {
    dispatch({type:LOAD_PRODUCT})
    try {
        let config={
            headers:{
                authorization: localStorage.getItem("token"),
            }
        }   


        const result = await axios.delete(`/api/product/${id}`,config);
        dispatch({
            type: DELETE_PRODUCT,
            payload: result.data,
        })
        dispatch(getMyProd())

    } catch (error) {
        dispatch({
            type: FAIL_PRODUCT,
            payload: error.response.data.errors,
        })
    }
}

