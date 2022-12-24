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
        setAttachementList(state, action) {
            state.lessonAttachmentList = action.payload
            console.log("in SetAttachmentList", state.lessonAttachmentList)
        },
        updateLessonAttachmentList(state, action) {
            if (state.lessonAttachmentList === undefined || state.lessonAttachmentList === null) {
                state.lessonAttachmentList = []
            }
            state.lessonAttachmentList = [...state.lessonAttachmentList, action.payload]
            console.log("in updateLessonAttachmentList", state.lessonAttachmentList)
        },
        removeLessonAttachment(state, action) {
            state.removeIndex = action.payload
            state.lessonAttachmentList = state.lessonAttachmentList.splice(state.removeIndex, 1)
            // console.log("in removeLessonAttachment removeIndex", state.removeIndex)
            // console.log("in removeLessonAttachment lessonAttachmentList", state.lessonAttachmentList)
        },
        clearLessonAttachmentList(state, action) {
            state.lessonAttachmentList = action.payload
         
        },
        toggleAttachClear(state, action) {
            state.attachClear = action.payload
           
        }
    },
});

export const { showEditLesson, showCreateLesson, setAttachementList, updateLessonAttachmentList, removeLessonAttachment, clearLessonAttachmentList, toggleAttachClear } = lessonControlSlice.actions;
export default lessonControlSlice.reducer;