import React from 'react';
import instructorCal from '../styles/instructorCal.module.scss';
import InstCalandarDay from './instructor-calandar-view/instCal-day';
import LessonCalControl from './instructor-calandar-view/lesson-calandar-control';

const weekDaysArr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];


const InstCalandarView = () => {
  
        const weekDays = weekDaysArr.map((day) =>
            <div className={instructorCal.dayContainer} key={day.toString()}>{day}<InstCalandarDay /></div>
            )

        return (
            <div className={instructorCal.calContainer}>
                <div className={instructorCal.dateSlide}>
                    <div>aro</div>
                    <div className={instructorCal.slideText}>
                        <p>Week of August 7th</p>
                       
                    </div>
                    <div>aro</div>
                </div>
                <div className={instructorCal.weekContainer}>
                    {weekDays}
                    
                </div>
                <div className={instructorCal.controlContainer}>
                    <LessonCalControl className={instructorCal.lessonControl}/>
                </div>
                
            </div>
        )
    }

export default InstCalandarView