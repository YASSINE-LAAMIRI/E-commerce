import axios from "axios"
import { DELETE_USER, FAIL_USER, GET_ALL_USERS, GET_USER, LOAD_USER,USER_UPDATE_SUCCESS, USER_UPDATE_FAIL  } from "../actionTypes/userActionTypes"
//avoir la liste des users 
export const getUsers = ()=> async(dispatch)=>{
    dispatch ({type:LOAD_USER})
    try {
        
        const config = {
            headers:{
                authorization: localStorage.getItem("token"),
            },
        }
        const result = await axios.get("/api/user/allUsers",config)
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

export const getOneUser = (_id)=> async(dispatch)=>{
    dispatch ({type:LOAD_USER})
    try {
        
        const config = {
            headers:{
                authorization:localStorage.getItem("token")
            }
        }
        const result = await axios.get(`/api/user/${_id}`,config)
        dispatch({

            type: GET_USER,
            payload: result.data.userToGet,
        })
// console.log(result.data)
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
        //pour metttre à jour la liste des users
        dispatch(getUsers())
    } catch (error) {

        dispatch ({FAIL_USER,payload: error.response.data.errors})        
    }
};





export const updateProfile = (updatedData) => async (dispatch) => {
  try {
    const token = localStorage.getItem('token');
    
    const res = await axios.put('/api/user/profile', updatedData, {
      headers: { Authorization: token },
    });

    dispatch({ type: USER_UPDATE_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({
      type: USER_UPDATE_FAIL,
      payload: err.response?.data?.msg || "Erreur",
    });
  }
};
