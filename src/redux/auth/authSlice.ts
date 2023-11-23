import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { register, logIn, logOut, updateUser} from './operations';

interface User {
    name: string;
    email: string;
}

interface AuthState {
    user: User;
    token: string;
    isLoggedIn: boolean;
    isUpdating: boolean;
}

type UserWithToken = {
    user: User;
    token: string;
}

const initialState: AuthState = {
    user: { name: "", email: ""},
    token: "", 
    isLoggedIn: false, 
    isUpdating: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: {
        [register.fulfilled.toString()](state, action: PayloadAction<UserWithToken>) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        },
        [logIn.fulfilled.toString()](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        },
        [logOut.fulfilled.toString()](state) {
            state.user = {name: "", email: ""};
            state.token = "";
            state.isLoggedIn = false;
        },
        [updateUser.pending.toString()](state) {
            state.isUpdating = true;
        },
        [updateUser.fulfilled.toString()](state, action:PayloadAction<User>) {
            state.user = action.payload;
            state.isLoggedIn = true;
            state.isUpdating = false;
        },
        [updateUser.rejected.toString()](state) {
            state.isUpdating = false;
        },
    },

});

export const authReducer = authSlice.reducer;