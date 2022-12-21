import { createSlice } from '@reduxjs/toolkit';

const lessonDataArr2 = [
    {id:0, date: "xx/xx/xxx", time: "xx:xx", status:"Booked", detail:"Arma virumque canō, Trōiae quī prīmus ab ōrīs", attachment:["Lāvīniaque.sgf", "Opening.sgf"], name:"Tim Timson", link:"Discord"},
    {id:1, date: "xx/xx/xxx", time: "xx:xx", status:"Booked", detail:"Arma virumque canō, Trōiae quī prīmus ab ōrīs", attachment:["Lāvīniaque.sgf"], name:"John Johnson", link:"Discord"},
    {id:2, date: "xx/xx/xxx", time: "xx:xx", status:"Requested", detail:"Arma virumque canō, Trōiae quī prīmus ab ōrīs", attachment:["Lāvīniaque.sgf"], name:"Sam Samson", link:"Discord"},
    {id:3, date: "xx/xx/xxx", time: "xx:xx", status:"Booked", detail:"Arma virumque canō, Trōiae quī prīmus ab ōrīs", attachment:["Lāvīniaque.sgf"], name:"Will Willson", link:"Discord"},
    ]

const lessonDataArr = [
    [0, "xx/xx/xxx", "xx:xx", "Booked", "Arma virumque canō, Trōiae quī prīmus ab ōrīs", ["Lāvīniaque.sgf", "Opening.sgf"], "Tim Timson", "Discord"],
    [1, "xx/xx/xxx", "xx:xx", "Booked", "Arma virumque canō, Trōiae quī prīmus ab ōrīs", ["Lāvīniaque.sgf"], "John Johnson", "Discord"],,
    [2, "xx/xx/xxx", "xx:xx", "Requested", "Arma virumque canō, Trōiae quī prīmus ab ōrīs", ["Lāvīniaque.sgf"], "Sam Samson", "Discord"],,
    [3, "xx/xx/xxx", "xx:xx", "Booked", "Arma virumque canō, Trōiae quī prīmus ab ōrīs", ["Lāvīniaque.sgf"], "Will Wilson", "Discord"],,
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
            //state.lessonData.splice(obFromEdit.lessonIndex, 1, obFromEdit.selectedLesson)
            

            // newArray[obFromEdit.index] = obFromEdit.selectedLesson
            // console.log("in editLesson recucer, newArray", newArray)
            // state.singleLessonData = newArray            
        }
    },
});

export const { addLesson, readLesson, cancelLesson, editLessonData } = lessonDataSlice.actions;
export default lessonDataSlice.reducer;