import React from 'react';
import cal from '../styles/cal.module.scss';
import CalandarDay from './cal-day';
import LessonControl from './lesson-control';

const weekDaysArr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];


const CalandarView = () => {
  
        const weekDays = weekDaysArr.map((day) =>
            <div className={cal.dayContainer} key={day.toString()}>{day}<CalandarDay /></div>
            )

        return (
            <div className={cal.calContainer}>
                <div className={cal.dateSlide}>
                    <div>aro</div>
                    <div className={cal.slideText}>
                        <p>Week of August 7th</p>
                       
                    </div>
                    <div>aro</div>
                </div>
                <div className={cal.weekContainer}>
                    {weekDays}
                    
                </div>
                <div className={cal.controlContainer}>
                    <LessonControl className={cal.lessonControl}/>
                </div>
                
            </div>
        )
    }

export default CalandarView