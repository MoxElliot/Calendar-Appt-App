import { createSlice } from '@reduxjs/toolkit';
import { showLessonData } from '../../pages/api/show-lessons'


export const lessonDataSlice = createSlice({
    
    name: 'lessonData',
    initialState:
    {
    lessonData: []
    },
    reducers: {
        addLessonData: (state, action) => {
            const lessonData = {
                id: new Lesson(),
                date: action.payload.date,
                time: action.payload.time,
                status: "Open",
                detail: action.payload.detail,
                attachment: action.payload.attachment,
                name: action.payload.name,
                link: action.payload,link,
                read: false,
            };
            state.push(lessonData)
        },
        lessonsLoaded: (state, action) => {
            state.lessonData += action.payload
        }
    },
});

export async function fetchLessonData(dispatch, getState) {
    const response = await showLessonData.get("calandar_schedule/lessonDB")
    dispatch({type: 'lessons/lessonsLoaded', payload: response.lessons})
}

export const { addLessonData } = lessonDataSlice.actions;

export default lessonDataSlice.reducer;


// export const lessonDataSlice = createSlice({
    
//     name: 'lessonData',
//     initialState:
//     [
//         {id:1, date: "xx/xx/xxx", time: "xx:xx", status:"Open", detail:"Arma virumque canō, Trōiae quī prīmus ab ōrīs", attachment:"Lāvīniaque.sgf", name:"Student name", link:"Discord"},
//         {id:2, date: "xx/xx/xxx", time: "xx:xx", status:"Booked", detail:"Arma virumque canō, Trōiae quī prīmus ab ōrīs", attachment:"Lāvīniaque.sgf", name:"Student name", link:"Discord"},
//         {id:3, date: "xx/xx/xxx", time: "xx:xx", status:"Requested", detail:"Arma virumque canō, Trōiae quī prīmus ab ōrīs", attachment:"Lāvīniaque.sgf", name:"Student name", link:"Discord"},
//         {id:4,date: "xx/xx/xxx", time: "xx:xx", status:"Open", detail:"Arma virumque canō, Trōiae quī prīmus ab ōrīs", attachment:"Lāvīniaque.sgf", name:"Student name", link:"Discord"}
//     ],
//     reducers: {
//         addLessonData: (state, action) => {
//             const lessonData = {
//                 id: new Lesson(),
//                 date: action.payload.date,
//                 time: action.payload.time,
//                 status: "Open",
//                 detail: action.payload.detail,
//                 attachment: action.payload.attachment,
//                 name: action.payload.name,
//                 link: action.payload,link,
//                 read: false,
//             };
//             state.push(lessonData)
//         },
//     },
// });

// export const { addLessonData } = lessonDataSlice.actions;

// export default lessonDataSlice.reducer;