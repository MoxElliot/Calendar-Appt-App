import { createSlice, nanoid } from '@reduxjs/toolkit';

// const lessonDataArr = [
//     {id:1, date: "xx/xx/xxx", time: "xx:xx", status:"Booked", detail:"Arma virumque canō, Trōiae quī prīmus ab ōrīs", attachment:"Lāvīniaque.sgf", name:"Student name", link:"Discord"},
//     {id:2, date: "xx/xx/xxx", time: "xx:xx", status:"Booked", detail:"Arma virumque canō, Trōiae quī prīmus ab ōrīs", attachment:"Lāvīniaque.sgf", name:"Student name", link:"Discord"},
//     {id:3, date: "xx/xx/xxx", time: "xx:xx", status:"Requested", detail:"Arma virumque canō, Trōiae quī prīmus ab ōrīs", attachment:"Lāvīniaque.sgf", name:"Student name", link:"Discord"},
//     {id:4, date: "xx/xx/xxx", time: "xx:xx", status:"Booked", detail:"Arma virumque canō, Trōiae quī prīmus ab ōrīs", attachment:"Lāvīniaque.sgf", name:"Student name", link:"Discord"}
// ]

const initialState = 
//{
    // lessons: lessonDataArr,
    // status: 'idle',
    // error: null
    [{date: "xx/xx/xxx", time: "xxxx"},
    {date: "xx/xx/xxx", time: "xx:xx"},
    {date: "xx/xx/xxx", time: "xx:xx"},
    {date: "xx/xx/xxx", time: "xx:xx"},]
//}

export const lessonDataSlice = createSlice({
    name: 'lessonData',
    initialState,
    reducers: {
        addLesson(state, action) {
            state.push(action.payload)
            console.log("hello in addLesson reducer")
            console.log("state", state)
        },
    },
});

export const { addLesson } = lessonDataSlice.actions;
export default lessonDataSlice.reducer;