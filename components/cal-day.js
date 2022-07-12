import React from 'react';
import cal from '../styles/cal.module.scss';

const timeSlotsArr = ["1:00", "2:00", "3:00", "4:00", "5:00"]

export default function CalandarDay() {

    const timeSlots = timeSlotsArr.map((timeSlot) => 
        <button className={cal.timeSlot}>{timeSlot}</button>
    );

    return (
        <div className={cal.calDay}>
            {timeSlots}
        </div>
    )

}

