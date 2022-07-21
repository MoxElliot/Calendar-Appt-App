import React, {useEffect, useState} from 'react';
import instructorCal from '../../styles/instructorCal.module.scss';
import InstCalandarDay from './instCal-day';
import InstructorLessonDetail from '../instructor-lesson-detail/instructor-lesson-detail';
import LessonCalControl from './lesson-calandar-control';
import { useSelector, useDispatch } from 'react-redux';
import { nextWeek } from '../../redux/calandarDataSlice'


const weekDaysArr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const InstCalandarView = () => {

    const [showLessonDet, setShowLessonDet] = useState(false);

    // useEffect(() => {
    //     console.log("Show Lesson Det is now:", showLessonDet);
    // }, [showLessonDet]);

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
    
    const weekDays = weekDaysArr.map((day) =>
        <div 
            className={instructorCal.dayContainer} 
            key={day.toString()}
        >
            {day}
            <InstCalandarDay handleLessonDet={handleLessonDet}/>
        </div>
        )

        const today = useSelector((state) => state.calandarData.date)
        const year = useSelector((state) => state.calandarData.year)
        const month = useSelector((state) => state.calandarData.month)
        const dispatch = useDispatch()
       
        const startingDate = new Date(year, month, 1)
        console.log("starting Date", startingDate)

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