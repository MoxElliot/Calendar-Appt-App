import { createSlice } from '@reduxjs/toolkit';

const weekDaysArr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

let d = new Date();
const dayNum = d.getDay();

console.log(dayNum)


const weekNavSlice = createSlice({
    name: 'weekNav',
    initialState: {
        today: dayNum,
    },
    reducers: {
        nextWeek: (state) => {
           state.today += 7
        }, 
    },
});

const { actions, reducer } = weekNavSlice
export const { nextWeek } = actions
export default reducer

//Actions
 

