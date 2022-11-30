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
            for (let i = 0; i < action.payload.repeat; i++){
            console.log(i)
            state.lessonData.push(action.payload)}
            console.log("in addLesson LessonDataSlice, repeat", action.payload.repeat)
        },
        readLesson(state, action) {
            state.singleLessonData = action.payload
        },
    },
});

export const { addLesson, readLesson } = lessonDataSlice.actions;
export default lessonDataSlice.reducer;