const { current } = require("../actions/authAction");
const { LOAD_AUTH, SUCCESS_AUTH, FAIL_AUTH, CURRENT_AUTH, LOGOUT_AUTH, CLEAR_SUCCESS_AUTH, CLEAR_ERRORS_AUTH } = require("../actionTypes/authActionTypes");
const { USER_UPDATE_FAIL, USER_UPDATE_SUCCESS } = require("../actionTypes/userActionTypes");

//initialisation 
const initialstate={
    isLoad:false,
    user:{},
    errors:[],
    success:[],
    isAuth:false,   

};

// fonction

const authReducer = (state=initialstate,{type,payload})=>{
    switch (type) {
        case LOAD_AUTH:return{
            ...state,
            isLoad:true
        }
        case SUCCESS_AUTH:localStorage.setItem("token",payload.token)
        return{
            ...state,
            isLoad:true,
            user:payload.User,
            success:payload.success,
            isAuth:true,
        }
        case FAIL_AUTH : return{
            ...state,
            isLoad:false,
            errors:payload}
        case CURRENT_AUTH: return{...state,
            isLoad:false,
            user:payload,
            isAuth:true,
        }
        case LOGOUT_AUTH:
            localStorage.removeItem("token")
            return{
                isLoad:false,
                user:{},
                errors:[],
                success:[],
                isAuth:false, 
            }  
            case CLEAR_SUCCESS_AUTH:
                return{
                    ...state,
                    success:[]
                }
            case CLEAR_ERRORS_AUTH:
                return{
                    ...state,
                    errors:[]
                }   
            
            case USER_UPDATE_SUCCESS:
                 return { ...state, user: payload, success: "Profil mis à jour" };
            case USER_UPDATE_FAIL:
                 return { ...state, errors: payload };
    
        default:
           return state;
    }
}
module.exports=authReducer