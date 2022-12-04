import { createSlice } from '@reduxjs/toolkit';

export const lessonControlSlice = createSlice({
    name: 'lessonControl',
    initialState: {
        editLesson: false,
        createLesson: true,
        lessonAttachmentList: [],
        removeIndex:"",
    },
    reducers: {
        showEditLesson(state, action) {
            state.editLesson = action.payload
        },
        showCreateLesson(state, action) {
            state.createLesson = action.payload
        },
        updateLessonAttachmentList(state, action) {
            state.lessonAttachmentList = [...state.lessonAttachmentList, action.payload]
            console.log("in slice lesson attachment List", state.lessonAttachmentList)
        },
        removeLessonAttachment(state, action) {
            console.log("in Slice action.payload", action.payload)
            state.removeIndex = action.payload
            state.lessonAttachmentList = action.payload
            console.log("in slice removeIndex", state.removeIndex)
        },
        clearLessonAttachmentList(state) {
            state.lessonAttachmentList = []
            console.log("in clear Lesson Attachment List")
        }
    },
});

export const { showEditLesson, showCreateLesson, updateLessonAttachmentList, removeLessonAttachment, clearLessonAttachmentList, toggleAttachClear } = lessonControlSlice.actions;

export default lessonControlSlice.reducer;