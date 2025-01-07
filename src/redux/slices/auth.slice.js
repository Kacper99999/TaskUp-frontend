import { createSlice } from "@reduxjs/toolkit";
import { register, logIn, logOut, refreshUser } from "../operations/auth.operations";
import { act } from "react";

const initialState = {
    user: {name: null, emial: null},
    token: null,
    isLoggedIn: false,
    isRefresing: false
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: builder => {
        builder
        .addCase(register.pending, state =>{
            state.isLoggedIn = true;
        })
        .addCase(register.fulfilled,(state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        })
        .addCase(register.rejected)
        
    }
}
)