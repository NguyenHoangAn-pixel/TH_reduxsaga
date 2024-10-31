import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,
    todos: [],
    loading: false,
    error: null, // Added for error handling
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        fetchUserRequest: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchUserSuccess: (state, action) => {
            state.user = action.payload;
            state.loading = false;
        },
        fetchUserFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload || 'Failed to fetch user'; // Capture error
        },
        addTodoRequest: (state) => {
            state.loading = true;
            state.error = null;
        },
        addTodoSuccess: (state, action) => {
            state.todos = [...state.todos, action.payload]; // Add new todo to array
            state.loading = false;
        },
        addTodoFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload || 'Failed to add todo'; // Capture error
        },
    },
});

export const {
    fetchUserRequest,
    fetchUserSuccess,
    fetchUserFailure,
    addTodoRequest,
    addTodoSuccess,
    addTodoFailure,
} = userSlice.actions;

export default userSlice.reducer;
