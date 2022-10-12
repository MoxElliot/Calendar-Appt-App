import { createSlice } from '@reduxjs/toolkit';

export const lessonControlSlice = createSlice({
    name: 'lessonControl',
    initialState: {
        editLesson: false,
        createLesson: true,
    },
    reducers: {
        showEditLesson(state, action) {
         
            state.editLesson = action.payload
            // if(state.editLesson === false) {
            //     state.editLesson = true; 
            // } else {
            //     state.editLesson = false
            // }

        },
        showCreateLesson(state, action) {
            state.createLesson = action.payload
            // if(state.createLesson === false) {
            //     state.createLesson = true; 
            // } else {
            //     state.createLesson = false
            // }

        }
    },
});

export const { showEditLesson, showCreateLesson } = lessonControlSlice.actions;
export default lessonControlSlice.reducer;