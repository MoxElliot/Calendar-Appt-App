import { configureStore } from '@reduxjs/toolkit';
import newMessageDataReducer from './messageDataSlice';
import lessonDataReducer from './lessonDataSlice';
import calandarDataReducer from './calandarDataSlice'

export const store = configureStore({
  reducer: {
    messageData: newMessageDataReducer,
    lessonData: lessonDataReducer,
    calandarData: calandarDataReducer,
  },
});