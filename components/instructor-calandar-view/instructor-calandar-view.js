import React, { useState, useEffect} from 'react';
import instructorCal from '../../styles/instructorCal.module.scss';
import InstCalandarDay from './instCal-day';
import InstructorLessonDetail from '../instructor-lesson-detail/instructor-lesson-detail';
import LessonCalControl from './lesson-calandar-control';
import { useSelector, useDispatch } from 'react-redux';
import { nextWeek, lastWeek, advanceMonthAdvance, reverseMonthAdvance, advanceYear } from '../../redux/weekNavSlice'
import { end, start } from '@popperjs/core';


const weekDaysArr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let dispatchCheck = 0
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
        const dayOfWeek = () => {
            
            if (weekDaysArr.indexOf(day) === dayNum) {
                    //console.log("baseday", baseDay)
                    if(baseDay===0) {
                        const lastDay = daysInMonth(d.getMonth() + advanceMonth - 1)
                        return lastDay
                    }
                    // console.log("index of this day", weekDaysArr.indexOf(day))
                    // console.log("day Num", dayNum)
                return baseDay
                } else {
                    const dateAdjust = ((weekDaysArr.indexOf(day) - dayNum) + baseDay)
                    console.log("dateAdjust", dateAdjust)
                    console.log(dispatchCheck)
                    console.log("baseday", baseDay)
                    console.log("index of this day", weekDaysArr.indexOf(day))
                    console.log("day Num", dayNum)
                    if(dateAdjust > (daysInMonth(d.getMonth() + advanceMonth)) && dispatchCheck === 1) {
                        const endOfMonth = dateAdjust - (daysInMonth(d.getMonth() + advanceMonth))
                       // console.log("endOfMonth", endOfMonth)
                        return endOfMonth
                    } else if (dateAdjust <= 0) { 
                        const negDay = ( dateAdjust + (daysInMonth(d.getMonth() + advanceMonth - 1)))
                        //console.log("neg day", negDay)
                        return negDay;
                    } else if (dateAdjust > daysInMonth(d.getMonth() + advanceMonth - 1) && dispatchCheck === 0) {
                        const startOfMonth = dateAdjust - daysInMonth(d.getMonth() + advanceMonth - 1)
                      //  console.log("start of Month", startOfMonth)
                        if (startOfMonth === 0) {
                            startOfMonth++
                        }
                        return startOfMonth;
                    } else if (dateAdjust === 0) {
                            const lastDay = (daysInMonth(d.getMonth() + advanceMonth))
                            return lastDay;
    
                    }
                return dateAdjust;
            }
        }
       
        useEffect(() => {
            //console.log("In use Effect", dayOfWeek())
            if(dayOfWeek() === 2) {
                if(dispatchCheck > 0){
                    dispatch(advanceMonthAdvance(1));
                    dispatch(advanceYear(1));
                    dispatchCheck=0;
                } else if (dispatchCheck < 0) {
                    dispatch(reverseMonthAdvance(1));
                
                }
            };
        }, [baseDay]);

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
                    onClick={() =>{
                        dispatch(lastWeek(7))
                        dispatchCheck = -1;
                        console.log("dispatch", dispatchCheck)
                        return dispatchCheck;
                        }
                    }
                >
                    aro
                </button>
                <label className={instructorCal.slideText}>
                    {baseDay}
                </label>
                <button 
                    onClick={() =>{
                        dispatch(nextWeek(7))
                        dispatchCheck = 1;
                        console.log("dispatch", dispatchCheck)
                        return dispatchCheck;
                        } 
                    }
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