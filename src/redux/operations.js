import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://64499285e7eb3378ca4cfd1f.mockapi.io/',
});

const fetchAllTweets = createAsyncThunk(
    'tweets/fetchAll',
    async (_, thunkAPI) => {
      try {
        const { data } = await instance.get("/users");
        return data;
      } catch (err) {
        return thunkAPI.rejectWithValue(err.message);
      }
    }
);

export const tweetOperations = {
    fetchAllTweets,
} 