import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../app/store";

export interface SimpleState {
    level: number,
    points: number
};

const initialState: SimpleState = {
    level: 10,
    points: 0
};

export const simpleSlice = createSlice({
    name: "simple",
    initialState,
    reducers: {
        increment: state => {
            if (state.level < 99)
                state.level += 1;
        },
        decrement: state => {
            if (state.level > 1)
                state.level -= 1;
        },
        setLevel: (state, action: PayloadAction<number>) => {
            state.level = action.payload;
        },
        updatePoints: (state, action: PayloadAction<number>) => {
            state.points += action.payload;
        }
    }
});

export const { increment, decrement, setLevel, updatePoints } = simpleSlice.actions;

export const selectLevel = (state: RootState) => state.simple.level;

export default simpleSlice.reducer;