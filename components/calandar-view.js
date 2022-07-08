import React from 'react';
import cal from '../styles/cal.module.scss';

const weekDaysArr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];


class CalandarView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render () {
        const weekDays = weekDaysArr.map((day) =>
            <div className={cal.dayContainer}>{day}</div>
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
                    <div className={cal.lessonControl}>
                        lesson control
                    </div>
                </div>
            </div>
        )
    }
}

export default CalandarView