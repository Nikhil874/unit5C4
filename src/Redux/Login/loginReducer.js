import { LOGIN } from "./action";
const initialState = { user: null };

export const loginReducer = (store = initialState, { type, payload }) => {
    switch (type) {
        // add your login reducer functionalities here
        case LOGIN:
            let obj={...payload,status:true}
            localStorage.setItem("userLoginDetails",JSON.stringify(obj));
            return {...store,user:{...payload,status:true}};
            default:
                return store;

    }
}