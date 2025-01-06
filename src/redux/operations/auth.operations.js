import { createAsyncThunk } from "@reduxjs/toolkit";
import { client, setAuthHeader, clearAuthHeader } from "../../lib/client";

export const Register = clearAuthHeader(
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
