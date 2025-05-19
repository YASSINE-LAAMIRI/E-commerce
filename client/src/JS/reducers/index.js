
import { combineReducers } from "redux";
import authReducer from "./authReducer"
import userReducer from "./userReducer";
import productReducer from "./productReducer";
import cartReducer from "./cartReducer";
import orderReducer from "./orderReducer";


const rootReducer = combineReducers({ authReducer,userReducer,productReducer,cartReducer,orderReducer });

export default rootReducer;