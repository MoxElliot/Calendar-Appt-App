import React, {useEffect, useState} from 'react';
import instructorCal from '../../styles/instructorCal.module.scss';
import InstCalandarDay from './instCal-day';
import InstructorLessonDetail from '../instructor-lesson-detail/instructor-lesson-detail';
import LessonCalControl from './lesson-calandar-control';

const weekDaysArr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const InstCalandarView = () => {

    const [showLessonDet, setShowLessonDet] = useState(false);

    useEffect(() => {
        console.log("Show Lesson Det is now:", showLessonDet);
    }, [showLessonDet]);

    const handleLessonDet = (e) => {
            e.preventDefault();
            setShowLessonDet( (showLessonDet) =>{
              
                if(!showLessonDet) {
                    setShowLessonDet(true)
                } else {
                    setShowLessonDet(false)
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

        return (
            <div className={instructorCal.calContainer}>
                <div className={instructorCal.dateSlide}>
                    <button>aro</button>
                    <label className={instructorCal.slideText}>
                        Week of August 7th
                    </label>
                    <button>aro</button>
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