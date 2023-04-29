import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

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

const fetchFollowed = createAsyncThunk(
    'tweets/fetchFollowed',
    async (favorites, thunkAPI) => {
        try {
            const { data } = await instance.get("/users");
            const followed = data.filter((item) => favorites.includes(item.id));
            return followed;
        } catch (err) {
            return thunkAPI.rejectWithValue(err.message);
        }
    }
)

const fetchNotFollowed = createAsyncThunk(
    'tweets/fetchFollowed',
    async (favorites, thunkAPI) => {
        try {
            const { data } = await instance.get("/users");
            const notFollowed = data.filter((item) => !favorites.includes(item.id));
            return notFollowed;
        } catch (err) {
            return thunkAPI.rejectWithValue(err.message);
        }
    }
)

export const tweetOperations = {
    fetchAllTweets,
    fetchFollowed,
    fetchNotFollowed
} 