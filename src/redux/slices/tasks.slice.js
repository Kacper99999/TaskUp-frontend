import { createSlice } from "@reduxjs/toolkit";
import { fetchTasks, addTask, removeTask } from "../operations/tasks.operations";

const initialState = {
    tasks: [],
    isLoading: false,
    error: null,
}

const handlePending = state => {
    state.isLoading = true;
};

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
}

const tasksSlice = createSlice({
    name:"tasks",
    initialState,
    extraReducers: builder => {
        builder
        .addCase(fetchTasks.pending, handlePending)
        .addCase(fetchTasks.fulfilled, (state, action) => {
            state.tasks = action.payload.tasks;
            state.isLoading = false;
            state.error = null;
        })
        .addCase(fetchTasks.rejected, handleRejected)
        .addCase(addTask.pending, handlePending)
        .addCase(addTask.fulfilled, (state, action) => {
            state.tasks.push(action.payload);
            state.isLoading = false;
            state.error = null;
        })
        .addCase(addTask.rejected, handleRejected)
        .addCase(removeTask.pending, handlePending)
        .addCase(removeTask.fulfilled, (state, action) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload.id);
            state.isLoading = false;
            state.error = null;
        })
        .addCase(removeTask.rejected, handleRejected);
    }
})

export const tasksReducer = tasksSlice.reducer;