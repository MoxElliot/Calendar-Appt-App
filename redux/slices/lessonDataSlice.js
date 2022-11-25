import { createSlice, nanoid } from '@reduxjs/toolkit';



const lessonDataArr = [
    {id:1, date: "xx/xx/xxx", time: "xx:xx", status:"Booked", detail:"Arma virumque canō, Trōiae quī prīmus ab ōrīs", attachment:["Lāvīniaque.sgf", "Opening.sgf"], name:"Student name", link:"Discord"},
    {id:2, date: "xx/xx/xxx", time: "xx:xx", status:"Booked", detail:"Arma virumque canō, Trōiae quī prīmus ab ōrīs", attachment:["Lāvīniaque.sgf"], name:"Student name", link:"Discord"},
    {id:3, date: "xx/xx/xxx", time: "xx:xx", status:"Requested", detail:"Arma virumque canō, Trōiae quī prīmus ab ōrīs", attachment:["Lāvīniaque.sgf"], name:"Student name", link:"Discord"},
    {id:4, date: "xx/xx/xxx", time: "xx:xx", status:"Booked", detail:"Arma virumque canō, Trōiae quī prīmus ab ōrīs", attachment:["Lāvīniaque.sgf"], name:"Student name", link:"Discord"},
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
    },
});

export const { addLesson, readLesson } = lessonDataSlice.actions;
export default lessonDataSlice.reducer;