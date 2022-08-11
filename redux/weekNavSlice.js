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
            // if(state.baseDay > daysInMonth(d.getMonth() + (state.month-1))) {
            //     console.log("Next Week if baseday > days in THIS month ")
                
            //     state.baseDay = state.baseDay - daysInMonth(d.getMonth() + (state.month-1))
            // }
        },
        lastWeek(state, action){
            // state.baseDay -=action.payload;
            // if(state.baseDay < 0) {
            //     state.baseDay = state.baseDay + daysInMonth(d.getMonth() + state.advanceMonth)
            // }
         },
        advanceMonthAdvance(state, action){
            if((state.month) >= 11) {
                 state.month -= 12;
            }
             state.month += action.payload
             state.baseDay -= daysInMonth(state.month-1)
             //state.month = monthArr[d.getMonth() + state.advanceMonth]

             console.log("Month in Slice", state.month)
    
        } ,
        // reverseMonthAdvance(state, action){
        //     if((d.getMonth() + state.advanceMonth) <= 0) {
        //         state.advanceMonth += 12;
        //     }
        //      state.advanceMonth -= action.payload
        //      state.month = monthArr[d.getMonth() + state.advanceMonth]
        //} ,
        advanceYear(state, action){
            if(state.month === 0)
            state.year += action.payload
        }
    },
});


const { actions, reducer } = weekNavSlice
export const { nextWeek, lastWeek, advanceMonthAdvance, reverseMonthAdvance, advanceYear } = actions
export default reducer

//Actions
 

