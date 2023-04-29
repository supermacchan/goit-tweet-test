import { createSlice } from '@reduxjs/toolkit';

const userInitialState = {
    name: null,
    auth: false,
    favorites: []
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
        follow(state, action) {
            state.favorites.push(action.payload);
        },
        unfollow(state, action) {
            const index = state.favorites.indexOf(action.payload);
            state.favorites.splice(index, 1);
        }
    },
});

export const { signIn, logOut, follow, unfollow } = userSlice.actions;
export const userReducer = userSlice.reducer;