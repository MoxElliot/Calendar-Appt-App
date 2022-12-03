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
            state.removeIndex = action.payload
            state.lessonAttachmentList = action.payload
            console.log("in slice removeIndex", state.removeIndex)
            // state.lessonAttachmentList = state.lessonAttachmentList.filter((_, i) => 
            // i === state.removeIndex)

            // console.log("inSLice State", state.lessonAttachmentList)
            // console.log("in SLice action", action.payload)
            
        }
    },
});

export const { showEditLesson, showCreateLesson, updateLessonAttachmentList, removeLessonAttachment } = lessonControlSlice.actions;
export default lessonControlSlice.reducer;