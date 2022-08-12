import { createSlice } from '@reduxjs/toolkit';

const undoSlice = createSlice({
    name: 'undo',
    initialState: {
        past: [],
        present: (undefined, {}),
    },
    reducers: {

    }
})

const { actions, reducer } = undoSlice;
export const { } = actions;
export default reducer;
