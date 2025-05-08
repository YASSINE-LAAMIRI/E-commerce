import axios from "axios"
import { DELETE_USER, FAIL_USER, GET_ALL_USERS, GET_USER, LOAD_USER } from "../actionTypes/userActionTypes"
//avoir la liste des users 
export const getUsers = ()=> async(dispatch)=>{
    dispatch ({type:LOAD_USER})
    try {
        
        const config = {
            headers:{
                authorization: localStorage.getItem("token"),
            },
        }
        const result = await axios.get("/api/user/allUsers ",config)
        dispatch({

            type:GET_ALL_USERS,
            payload:result.data.listUsers,

        })
    } catch (error) {

        dispatch ({FAIL_USER,
            payload: error.response.data.errors})
        
    }
}

//getOne (détail d'un utilisateur)

export const getOneUser = (id)=> async(dispatch)=>{
    dispatch ({type:LOAD_USER})
    try {
        
        const config = {
            headers:{
                authorization:localStorage.getItem("token")
            }
        }
        const result = await axios.get(`/api/user/${id}`,config)
        dispatch({

            type:GET_USER,
            payload:result.data.userToGet,
        })

    } catch (error) {

        dispatch ({FAIL_USER,payload:error.response.data.errors})
        
    }
}

//delete users

export const deleteUser = (id)=> async(dispatch)=>{
    dispatch ({type:LOAD_USER})
    try {
        
        const config = {
            headers:{
                authorization:localStorage.getItem("token")
            }
        }
        const result = await axios.delete(`/api/user/${id}`,config);
        dispatch({

            type:DELETE_USER,
            payload:result.data.userToDelete,
        })
        
    } catch (error) {

        dispatch ({FAIL_USER,payload:error.response.data.errors})        
    }
};