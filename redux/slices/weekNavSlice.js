import { createSlice } from '@reduxjs/toolkit';
import { undoReducer } from '../reducers/undoReducer'

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
        
            pastBaseDay: [d.getDate()],
            pastMonth: [],
            pastYear: [],
        

    },
    reducers: {
        nextWeek(state, action){
       
            state.baseDay +=action.payload;
            state.pastBaseDay= [...state.pastBaseDay, state.baseDay]
            console.log("pastBaseDay", state.pastBaseDay)
        },
        lastWeek(state){
            const newPastBaseDay = state.pastBaseDay[state.pastBaseDay.length - 1];
            const lastBaseDay = state.pastBaseDay.slice(0, state.pastBaseDay.length - 1);
            console.log("new pastBaseDay day", newPastBaseDay);
            console.log("new base day", lastBaseDay);
            state.baseDay = newPastBaseDay
            state.pastBaseDay = lastBaseDay
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
    },
});



const { actions, reducer } = weekNavSlice;
export const { nextWeek, lastWeek, advanceMonth, advanceYear } = actions;
export default reducer;
