import { combineReducers } from 'redux';
import newMessageData from '../messageDataSlice';
import lessonData from '../lessonDataSlice';
import calandarData from '../calandarDataSlice'

const rootReducer = combineReducers({
    newMessageData,
    lessonData,
    calandarData,
})

export default rootReducer;