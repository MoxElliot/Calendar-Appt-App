import { createSlice } from '@reduxjs/toolkit';

const monthArr = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const dayArr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// {dayArr[today.getDay()]} {monthArr[today.getMonth()]} {today.getDate()}

export const calandarDataSlice = createSlice({
    name: 'calandarData',
    initialState: {
        today: 0,
    },
    reducers: {
        todayDate: (state) => {
            state.today = 1
        },
    },
});

export const { todayDate } = calandarDataSlice.actions;

export default calandarDataSlice.reducer;