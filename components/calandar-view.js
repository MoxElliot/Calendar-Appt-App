import React from 'react';
import cal from '../styles/cal.module.scss';
import LessonControl from './lesson-control';

const weekDaysArr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];


const CalandarView = () => {
  
        const weekDays = weekDaysArr.map((day) =>
            <div className={cal.dayContainer} key={day.toString()}>{day}</div>
            )

        return (
            <div className={cal.calContainer}>
                <div className={cal.dateSlide}>
                    <div>ar0</div>
                    <div className={cal.slideText}>
                        <p>Week of August 7th</p>
                    </div>
                    <div>aro</div>
                </div>
                <div className={cal.weekContainer}>
                    <div>aro</div>
                    {weekDays}
                    <div>ar0</div>
                </div>
                <div className={cal.controlContainer}>
                    <LessonControl className={cal.lessonControl}/>
                </div>
            </div>
        )
    }

export default CalandarView