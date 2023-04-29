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
    },
    // fetch followed
    [tweetOperations.fetchFollowed.fulfilled](state, action) {
        state.items = action.payload;
        console.log(action.payload);
        state.error = null;
        state.loading = false;
    },
    [tweetOperations.fetchFollowed.pending](state, action) {
        state.loading = true;
        state.items = [];
        state.error = null;
    },
    [tweetOperations.fetchFollowed.rejected](state, action) {
        console.log(action.payload);
        state.error = action.payload;
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
        console.log(action.payload);
        state.error = action.payload;
    },
  },
});

export const tweetReducer = tweetSlice.reducer;
