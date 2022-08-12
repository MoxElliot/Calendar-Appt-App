import { combineReducers } from 'redux';
import messageDataSlice from '../messageDataSlice';
import lessonDataSlice from '../lessonDataSlice';
import weekNavSlice from '../weekNavSlice'

const rootReducer = combineReducers({
    messageData: messageDataSlice,
    lessonData: lessonDataSlice,
    weekNav: weekNavSlice,
})

export default rootReducer;