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
        },
        showCreateLesson(state, action) {
            state.createLesson = action.payload
        },
        updateLessonAttachmentList(state, action) {
            state.lessonAttachmentList = action.payload
            console.log("in slice lesson attachment List", state.lessonAttachmentList)
        }
    },
});

export const { showEditLesson, showCreateLesson, updateLessonAttachmentList } = lessonControlSlice.actions;
export default lessonControlSlice.reducer;