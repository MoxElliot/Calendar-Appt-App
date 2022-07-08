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
                hello
            </div>
        )
    }
}

export default CalandarView