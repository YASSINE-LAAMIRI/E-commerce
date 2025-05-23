// import

import { ADD_PRODUCT, DELETE_PRODUCT, EDIT_PRODUCT, FAIL_PRODUCT, GET_ALL_PRODUCTS, GET_MY_PRODUCTS, GET_ONE_PRODUCT, LOAD_PRODUCT } from "../actionTypes/productActionTypes"

//initial state
const initialState = {
    loadP:false,
    products: [],
    myProduct:[],
    prod:{},
    success:false,
    error: null,
    
}

//pure fonction
const productReducer = (state = initialState, {type,payload}) => {
    switch (type) {
        case LOAD_PRODUCT:
            return {
                ...state,
                loadP:true,
            }
        case GET_ALL_PRODUCTS:
            return {
                ...state,
                loadP:false,
                products: payload,
                success:true
            }
        case GET_ONE_PRODUCT:  
        return {
            ...state,
            loadP:false,
            prod: payload,
            success:true
        } 
        case GET_MY_PRODUCTS:
            return {
                ...state,
                loadP:false,
                myProduct: payload.myProdList,
                //success:true
            }
        case ADD_PRODUCT:
            return{
                ...state,
                loadP:false,
                products: [...state.products, payload.newProd],
                success:true
            }
        case EDIT_PRODUCT:
            return{
                ...state,
                loadP:false,
                //
                products:
                    state.products.map((prod) => prod._id === payload.id ? {...prod, ...payload.prodToEdit} : prod)
                
            }

            //pour supprimer un produit on va filtrer le tableau des produits et garder tous les produits sauf celui qu'on veut supprimer

        case DELETE_PRODUCT:
            return{
                ...state,
                loadP:false,
                products: state.products.filter((prod) => prod._id !== payload.id),
                success:true
            }
        case FAIL_PRODUCT:
            return{
                ...state,
                loadP:false,
                errors: payload,
                success:false
            }
    
        default:
            return state
    }

}
export default productReducer