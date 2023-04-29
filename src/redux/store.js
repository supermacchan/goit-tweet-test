import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { filtersReducer } from "./slices/filterSlice";
import { userReducer } from "./slices/userSlice";
import { tweetReducer } from "./slices/tweetSlice";
import localStorage from 'redux-persist/lib/storage';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

const persistConfig = {
    key: 'root/tweets',
    storage: localStorage,
    blacklist: ['filter'],
    stateReconciler: autoMergeLevel2,
};

const rootReducer = combineReducers({
    user: userReducer,
    filters: filtersReducer,
    tweets: tweetReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => 
      getDefaultMiddleware({
          serializableCheck: {
              ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
      })
});

export const persistor = persistStore(store);