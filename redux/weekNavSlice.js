import { createSlice } from '@reduxjs/toolkit';

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
        baseDay: d.getDate(),
        month: d.getMonth(),
        year: d.getFullYear(),

    },
    reducers: {
        nextWeek(state, action){
            console.log("Next Week bD", state.baseDay)
            state.baseDay +=action.payload;
        },
        lastWeek(state, action){
           
         },
        advanceMonth(state, action){
            if((state.month) >= 11) {
                 state.month -= 12;
            }
             state.month += action.payload
             state.baseDay -= daysInMonth(state.month-1)
        } ,
        advanceYear(state, action){
            if(state.month === 0)
            state.year += action.payload
        },
        reverseYear(state, action){
            if(state.month === 11)
            state.year -= action.payload
        }
    },
});


const { actions, reducer } = weekNavSlice
export const { nextWeek, lastWeek, advanceMonth, advanceYear } = actions
export default reducer
