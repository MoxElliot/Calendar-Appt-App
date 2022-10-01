import { createSlice, nanoid } from '@reduxjs/toolkit';

const lessonDataArr = [
    {id:1, date: "xx/xx/xxx", time: "xx:xx", status:"Open", detail:"Arma virumque canō, Trōiae quī prīmus ab ōrīs", attachment:"Lāvīniaque.sgf", name:"Student name", link:"Discord"},
    {id:2, date: "xx/xx/xxx", time: "xx:xx", status:"Booked", detail:"Arma virumque canō, Trōiae quī prīmus ab ōrīs", attachment:"Lāvīniaque.sgf", name:"Student name", link:"Discord"},
    {id:3, date: "xx/xx/xxx", time: "xx:xx", status:"Requested", detail:"Arma virumque canō, Trōiae quī prīmus ab ōrīs", attachment:"Lāvīniaque.sgf", name:"Student name", link:"Discord"},
    {id:4,date: "xx/xx/xxx", time: "xx:xx", status:"Open", detail:"Arma virumque canō, Trōiae quī prīmus ab ōrīs", attachment:"Lāvīniaque.sgf", name:"Student name", link:"Discord"}
]

export const lessonDataSlice = createSlice({
    name: 'lessonData',
    initialState:{
        lessons: [],
        status: 'idle',
        error: null,
    }
    ,
    reducers: {
        addLessonData: {
            reducer(state, action) {
            // const lessonData = {
            //     id: new Lesson(),
            //     date: action.payload.date,
            //     time: action.payload.time,
            //     status: "Open",
            //     detail: action.payload.detail,
            //     attachment: action.payload.attachment,
            //     name: action.payload.name,
            //     link: action.payload,link,
            //     read: false,
            // };
            state.lessons.push(action.payload)
            },
            prepare(date, time, status, detail, attachment, name, link, read, userId){
                return {
                    payload: {
                        id: nanoid,
                        user: userId,
                        date, time, status, detail, attachment, name, link, read
                    }
                }
            },
            lessonUpdated(state, action ) {
                const {id, date, time, status, detail, attachment, name, link, read} = action.payload
                const existingLesson = state.lessons.find(lesson => lesson.id === id)
                if (existingLesson) {
                    existingLesson.date = date
                    existingLesson.time = time
                    existingLesson.status = status
                    existingLesson.detail = detail
                    existingLesson.attachment = attachment
                    existingLesson.name = name
                    existingLesson.link = link
                    existingLesson.read = read

                }
            }
        },
    },
});

export const { addLessonData } = lessonDataSlice.actions;
export const pullAllLessons = state => state.lessons.lessons;
export const pullOneLesson = (state, lessonId) => state.lessons.lessons.find(lesson => lesson.id === lessonId)
export default lessonDataSlice.reducer;