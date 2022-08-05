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
        month: monthArr[d.getMonth()],
        year: d.getFullYear(),

    },
    reducers: {
        nextWeek(state, action){
            // console.log("base day plus 7", state.baseDay + action.payload)
            // console.log("advance month", state.advanceMonth)
            // console.log("days in this month", daysInMonth(d.getMonth() + state.advanceMonth ))
            state.baseDay +=action.payload;

            if(state.baseDay >= daysInMonth(d.getMonth() + state.advanceMonth)) {
                // console.log("days in month", daysInMonth(d.getMonth() + state.advanceMonth ))
                // console.log("baseday", state.baseDay)
                // console.log("today", d.getDate())
                state.baseDay = state.baseDay - daysInMonth(d.getMonth() + state.advanceMonth)
            }
                
             
           
        },
        lastWeek(state, action){
            if (state.baseDay - action.payload < 1 ) {
                state.baseDay = state.baseDay - action.payload + daysInMonth(d.getMonth() + state.advanceMonth );
             } else {
                state.baseDay -=action.payload;
             }
         },
         advanceMonthAdvance(state, action){
            if((d.getMonth() + state.advanceMonth) >= 11) {
                 state.advanceMonth -= 12;
            }
            console.log((d.getMonth() + state.advanceMonth))
             state.advanceMonth += action.payload
             state.month = monthArr[d.getMonth() + state.advanceMonth]
        } ,
        reverseMonthAdvance(state, action){
            if((d.getMonth() + state.advanceMonth) >= 11) {
                state.advanceMonth -= 12;
            }
             state.advanceMonth -= action.payload
             state.month = monthArr[d.getMonth() + state.advanceMonth]
        } ,
        advanceYear(state, action){
            if(state.month === "Jan")
            state.year += action.payload
        }
    },
});


const { actions, reducer } = weekNavSlice
export const { nextWeek, lastWeek, advanceMonthAdvance, reverseMonthAdvance, advanceYear } = actions
export default reducer

//Actions
 

