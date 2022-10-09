import { createSlice } from '@reduxjs/toolkit';

const initialState = {

}

export const lessonControlSlice = createSlice({
    name: 'lessonControl',
    initialState,
    reducers: {
        
    },
});

export const { addLesson } = lessonControlSlice.actions;
export default lessonControlSlice.reducer;