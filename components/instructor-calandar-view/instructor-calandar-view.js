import React, { useState, useEffect} from 'react';
import instructorCal from '../../styles/instructorCal.module.scss';
import InstCalandarDay from './instCal-day';
import InstructorLessonDetail from '../instructor-lesson-detail/instructor-lesson-detail';
import LessonCalControl from './lesson-calandar-control';
import { useSelector, useDispatch } from 'react-redux';
import { nextWeek, lastWeek, advanceMonthAdvance } from '../../redux/weekNavSlice'


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

    const baseDay = useSelector(state => state.weekNav.baseDay)
    const month = useSelector(state => state.weekNav.month)
    const advanceMonth = useSelector(state => state.weekNav.advanceMonth)
    const dispatch = useDispatch()
   

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
       
        const dayOfMonth = () => {
            if (weekDaysArr.indexOf(day) === dayNum) {
               // console.log("baseDay", baseDay)
                return baseDay
                } else {
                    const dateAdjust = ((weekDaysArr.indexOf(day) - dayNum) + baseDay)
                   // console.log("dateAdjust", dateAdjust)
                    if (dateAdjust === 0) {
                       // console.log("zero day", daysInMonth(d.getMonth( ) + advanceMonth))
                        const lastDay = (daysInMonth(d.getMonth() + advanceMonth))
                       // console.log("last day advance", advanceMonth)
                        return lastDay;

                    } else if (dateAdjust > daysInMonth(d.getMonth() + advanceMonth)) {
                        const endOfMonth = dateAdjust - daysInMonth(d.getMonth() + advanceMonth)
                        return endOfMonth;
                    }
                    // if  (dateAdjust >= (daysInMonth(d.getMonth() + advanceMonth))) {
                        
                    //     dateAdjust = dateAdjust - daysInMonth(d.getMonth() + advanceMonth)
                    //     console.log("else if", dateAdjust, advanceMonth)   

                    //     if (dateAdjust <= 0) {
                    //         dispatch(advanceMonthAdvance(1))
                    //         dateAdjust = daysInMonth(d.getMonth() + advanceMonth)
                           
                    //         console.log("next month", dateAdjust, advanceMonth)                    
                    //         return dateAdjust 
                    //         } else {
                    //             return dateAdjust;
                    //         }
                    // } 
                return dateAdjust;
            }
        }
        console.log("day of month", dayOfMonth())
        if(dayOfMonth() === 1) {
            console.log("update advancemonth")
            advanceMonth++
           // return dispatch(advanceMonthAdvance(1))
        };
        return (
        <div 
            className={instructorCal.dayContainer} 
            key={day.toString()}
        >
            {day}{dayOfMonth()}
            <InstCalandarDay handleLessonDet={handleLessonDet}/>
        </div>)
        }
        
        );
        
    return (
        <div className={instructorCal.calContainer}>
            <div className={instructorCal.dateSlide}>
                <button
                    onClick={() =>dispatch(advanceMonthAdvance(1))}
                >
                    aro
                </button>
                <label className={instructorCal.slideText}>
                    {baseDay}
                </label>
                <button 
                    onClick={() =>dispatch(nextWeek(7))}
                >
                    aro
                </button>
                <label>{month}</label>
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