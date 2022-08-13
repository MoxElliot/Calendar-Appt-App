import { combineReducers } from 'redux';
import messageDataSlice from '../slices/messageDataSlice';
import lessonDataSlice from '../slices/lessonDataSlice';
import weekNavSlice from '../slices/weekNavSlice';

const rootReducer = combineReducers({
    messageData: messageDataSlice,
    lessonData: lessonDataSlice,
    weekNav: weekNavSlice,
})

export default rootReducer;