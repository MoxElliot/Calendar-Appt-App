import { combineReducers } from 'redux';
import messageDataSlice from '../messageDataSlice';
import lessonDataSlice from '../lessonDataSlice';
import calandarDataSlice from '../calandarDataSlice';
import weekNavSlice from '../weekNavSlice'

const rootReducer = combineReducers({
    messageData: messageDataSlice,
    lessonData: lessonDataSlice,
    calandarData: calandarDataSlice,
    weekNav: weekNavSlice,
})

export default rootReducer;