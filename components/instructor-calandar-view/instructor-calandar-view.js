import React, { useState, useEffect} from 'react';
import instructorCal from '../../styles/instructorCal.module.scss';
import InstCalandarDay from './instCal-day';
import InstructorLessonDetail from '../instructor-lesson-detail/instructor-lesson-detail';
import LessonCalControl from './lesson-calandar-control';
import { useSelector, useDispatch } from 'react-redux';
import { nextWeek, lastWeek, advanceMonthAdvance, reverseMonthAdvance, advanceYear } from '../../redux/weekNavSlice'


const weekDaysArr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const monthArr =['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'August', 'Sept', 'Oct', 'Nov', 'Dec']
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
        // const currentYear = d.getFullYear()
        const daysInMonth = (m) => {
            return getDaysInMonth(year, m + 1, 0)
        }
        
        const dayOfWeek = () => {
            const dateAdjust = ((weekDaysArr.indexOf(day) - dayNum) + baseDay)

            if (weekDaysArr.indexOf(day) === dayNum) {  // For today
                const today = baseDay 
                console.log("today", today)
                return today

            } else if (weekDaysArr.indexOf(day) > dayNum) {  //For all days ahead of today
                const daysAhead = dateAdjust
                console.log("daysAhead", daysAhead)
                if (daysAhead > daysInMonth(month)) { //At the end of the month when the days ahead of today are in the next month
                    daysAhead = daysAhead - daysInMonth(month) //the month is accurate
                    return daysAhead
                }
                

                return daysAhead
            } else if (weekDaysArr.indexOf(day) < dayNum) { //For all days behind today
                const daysBehind = dateAdjust
                console.log("daysBehind", daysBehind)
                if (daysBehind <= 0) { //At the beginning of the month when the days behind today are in the last month 
                    daysBehind += daysInMonth(month-1) //the month is accurate so last month is -1
                    return daysBehind
                }
                return daysBehind
            }
            
            
        }
       console.log(dayOfWeek())
        useEffect(() => {
            if(dayOfWeek() > daysInMonth(month) && dispatchCheck > 0){ //month is accurate
                dispatch(advanceMonthAdvance(1));
                dispatch(advanceYear(1));
                dispatchCheck=0;
            } 
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
                        return dispatchCheck;
                        } 
                    }
                >
                    aro
                </button>
                <label>{monthArr[month]} {year}</label>
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