import React, { useState, useEffect} from 'react';
import instructorCal from '../../styles/instructorCal.module.scss';
import InstCalandarDay from './instCal-day';
import InstructorLessonDetail from '../instructor-lesson-detail/instructor-lesson-detail';
import LessonCalControl from './lesson-calandar-control';
import { useSelector, useDispatch } from 'react-redux';
import { nextWeek, lastWeek, nextMonthAdvance } from '../../redux/weekNavSlice'

const weekDaysArr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const InstCalandarView = () => {

    const [showLessonDet, setShowLessonDet] = useState(false);


    const handleLessonDet = (e) => {
            e.preventDefault();
            setShowLessonDet((showLessonDet) =>{
              
                if(showLessonDet) {
                    setShowLessonDet(false)
                } else {
                    setShowLessonDet(true)
                }
            });
    }

    const today = useSelector(state => state.weekNav.today)
    const nextMonth = useSelector(state => state.weekNav.nextMonth)
    const dispatch = useDispatch()

    const once = false;
    const weekDays = weekDaysArr.map(function(day) {
        
        const d = new Date();
        const dayNum = d.getDay()
        const getDaysInMonth = (year, month) => {
            return new Date(year, month, 0).getDate();
        }
        const currentYear = d.getFullYear()
        const daysInMonth = (m) => {
            return getDaysInMonth(currentYear, m + 1, 0)
        }
       
        const dayOfWeek = () => {
            if (weekDaysArr.indexOf(day) === dayNum) {
                return today
                } else {
                    const endOfMonth = ((weekDaysArr.indexOf(day) - dayNum) + today)
                    if (endOfMonth <= 0) {
                        endOfMonth = daysInMonth(d.getMonth() + nextMonth)
                        console.log("next month", nextMonth)                        
                        endOfMonth 
                    }
                return endOfMonth
            }
        }
        return (
        <div 
            className={instructorCal.dayContainer} 
            key={day.toString()}
        >
            {day}{dayOfWeek()}
            <InstCalandarDay handleLessonDet={handleLessonDet}/>
        </div>)
        }
        
        );
        
    return (
        <div className={instructorCal.calContainer}>
            <div className={instructorCal.dateSlide}>
                <button
                    onClick={() =>dispatch(lastWeek(7))}
                >
                    aro
                </button>
                <label className={instructorCal.slideText}>
                    {today}
                </label>
                <button 
                    onClick={() =>dispatch(nextWeek(7))}
                >
                    aro
                </button>
                <label>hi</label>
            </div>
            <div className={instructorCal.weekContainer}>
                {weekDays}
            </div>
            <div className={instructorCal.controlContainer}>
            <LessonCalControl className={instructorCal.lessonControl}/>
            <InstructorLessonDetail showLessonDet={showLessonDet}/>
            </div>
        </div>
        )
      
    }

export default InstCalandarView