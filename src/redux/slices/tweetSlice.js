import { createSlice } from '@reduxjs/toolkit';
import { tweetOperations } from 'redux/operations';

const initialState = {
    items: [],
    error: null,
    loading: false,
};

export const tweetSlice = createSlice({
    name: 'tweets',
    initialState,
    extraReducers: {
        // fetch all
        [tweetOperations.fetchAllTweets.fulfilled](state, action) {
            state.items = action.payload;
            state.error = null;
            state.loading = false;
        },
        [tweetOperations.fetchAllTweets.pending](state, action) {
            state.loading = true;
            state.items = [];
            state.error = null;
        },
        [tweetOperations.fetchAllTweets.rejected](state, action) {
            state.error = action.payload;
            state.loading = false;
        },
        // fetch followed
        [tweetOperations.fetchFollowed.fulfilled](state, action) {
            state.items = action.payload;
            state.error = null;
            state.loading = false;
        },
        [tweetOperations.fetchFollowed.pending](state, action) {
            state.loading = true;
            state.items = [];
            state.error = null;
        },
        [tweetOperations.fetchFollowed.rejected](state, action) {
            state.error = action.payload;
            state.loading = false;
        },
        // fetch not followed
        [tweetOperations.fetchNotFollowed.fulfilled](state, action) {
            state.items = action.payload;
            console.log(action.payload);
            state.error = null;
            state.loading = false;
        },
        [tweetOperations.fetchNotFollowed.pending](state, action) {
            state.loading = true;
            state.items = [];
            state.error = null;
        },
        [tweetOperations.fetchNotFollowed.rejected](state, action) {
            state.error = action.payload;
            state.loading = false;
        },
        // add new follower
        [tweetOperations.addFollower.fulfilled](state, action) {
            const updatedUser = state.items.find(user => user.id === action.payload.id);
            updatedUser.followers = action.payload.followers;
            state.error = null;
            state.loading = false;
        },
        [tweetOperations.addFollower.pending](state, action) {
            state.loading = true;
            state.items = [];
            state.error = null;
        },
        [tweetOperations.addFollower.rejected](state, action) {
            state.error = action.payload;
            state.loading = false;
        },
        // remove a follower
        [tweetOperations.removeFollower.fulfilled](state, action) {
            const updatedUser = state.items.find(user => user.id === action.payload.id);
            updatedUser.followers = action.payload.followers;
            state.error = null;
            state.loading = false;
        },
        [tweetOperations.removeFollower.pending](state, action) {
            state.loading = true;
            state.items = [];
            state.error = null;
        },
        [tweetOperations.removeFollower.rejected](state, action) {
            state.error = action.payload;
            state.loading = false;
        },
    },
});

export const tweetReducer = tweetSlice.reducer;
