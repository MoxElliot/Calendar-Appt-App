import { createSlice } from '@reduxjs/toolkit';

const lessonDataArr = [
    {id:0, date: "xx/xx/xxx", time: "xx:xx", status:"Booked", detail:"Arma virumque canō, Trōiae quī prīmus ab ōrīs", attachment:["Lāvīniaque.sgf", "Opening.sgf"], name:"Tim Timson", link:"Discord"},
    {id:1, date: "xx/xx/xxx", time: "xx:xx", status:"Booked", detail:"Arma virumque canō, Trōiae quī prīmus ab ōrīs", attachment:["Lāvīniaque.sgf"], name:"John Johnson", link:"Discord"},
    {id:2, date: "xx/xx/xxx", time: "xx:xx", status:"Requested", detail:"Arma virumque canō, Trōiae quī prīmus ab ōrīs", attachment:["Lāvīniaque.sgf"], name:"Sam Samson", link:"Discord"},
    {id:3, date: "xx/xx/xxx", time: "xx:xx", status:"Booked", detail:"Arma virumque canō, Trōiae quī prīmus ab ōrīs", attachment:["Lāvīniaque.sgf"], name:"Will Willson", link:"Discord"},
    ]


export const lessonDataSlice = createSlice({
    name: 'lessonData',
    initialState: {
        lessonData: lessonDataArr,
        singleLessonData: "Select a Lesson",
    },
    reducers: {
        addLesson(state, action) {
            state.lessonData.push(action.payload)
        },
        readLesson(state, action) {
            state.singleLessonData = action.payload
        },
        cancelLesson(state, action) {
            const index = action.payload
            const newArray = [...state.lessonData];
            newArray[index].status = 'Canceled'
            state.singleLessonData[3] = 'Canceled'            
        },
        editLessonData(state, action) {
            const obFromEdit = action.payload
            const newArray = [...state.lessonData];
            console.log("in editLesson recucer, obFromEdit.lessonIndex", obFromEdit.lessonIndex)
            console.log("in editLesson recucer, obFromEdit.selectedLesson", obFromEdit.selectedLesson)
            console.log("in editLesson recucer, newArray", newArray)
            

            // newArray[obFromEdit.index] = obFromEdit.selectedLesson
            // console.log("in editLesson recucer, newArray", newArray)
            // state.singleLessonData = newArray            
        }
    },
});

export const { addLesson, readLesson, cancelLesson, editLessonData } = lessonDataSlice.actions;
export default lessonDataSlice.reducer;