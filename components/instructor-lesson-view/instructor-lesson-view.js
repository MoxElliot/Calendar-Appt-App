import React from 'react';
import LessonViewSelect from './lesson-view-select';
import InstructorLessonTable from './instructor-lesson-table';
import LessonViewControls from './lesson-view-controls';
import LessonControl from '../instructor-lesson-detail/lesson-control';


export default function InstructorLessonView () {
    return (
      
            <div className="lessonContainer">
                <div className="viewSelect">
                    <p className="lessonViewSelectHeader">Instructor Lesson View </p>
                    <LessonViewSelect />
                </div>
                <div className="lessonTable">
                    <InstructorLessonTable />
                </div>
                <div className="lessonControl">
                    <LessonViewControls />
                </div>
                <div className="controlContainer col-5">
                    <LessonControl />
                </div>

            </div>
    )
}