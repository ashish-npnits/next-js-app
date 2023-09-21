import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface AuthState  {
    username: string,
    email: string,
    isVerfied: boolean,
    isAdmin: boolean
}

const initialState = {
    value:{
        username:"",
        email:"",
        isVerfied:false,
        isAdmin:false
    } as AuthState
}

export const auth = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout:()=>{
            return initialState;
        },
        login:(state, action: PayloadAction<AuthState>)=>{
            return {
                value: action.payload
            }
        }
    }
})

export const {login, logout} = auth.actions;
export default auth.reducer;