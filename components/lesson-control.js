import React from 'react';
import cal from '../styles/cal.module.scss';

const lessonDayArr = ['Su', 'M', 'Tu', 'W', 'Th', 'F', 'Sa'];
const repeatOptArr = ['Daily', 'Weekly', 'Monthly', 'None'];

export default function LessonControl () {

    const lessonDayRadio = lessonDayArr.map(day=> {
      
        return (
                    <label key={day.toString()} >
                        {day}
                        <input type="radio" id="dayRad" />
                    </label>
              
                );
        });

        const repeatOptRadio = repeatOptArr.map(option=> {
      
            return (
                        <label key={option.toString()} >
                            {option}
                            <input type="radio" id="optRad" />
                        </label>
                  
                    );
            });
    return (
        <div className={cal.lessonControl} >
            <form id={cal.lessonControlEle}>
                <p id={cal.lessonControlP}>Set New Lesson Date -or- Select New Lesson Day</p>
                <input type="date" name="lesson-date"></input>
                    {lessonDayRadio}
            </form>
            <form id={cal.lessonControlEle}>
                <p  id={cal.lessonControlP}>Repeat Lesson</p>
                    {repeatOptRadio}
            </form>
            <div className={cal.lessonControlBottom}>
                <form className={cal.lessonControlBtn} id={cal.lessonControlEle}>
                    <button>Create Lessson</button>
                </form>
                <form id={cal.lessonControlEle} > 
                    <label className={cal.studentSelect} id={cal.lessonControlP}>
                        <input type="checkbox" />
                        Only Available to:
                    </label>
                        <input type="text" placeholder='Student Name'/>
                </form>
            </div>
        </div>
    )
}