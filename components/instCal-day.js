import React from 'react';
import instructorCal from '../styles/instructorCal.module.scss';

const timeSlotsArr = ["1:00", "2:00", "3:00", "4:00", "5:00"]

export default function InstCalandarDay() {

    const timeSlots = timeSlotsArr.map((timeSlot) => 
        <button className={instructorCal.timeSlot}>{timeSlot}</button>
    );

    return (
        <div className={instructorCal.calDay}>
            {timeSlots}
        </div>
    )

}

