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
    [tweetOperations.fetchAllTweets.fulfilled](state, action) {
        state.items = action.payload;
        console.log(action.payload);
        state.error = null;
        state.loading = false;
    },
    [tweetOperations.fetchAllTweets.pending](state, action) {
        state.loading = true;
    },
    [tweetOperations.fetchAllTweets.rejected](state, action) {
        state.error = action.payload;
    },
  },
});

export const tweetReducer = tweetSlice.reducer;
