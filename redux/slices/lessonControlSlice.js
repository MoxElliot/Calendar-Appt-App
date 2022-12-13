import { createSlice } from '@reduxjs/toolkit';

export const lessonControlSlice = createSlice({
    name: 'lessonControl',
    initialState: {
        editLesson: false,
        createLesson: true,
        lessonAttachmentList: [],
        removeIndex:"",
        attachClear:false,
    },
    reducers: {
        showEditLesson(state, action) {
            state.editLesson = action.payload
        },
        showCreateLesson(state, action) {
            state.createLesson = action.payload
        },
        updateLessonAttachmentList(state, action) {
            if (state.lessonAttachmentList === undefined || state.lessonAttachmentList === null) {
                state.lessonAttachmentList = []
            }
            state.lessonAttachmentList = [...state.lessonAttachmentList, action.payload]
        },
        removeLessonAttachment(state, action) {
            console.log("removeIndex", state.removeIndex)
            console.log("action.payload", action.payload)
            console.log("lessonAttachmentList before payload", state.lessonAttachmentList)
            state.lessonAttachmentList = action.payload
            console.log("lessonAttachmentList after payload", state.lessonAttachmentList)
           
            
        },
        clearLessonAttachmentList(state, action) {
            state.lessonAttachmentList = action.payload
         
        },
        toggleAttachClear(state, action) {
            state.attachClear = action.payload
           
        }
    },
});

export const { showEditLesson, showCreateLesson, updateLessonAttachmentList, removeLessonAttachment, clearLessonAttachmentList, toggleAttachClear } = lessonControlSlice.actions;
export default lessonControlSlice.reducer;