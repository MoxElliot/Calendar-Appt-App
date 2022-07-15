import React from 'react';
import instructorCal from '../styles/instructorCal.module.scss';

const lessonDayArr = ['Su', 'M', 'Tu', 'W', 'Th', 'F', 'Sa'];
const repeatOptArr = ['Daily', 'Weekly', 'Monthly', 'None'];

export default function LessonCalControl () {

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
        <div className={instructorCal.lessonControl} >
            <form id={instructorCal.lessonControlEle}>
                <p id={instructorCal.lessonControlP}>Set New Lesson Date -or- Select New Lesson Day</p>
                <input type="date" name="lesson-date"></input>
                    {lessonDayRadio}
            </form>
            <form id={instructorCal.lessonControlEle}>
                <p  id={instructorCal.lessonControlP}>Repeat Lesson</p>
                    {repeatOptRadio}
            </form>
            <div className={instructorCal.lessonControlBottom}>
                <form className={instructorCal.lessonControlBtn} id={instructorCal.lessonControlEle}>
                    <button>Create Lessson</button>
                </form>
                <form id={instructorCal.lessonControlEle} > 
                    <label className={instructorCal.studentSelect} id={instructorCal.lessonControlP}>
                        <input type="checkbox" />
                        Only Available to:
                    </label>
                        <input type="text" placeholder='Student Name'/>
                </form>
            </div>
        </div>
    )
}