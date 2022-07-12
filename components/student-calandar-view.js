import React from 'react';
import studentCal from '../styles/studentCal.module.scss';
import StudCalandarDay from './studCal-day';


const weekDaysArr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];


const StudCalandarView = () => {
  
        const weekDays = weekDaysArr.map((day) =>
            <div className={studentCal.dayContainer} key={day.toString()}>{day}<StudCalandarDay /></div>
            )

        return (
            <div className={studentCal.calContainer}>
                <div className={studentCal.dateSlide}>
                    <div>aro</div>
                    <div className={studentCal.slideText}>
                        <p>Week of August 7th</p>
                       
                    </div>
                    <div>aro</div>
                </div>
                <div className={studentCal.weekContainer}>
                    {weekDays}
                </div> 
                <p>Select available less time to request booking</p>
            </div>
        )
    }

export default StudCalandarView