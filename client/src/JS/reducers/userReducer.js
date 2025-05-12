//import

const { LOAD_USER, GET_ALL_USERS, GET_USER, DELETE_USER, FAIL_USER } = require("../actionTypes/userActionTypes");



//initialisation
const initialState={
    users:[],
    user:{},
    isLoad:false,
    errors:[],
    success:[]
}


//pure function
const userReducer = (state=initialState,{type,payload})=>{
switch (type) {
    case LOAD_USER:return{
        ...state,
        isLoad:true
    }
    case GET_ALL_USERS:
       // console.log(payload)
        return{
        ...state,
        isLoad:false,
        users:payload,
        // success:payload.success
    }

    case GET_USER : 
        return {
        ...state, 
        isLoad:false,
        user:payload,
      //  success:payload.success
    }

    case DELETE_USER:
        const newlist = state.users.filter((el)=>el._id !== payload.id)
        return {
        ...state,
        isLoad:false,
         user:payload,
        users:newlist,
       // success:payload.success,
    }

    case FAIL_USER:
        return{
            ...state,
            isLoad: false,
            errors: payload
        }
        
       

    default:
        return state;
}

}
export default userReducer;