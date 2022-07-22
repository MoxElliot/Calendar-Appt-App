import { createSlice } from '@reduxjs/toolkit';

const monthArr = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const weekDaysArr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

let d = new Date();


export const calandarDataSlice = createSlice({
    name: 'calandarData',
    initialState: {
        date: d.getDate(),
        day: d.getDay(),
        month: d.getMonth(),
        year: d.getFullYear(),
    },
    reducers: {
        nextWeek: (state) => {
            state.day += 7
        },
        startingDate: (state, action) => {
            state.day = action.payload
        },
        
    },
});

export const { nextWeek, startingDate } = calandarDataSlice.actions;

export default calandarDataSlice.reducer;

//Actions
 

export const dayOfWeek = () => {
        for (let i=0; i < 7; i++) {
            if (weekDaysArr.indexOf(day) === dayNum) {
            return d.getDate()
            } else {
                return ((weekDaysArr.indexOf(day) - dayNum) + d.getDate())
            }

        } 
    }
