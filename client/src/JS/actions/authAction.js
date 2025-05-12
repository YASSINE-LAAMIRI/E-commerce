//imports


//import { useNavigate } from "react-router-dom"
import {CLEAR_ERRORS_AUTH, CLEAR_SUCCESS_AUTH, CURRENT_AUTH, FAIL_AUTH, LOAD_AUTH, LOGOUT_AUTH, SUCCESS_AUTH } from "../actionTypes/authActionTypes"

import axios from "axios"



//Reducers


//les fonctions qui retournes un objet: actions (type,payload): Quand tu veux créer un nouveau compte :
            // Tu envoies les données à /api/auth/register
            // Si ça réussit : tu stockes le user + token
            // Sinon : tu affiches les erreurs

export const register = (newUser,navigate)=>async (dispatch) =>{

    dispatch({type:LOAD_AUTH})

    try {
        console.log(newUser) 
        const result = await axios.post("/api/auth/register",newUser) 
        dispatch({type:SUCCESS_AUTH,payload:result.data})
        navigate("/profile")
        
       
    } catch (error) {
        dispatch({type:FAIL_AUTH,payload:error.response.data.errors})
        
    }



}

//action login pour connecter un user existe 

export const login = (user,navigate)=>async (dispatch)=>{
    dispatch({type:LOAD_AUTH})
    try {
        const result = await axios.post("/api/auth/login",user)
        dispatch({type:SUCCESS_AUTH,payload:result.data})
        navigate("/profile")
        
    } catch (error) {
        dispatch({type:FAIL_AUTH,payload:error.response.data.errors})
    }


}

//action current pour vérifier le user connecté

export const current = () => async (dispatch)=>{
    dispatch({type:LOAD_AUTH})

    try {
        let config={headers:{authorization:localStorage.getItem("token"),
        }
    }
    const result = await axios.get("/api/auth/current",config)
    dispatch({type:CURRENT_AUTH,payload:result.data})

        
    } catch (error) {
        dispatch({type:FAIL_AUTH,payload:error.response.data.errors})
    }
}

//logout

export const logout = (navigate)=>(dispatch) =>{dispatch({type:LOGOUT_AUTH})
navigate("/")
}

export const clearError = () => {
    return {
    type: CLEAR_ERRORS_AUTH
};
  }
export const clearSuccess = () => {
    return {
    type: CLEAR_SUCCESS_AUTH
};
  }