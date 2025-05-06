import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Api } from "../config/Api";


export const createUser = createAsyncThunk("users/createUser",
    async (user, { rejectWithValue }) => {
        try {
            let res = await Api.post('/users/create', user);
            return res.data;
        } catch (error) {
            return rejectWithValue({ message: "User Not Created", error });
        }
    })
export const getUser = createAsyncThunk("users/getUser",
    async (_, { rejectWithValue }) => {
        try {
            const res = await Api.get('/users');
            return res.data.users;
        } catch (error) {
            console.log(error);
            return rejectWithValue({ message: "User Not Found", error });

        }
    })
export const getUserById = createAsyncThunk("users/getUserById",
    async (id, { rejectWithValue }) => {
        try {
            const res = await Api.get(`/users/${id}`);
            return res.data.user;
        } catch (error) {
            return rejectWithValue({ message: "User Not Found", error });
        }
    })
export const updateUser = createAsyncThunk("/users/updateUser",
    async ({ id, userUpdate }, { rejectWithValue }) => {
        try {
            let res = await Api.patch(`users/update/${id}`, userUpdate);
            return res.data.user;
        } catch (error) {
            return rejectWithValue({ message: "User Not Found", error });
        }
    })

export const deleteUser = createAsyncThunk("/users/deleteUser",
    async (id, { rejectWithValue }) => {
        try {
            let res = await Api.delete(`users/delete/${id}`);
            return res.data;
        } catch (error) {
            return rejectWithValue({ message: "User Not Found", error });
        }
    })


const initialState = {
    users: [],
    user: {},
    status: "idle",
    error: null,
};

const userSlice = createSlice({
    name: "users",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createUser.fulfilled, (state, action) => {
                state.users.push(action.payload);
                state.status = "succeeded";
            })
            .addCase(getUser.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getUser.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.users = action.payload;
            })

            .addCase(getUser.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload?.message || "Failed to create user";
            })
            .addCase(getUserById.fulfilled, (state, action) => {
                state.user = action.payload;
                state.status = "succeeded";
            })

            .addCase(updateUser.fulfilled, (state, action) => {
                state.users = state.users.map(user =>
                    user._id === action.payload._id ? action.payload : user);

            })
            .addCase(deleteUser.fulfilled, (state, action) => {
                state.users = state.users.filter(user => user._id !== action.payload);
            })

    }
})

export default userSlice.reducer;
