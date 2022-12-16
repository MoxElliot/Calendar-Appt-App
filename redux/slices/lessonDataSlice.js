import { createSlice } from '@reduxjs/toolkit';

const lessonDataArr = [
    {id:1, date: "xx/xx/xxx", time: "xx:xx", status:"Booked", detail:"Arma virumque canō, Trōiae quī prīmus ab ōrīs", attachment:["Lāvīniaque.sgf", "Opening.sgf"], name:"Tim Timson", link:"Discord"},
    {id:2, date: "xx/xx/xxx", time: "xx:xx", status:"Booked", detail:"Arma virumque canō, Trōiae quī prīmus ab ōrīs", attachment:["Lāvīniaque.sgf"], name:"John Johnson", link:"Discord"},
    {id:3, date: "xx/xx/xxx", time: "xx:xx", status:"Requested", detail:"Arma virumque canō, Trōiae quī prīmus ab ōrīs", attachment:["Lāvīniaque.sgf"], name:"Sam Samson", link:"Discord"},
    {id:4, date: "xx/xx/xxx", time: "xx:xx", status:"Booked", detail:"Arma virumque canō, Trōiae quī prīmus ab ōrīs", attachment:["Lāvīniaque.sgf"], name:"Will Willson", link:"Discord"},
    ]


export const lessonDataSlice = createSlice({
    name: 'lessonData',
    initialState: {
        lessonData: lessonDataArr,
        singleLessonData: "Select a Lesson"
    },
    reducers: {
        addLesson(state, action) {
            state.lessonData.push(action.payload)
        },
        readLesson(state, action) {
            state.singleLessonData = action.payload
        },
        cancelLesson(state, action) {
            console.log("in editLesson, action", action)
            const index = state.lessonData.findIndex(lesson => lesson.id !==action.payload)
            const newArray = [...state.lessonData];
            newArray[index].status = 'Canceled'
            state.singleLessonData[3] = 'Canceled'
            console.log("in EditLesson cancel", state.singleLessonData[3])
            
        }
    },
});

export const { addLesson, readLesson, cancelLesson } = lessonDataSlice.actions;
export default lessonDataSlice.reducer;