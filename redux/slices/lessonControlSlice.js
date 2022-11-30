import { createSlice } from '@reduxjs/toolkit';

export const lessonControlSlice = createSlice({
    name: 'lessonControl',
    initialState: {
        editLesson: false,
        createLesson: true,
        lessonAttachmentList: [],
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

        },
        updateLessonAttachmentList(state, action) {
            state.lessonAttachmentList = action.payload
            console.log("in slice lesson attachment List", state.lessonAttachmentList)
        }
    },
});

export const { showEditLesson, showCreateLesson, updateLessonAttachmentList } = lessonControlSlice.actions;
export default lessonControlSlice.reducer;