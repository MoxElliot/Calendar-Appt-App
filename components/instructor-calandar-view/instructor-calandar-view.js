import React, { useState} from 'react';
import instructorCal from '../../styles/instructorCal.module.scss';
import InstCalandarDay from './instCal-day';
import InstructorLessonDetail from '../instructor-lesson-detail/instructor-lesson-detail';
import LessonCalControl from './lesson-calandar-control';
import { useSelector, useDispatch } from 'react-redux';
import { nextWeek } from '../../redux/weekNavSlice'


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
        
    const today = useSelector((state) => state.weekNav.today)
    const dispatch = useDispatch()

    const weekDays = weekDaysArr.map(function(day) {
      
        let d = new Date();
        const dayOfWeek = () => {
            for (let i=0; i < 7; i++) {
                if (weekDaysArr.indexOf(day) === today) {
                return d.getDate()
                } else {
                    return ((weekDaysArr.indexOf(day) - today) + d.getDate())
                }

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
        });

  
        console.log(today)
    return (
        <div className={instructorCal.calContainer}>
            <div className={instructorCal.dateSlide}>
                <button>aro</button>
                <label className={instructorCal.slideText}>
                    {today}
                </label>
                <button 
                    onClick={() =>dispatch(nextWeek())}
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