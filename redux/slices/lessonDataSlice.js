import { createSlice } from '@reduxjs/toolkit';

const lessonDataArr = [
    {id:0, date: "xx/xx/xxx", time: "xx:xx", status:"Booked", detail:"Arma virumque canō, Trōiae quī prīmus ab ōrīs", attachment:["Lāvīniaque.sgf", "Opening.sgf"], name:"Tim Timson", link:"Discord"},
    {id:1, date: "xx/xx/xxx", time: "xx:xx", status:"Booked", detail:"Arma virumque canō, Trōiae quī prīmus ab ōrīs", attachment:["Lāvīniaque.sgf"], name:"John Johnson", link:"Discord"},
    {id:2, date: "xx/xx/xxx", time: "xx:xx", status:"Requested", detail:"Arma virumque canō, Trōiae quī prīmus ab ōrīs", attachment:["Lāvīniaque.sgf"], name:"Sam Samson", link:"Discord"},
    {id:3, date: "xx/xx/xxx", time: "xx:xx", status:"Available", detail:"Arma virumque canō, Trōiae quī prīmus ab ōrīs", attachment:["Lāvīniaque.sgf"], name:"Will Willson", link:"Discord"},
    {id:4, date: "xx/xx/xxx", time: "xx:xx", status:"Available", detail:"Arma virumque canō, Trōiae quī prīmus ab ōrīs", attachment:["Lāvīniaque.sgf", "Opening.sgf"], name:"Tim Timson", link:"Discord"},
    {id:5, date: "xx/xx/xxx", time: "xx:xx", status:"Booked", detail:"Arma virumque canō, Trōiae quī prīmus ab ōrīs", attachment:["Lāvīniaque.sgf"], name:"John Johnson", link:"Discord"},
    {id:6, date: "xx/xx/xxx", time: "xx:xx", status:"Requested", detail:"Arma virumque canō, Trōiae quī prīmus ab ōrīs", attachment:["Lāvīniaque.sgf"], name:"Sam Samson", link:"Discord"},
    {id:7, date: "xx/xx/xxx", time: "xx:xx", status:"Available", detail:"Arma virumque canō, Trōiae quī prīmus ab ōrīs", attachment:["Lāvīniaque.sgf"], name:"Will Willson", link:"Discord"},
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
            let newOb = {id:"", date: "", time: "", status:"", detail:"", attachment:[""], name:"", link:""}

            newOb.id = obFromEdit.selectedLesson[0]
            newOb.date = obFromEdit.selectedLesson[1]
            newOb.time = obFromEdit.selectedLesson[2]
            newOb.status = obFromEdit.selectedLesson[3]
            newOb.detail = obFromEdit.selectedLesson[4]
            newOb.attachment = obFromEdit.selectedLesson[5]
            newOb.name = obFromEdit.selectedLesson[6]
            newOb.link = obFromEdit.selectedLesson[7]

            state.lessonData.splice(obFromEdit.lessonIndex, 1, newOb)
                       
        }
    },
});

export const { addLesson, readLesson, cancelLesson, editLessonData } = lessonDataSlice.actions;
export default lessonDataSlice.reducer;