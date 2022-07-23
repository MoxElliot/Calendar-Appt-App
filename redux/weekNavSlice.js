import { createSlice } from '@reduxjs/toolkit';
import { applyMiddleware } from 'redux';

const weekDaysArr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

let d = new Date();
const getDaysInMonth = (year, month, m) => {
    return new Date(year, month, 0).getDate();

}
const currentYear = d.getFullYear()
const daysInMonth = (m) => {
    return getDaysInMonth(currentYear, m + 1, 0)
}

const weekNavSlice = createSlice({
    name: 'weekNav',
    initialState: {
        today: d.getDate(),
        nextMonth: 1,

    },
    reducers: {
        nextWeek(state, action){
            if (state.today + action.payload > daysInMonth(d.getMonth() + state.nextMonth)) {
                state.today = state.today + action.payload - daysInMonth(d.getMonth() + state.nextMonth);
             } else {
                state.today +=action.payload;
             }
           
        },
        lastWeek(state, action){
           state.today -= action.payload
         },
         nextMonthAdvance(state){
            state.nextMonth++
        } 
    },
});


const { actions, reducer } = weekNavSlice
export const { nextWeek, lastWeek, nextMonthAdvance } = actions
export default reducer

//Actions
 

