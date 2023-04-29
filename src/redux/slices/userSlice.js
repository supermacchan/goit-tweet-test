import { createSlice } from '@reduxjs/toolkit';

const userInitialState = {
    name: null,
    auth: false,
}

export const userSlice = createSlice({
    name: "user",
    initialState: userInitialState,
    reducers: {
        signIn(state, action) {
            state.name = action.payload;
            state.auth = true;
        },
        logOut(state) {
            state.name = null;
            state.auth = false;
        },
    },
});

export const { signIn, logOut } = userSlice.actions;
export const userReducer = userSlice.reducer;