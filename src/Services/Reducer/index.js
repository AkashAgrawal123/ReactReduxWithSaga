import { combineReducers } from "redux";
import { cartData } from "./CartReducer";
import { productData } from "./ProductReducer";

const rootRedcuer = combineReducers({
    cartData, 
    // productData
})

export default rootRedcuer;