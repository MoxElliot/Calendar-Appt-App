import React, { useState, useEffect} from 'react';
import instructorCal from '../../styles/instructorCal.module.scss';
import InstCalandarDay from './instCal-day';
import InstructorLessonDetail from '../instructor-lesson-detail/instructor-lesson-detail';
import LessonCalControl from './lesson-calandar-control';
import { useSelector, useDispatch } from 'react-redux';
import { nextWeek, lastWeek, advanceMonthAdvance, reverseMonthAdvance, advanceYear, reverseYear } from '../../redux/weekNavSlice'


const weekDaysArr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const monthArr =['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'August', 'Sept', 'Oct', 'Nov', 'Dec']
let directionCheck = 1
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
    const year = useSelector(state => state.weekNav.year)
    const dispatch = useDispatch()
    
        
    const weekDays = weekDaysArr.map(function(day) {
   
        const d = new Date();
        const dayNum = d.getDay()
        const getDaysInMonth = (year, month) => {
            return new Date(year, month, 0).getDate();
        }
        const daysInMonth = (m) => {
            return getDaysInMonth(year, m + 1, 0)
        }
        
        const dayOfWeek = () => {
            const dateAdjust = ((weekDaysArr.indexOf(day) - dayNum) + baseDay)
            const reverseDateAdjust = ((weekDaysArr.indexOf(day) + dayNum) - baseDay)
          //  console.log("days in", monthArr[month], daysInMonth(month))
            if (weekDaysArr.indexOf(day) === dayNum) {  // For today
                const today = baseDay 
                console.log("today", today)
                console.log("Today Direction Check", directionCheck)
                if (today > daysInMonth(month)) {
                    today -= daysInMonth(month)
                    return today;
                }
                return today

            } else if (weekDaysArr.indexOf(day) > dayNum && directionCheck >= 0) {  //For all days ahead of today
                const daysAhead = dateAdjust
                console.log("daysAhead", daysAhead)
                console.log("DaysAhead Direction Check", directionCheck)
                if (daysAhead > daysInMonth(month)) { //At the end of the month when the days ahead of today are in the next month
                    daysAhead = daysAhead - daysInMonth(month) //the month is accurate
                    return daysAhead
                }
                return daysAhead
            } else if (weekDaysArr.indexOf(day) < dayNum && directionCheck >= 0) { //For all days behind today
                const daysBehind = dateAdjust
                console.log("DasyBehind Direction Check", directionCheck)
              //  console.log("daysBehind", daysBehind)
                if (daysBehind <= 0) { //At the beginning of the month when the days behind today are in the last month 
                    daysBehind += daysInMonth(month-1) //the month is accurate so last month is -1
                    return daysBehind
                }
                return daysBehind
            } else if (weekDaysArr.indexOf(day) < dayNum && directionCheck <= 0) {  //For all days ahead of today
                const daysAhead = reverseDateAdjust
                console.log("REVERSE daysAhead", daysAhead)
                console.log(" REVERSE DaysAhead Direction Check", directionCheck)
                if (daysAhead > daysInMonth(month)) { //At the end of the month when the days ahead of today are in the next month
                    daysAhead = daysAhead - daysInMonth(month) //the month is accurate
                    return daysAhead
                }
                return daysAhead
            } else if (weekDaysArr.indexOf(day) > dayNum && directionCheck <= 0) { //For all days behind today
                const daysBehind = dateAdjust -daysInMonth(month)
                console.log("REVERSE DasyBehind Direction Check", directionCheck)
              //  console.log("daysBehind", daysBehind)
                if (daysBehind <= 0) { //At the beginning of the month when the days behind today are in the last month 
                    daysBehind += daysInMonth(month-1) //the month is accurate so last month is -1
                    return daysBehind
                }
                return daysBehind
            }
            
        }
       console.log(dayOfWeek())
        useEffect(() => {
            if(dayOfWeek() > daysInMonth(month) && directionCheck >= 0){ //month is accurate
                dispatch(advanceMonthAdvance(1));
                dispatch(advanceYear(1));
                directionCheck=0;
                console.log("USE EFFECT DIRECTION CHECK", directionCheck)
            } else if (dayOfWeek() <= 1 && directionCheck < 0) {
                dispatch(reverseMonthAdvance(1));
                dispatch(reverseYear(1));
                //directionCheck=0;
                console.log("USE EFFECT DIRECTION CHECK", directionCheck)
            }
            console.log("Month in USE EFFECT", monthArr[month])
        
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
                        directionCheck = -1;
                        dispatch(lastWeek(7))
                        console.log("BACK directionCheck", directionCheck)
                        return directionCheck;
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
                        directionCheck = 1;
                        dispatch(nextWeek(7))
                        console.log("FORWARD directionCheck", directionCheck)
                        return directionCheck;
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