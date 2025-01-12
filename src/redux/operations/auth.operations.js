import { createAsyncThunk } from "@reduxjs/toolkit";
import { client, setAuthHeader, clearAuthHeader } from "../../lib/client";

export const register = createAsyncThunk(
    "auth/register",
    async(credencials, thunkAPI) => {
        try {
            const response = await client.post("/users/signup", credencials);
            setAuthHeader(response.data.token);
            return response.data;
        }
        catch(error){
            return thunkAPI.rejectedWithValue(error.message);
        }
    }
)

export const logIn = createAsyncThunk(
    "auth/logIn",
    async(credencials, thunkAPI) => {
        try {
            const response = await client.post("users/login", credencials);
            setAuthHeader(response.data.token);
            return response.data;
        }
        catch(error){
            return thunkAPI.rejectedWithValue(error.message);
        }
    }
)

export const logOut = createAsyncThunk(
    "auth/logOut",
    async(_, thunkAPI) => {
        try {
            await client.post("users/logout");
            clearAuthHeader();
        }
        catch(error){
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

export const refreshUser = createAsyncThunk(
    "auth/refresh",
    async(_,thunkAPI) => {
        const state = thunkAPI.getState();
        const persistedToken = state.auth.token;

        if(persistedToken === null){
            thunkAPI.rejectWithValue("Unalbe to featch user");
        }
        try{
            setAuthHeader(persistedToken);
            const response = await client.get("users/current");
            return response.data;
        }
        catch(error){
            thunkAPI.rejectWithValue(error.message);
        }
    }
)