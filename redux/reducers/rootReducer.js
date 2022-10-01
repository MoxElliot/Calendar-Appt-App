import { combineReducers } from 'redux';
import messageDataSlice from '../slices/messageDataSlice';
import lessonDataSlice from '../slices/lessonDataSlice';
import weekNavSlice from '../slices/weekNavSlice';
import usersSlice from '../slices/usersSlice';

const rootReducer = combineReducers({
    messageData: messageDataSlice,
    lessonData: lessonDataSlice,
    weekNav: weekNavSlice,
    users: usersSlice,
})

export default rootReducer;