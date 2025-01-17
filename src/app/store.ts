import { configureStore } from "@reduxjs/toolkit";
import simpleReducer from '../features/simpleSlice';

export const store = configureStore({
    reducer: {
        simple: simpleReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;