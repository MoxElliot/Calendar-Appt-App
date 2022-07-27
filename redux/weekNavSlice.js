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
        advanceMonth: 1,
        month: monthArr[d.getMonth()]

    },
    reducers: {
        nextWeek(state, action){
            console.log("state baseDay", state.baseDay)
            console.log("state advance", state.advanceMonth)

            console.log("Month", monthArr[d.getMonth() + state.advanceMonth], d.getMonth() + state.advanceMonth)
            console.log("days in Month", daysInMonth(d.getMonth() + state.advanceMonth))
            console.log("next week number", state.baseDay + action.payload)
            if (state.baseDay + action.payload > daysInMonth(d.getMonth() + state.advanceMonth)) {
                state.baseDay = state.baseDay + action.payload - daysInMonth(d.getMonth() + state.advanceMonth);
                console.log("in IF state baseDay", state.baseDay)
             } else {
                state.baseDay +=action.payload;
                console.log("in ELSE state baseDay", state.baseDay)
             }
           
        },
        lastWeek(state, action){
           state.baseDay -= action.payload
         },
         advanceMonthAdvance(state, action){
             state.advanceMonth += action.payload
             state.month = monthArr[d.getMonth + state.advanceMonth]
             console.log("Advance Month", state.advanceMonth)
        } 
    },
});


const { actions, reducer } = weekNavSlice
export const { nextWeek, lastWeek, advanceMonthAdvance } = actions
export default reducer

//Actions
 

