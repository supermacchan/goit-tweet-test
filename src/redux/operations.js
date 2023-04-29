import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const instance = axios.create({
    baseURL: 'https://64499285e7eb3378ca4cfd1f.mockapi.io/',
});

const fetchAllTweets = createAsyncThunk(
    'tweets/fetchAll',
    async ({page, itemsPerPage}, thunkAPI) => {
      try {
        const { data } = await instance.get("/users");

        if (!page) {
            const result = data.slice(0, itemsPerPage);
            return result;
        }

        const firstIndex = (page - 1) * itemsPerPage;
        const secondIndex = firstIndex + itemsPerPage;
        
        const result = data.slice(firstIndex, secondIndex);
        return result;
      } catch (err) {
        return thunkAPI.rejectWithValue(err.message);
      }
    }
);

const fetchFollowed = createAsyncThunk(
    'tweets/fetchFollowed',
    async ({favorites, page, itemsPerPage}, thunkAPI) => {
        try {
            const { data } = await instance.get("/users");
            const followed = data.filter((item) => favorites.includes(item.id));

            if (!page) {
                const result = followed.slice(0, itemsPerPage);
                return result;
            }
    
            const firstIndex = (page - 1) * itemsPerPage;
            const secondIndex = firstIndex + itemsPerPage;
            
            const result = followed.slice(firstIndex, secondIndex);
            return result;

            // return followed;
        } catch (err) {
            return thunkAPI.rejectWithValue(err.message);
        }
    }
)

const fetchNotFollowed = createAsyncThunk(
    'tweets/fetchFollowed',
    async ({favorites, page, itemsPerPage}, thunkAPI) => {
        try {
            const { data } = await instance.get("/users");
            const notFollowed = data.filter((item) => !favorites.includes(item.id));
            
            if (!page) {
                const result = notFollowed.slice(0, itemsPerPage);
                return result;
            }
    
            const firstIndex = (page - 1) * itemsPerPage;
            const secondIndex = firstIndex + itemsPerPage;
            
            const result = notFollowed.slice(firstIndex, secondIndex);
            return result;

            // return notFollowed;
        } catch (err) {
            return thunkAPI.rejectWithValue(err.message);
        }
    }
)

const addFollower = createAsyncThunk(
    'tweets/addFollower',
    async (id, thunkAPI) => {
        try {
            const { data } = await instance.get(`/users/${id}`);
            const newFollowersCount = data.followers + 1;
            const updatedUser = {...data, followers: newFollowersCount};
            await instance.put(`/users/${id}`, updatedUser);
            return updatedUser;
        } catch (err) {
            return thunkAPI.rejectWithValue(err.message);
        }
    }
)

const removeFollower = createAsyncThunk(
    'tweets/removeFollower',
    async (id, thunkAPI) => {
        try {
            const { data } = await instance.get(`/users/${id}`);
            const newFollowersCount = data.followers - 1;
            const updatedUser = {...data, followers: newFollowersCount};
            await instance.put(`/users/${id}`, updatedUser);
            return updatedUser;
        } catch (err) {
            return thunkAPI.rejectWithValue(err.message);
        }
    }
)

export const tweetOperations = {
    fetchAllTweets,
    fetchFollowed,
    fetchNotFollowed,
    addFollower,
    removeFollower
} 