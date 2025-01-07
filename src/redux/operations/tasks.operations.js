import { createAsyncThunk } from "@reduxjs/toolkit";
import { client } from "../../lib/client";

export const fetchTasks = createAsyncThunk(
    "tasks/fetchTasks",
    async(_, thunkAPI) => {
        try{
            const response = await client.get("/tasks");
            return response.data;
        }
        catch(error){
            thunkAPI.rejectWithValue(error.message)
        }
    }
)

export const addTask = createAsyncThunk(
    "tasks/addTask",
    async(task, thunkAPI) => {
        try{
            const response = await client.post("/tasks", task);
            return response.data;
        }
        catch(error){
            thunkAPI.rejectWithValue(error.message);
        }
    }
)

export const removeTask = createAsyncThunk(
    "tasks/removeTask",
    async(taskId, thunkAPI) => {
        try{
            const response = await client.delete(`/tasks/${taskId}`);
            return response.data;
        }
        catch(error){
            thunkAPI.rejectWithValue(error.message);
        }
    }
)
