import { createSlice } from '@reduxjs/toolkit';


const weekDaysArr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const monthArr =['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'August', 'Sept', 'Oct', 'Nov', 'Dec']
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
        advanceMonth: 0,
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
        advanceMonthAdvance(state, action){
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
export const { nextWeek, lastWeek, advanceMonthAdvance, advanceYear } = actions
export default reducer
