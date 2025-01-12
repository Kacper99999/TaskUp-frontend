import { createSlice } from "@reduxjs/toolkit";
import { register, logIn, logOut, refreshUser } from "../operations/auth.operations";

const initialState = {
    user: {name: null, email: null},
    token: null,
    isLoggedIn: false,
    isLoading: false,
    error: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: builder => {
        builder
        .addCase(register.pending, state => {
            state.isLoading = true;
        })
        .addCase(register.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
            state.isLoading = false;
            state.error = null;
        })
        .addCase(register.rejected, (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        })
        .addCase(logIn.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(logIn.fulfilled, (state,action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
            state.isLoading = false;
            state.error = null;
        })
        .addCase(logIn.rejected, (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        })
        .addCase(logOut.pending, state => {
            state.isLoading = true;
        })
        .addCase(logOut.fulfilled, state => {
            state.user = {name:null, email:null};
            state.token = null;
            state.isLoggedIn = false;
            state.isLoading = false;
            state.error = null;
        })
        .addCase(logOut.rejected, (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        })
        .addCase(refreshUser.pending, state => {
            state.isLoading = true;
        })
        .addCase(refreshUser.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
            state.isLoading = false;
            state.error = null;
        })
        .addCase(refreshUser.rejected, (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        }) 
    }
}
)

export const authReducer = authSlice.reducer;