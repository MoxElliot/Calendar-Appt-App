import React, { useState, useEffect} from 'react';
import instructorCal from '../../styles/instructorCal.module.scss';
import InstCalandarDay from './instCal-day';
import InstructorLessonDetail from '../instructor-lesson-detail/instructor-lesson-detail';
import LessonCalControl from './lesson-calandar-control';
import { useSelector, useDispatch } from 'react-redux';
import { nextWeek, lastWeek, advanceMonthAdvance, advanceYear } from '../../redux/weekNavSlice'
import { end } from '@popperjs/core';


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
    const year = useSelector(state => state.weekNav.year)
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
            //    console.log("baseDay", baseDay)
                return baseDay
                } else {
                    const dateAdjust = ((weekDaysArr.indexOf(day) - dayNum) + baseDay)
                    console.log("dateAdjust", dateAdjust)
                    // console.log("baseday", baseDay)
                    // console.log("daynum", dayNum)
                    // console.log("weedayArr.index(day)-dayNum + base", ((weekDaysArr.indexOf(day) - dayNum) + baseDay))
                    if (dateAdjust < 0) {
                        const negDay = ( dateAdjust + (daysInMonth(d.getMonth() + advanceMonth - 1)))
                        return negDay;

                    } else if (dateAdjust > daysInMonth(d.getMonth() + advanceMonth)) {
                        const endOfMonth = dateAdjust - daysInMonth(d.getMonth() + advanceMonth - 1)
                        console.log("end of month", endOfMonth)
                        if (endOfMonth === 0) {
                            endOfMonth++
                        }
                        return endOfMonth;
                    } else if (dateAdjust === 0) {
                           console.log("zero day", daysInMonth(d.getMonth( ) + advanceMonth -1 ))
                            const lastDay = (daysInMonth(d.getMonth() + advanceMonth -1))
                            console.log("last day", lastDay)
                        //    console.log("last day advance", advanceMonth)
                            return lastDay;
    
                    }
                return dateAdjust;
            }
        }
        // console.log("day of month", dayOfMonth())
        console.log("last days in month", daysInMonth(d.getMonth() + advanceMonth))
        useEffect(() => {
            if(dayOfMonth() === 2) {
                console.log("did")
                // advanceMonth++
                dispatch(advanceMonthAdvance(1));
                dispatch(advanceYear(1));
            };
        }, [dayOfMonth()]);

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
                <label>{month} {year}</label>
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