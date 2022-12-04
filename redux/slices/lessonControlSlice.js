import { createSlice } from '@reduxjs/toolkit';

export const lessonControlSlice = createSlice({
    name: 'lessonControl',
    initialState: {
        editLesson: false,
        createLesson: true,
        lessonAttachmentList: [],
        removeIndex:"",
        attachClear: false,
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
        },
        removeLessonAttachment(state, action) {
            state.removeIndex = action.payload
            state.lessonAttachmentList = action.payload
        },
        clearLessonAttachmentList(state, action) {
            state.lessonAttachmentList = action.payload
        },
        toggleAttachClear(state, action) {
            state.attachClear = action.payload
            console.log('in toggleAttachClear', state.attachClear)
        }
    },
});

export const { showEditLesson, showCreateLesson, updateLessonAttachmentList, removeLessonAttachment, clearLessonAttachmentList, toggleAttachClear } = lessonControlSlice.actions;
export default lessonControlSlice.reducer;