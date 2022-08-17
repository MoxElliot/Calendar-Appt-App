import React from 'react';
import studentCal from '../../styles/studentCal.module.scss';

const timeSlotsArr = ["1:00", "2:00", "3:00", "4:00", "5:00"]

export default function StudCalandarDay({handleLessonDet}) {

    const timeSlots = timeSlotsArr.map((timeSlot) => 
        <button 
            className={studentCal.timeSlot}
            key={timeSlot.toString()}
            onClick={handleLessonDet}
        >
            {timeSlot}
        </button>
    );

    return (
        <div className={studentCal.calDay}>
            {timeSlots}
        </div>
    )

}

