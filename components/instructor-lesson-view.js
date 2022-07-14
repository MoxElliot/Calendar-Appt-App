import instructorDash from '../styles/instructorDash.module.scss';
import React from 'react';
import LessonViewSelect from './lesson-view-select';
import InstructorLessonTable from './instructor-lesson-table';


export default function InstructorLesson () {
    return (
        <div className={instructorDash.lessonContainer}>
            Lesson View
            <div className={instructorDash.viewSelect}>
                <p> Lesson View </p>
                <LessonViewSelect />
            </div>
            <div className={instructorDash.lessonTable}>
                <InstructorLessonTable />
            </div>
            <div className={instructorDash.lessonSelect}>
                Lesson Selector
            </div>

        </div>
    )
}