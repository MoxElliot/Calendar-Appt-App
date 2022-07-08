import React from 'react';
import cal from '../styles/cal.module.scss';

class CalandarView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render () {
        return (
            <div className={cal.calContainer}>
                <div className={cal.dateSlide}>
                    Week of August 7th
                </div>
                <div className={cal.weekContainer}>
                    week container
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