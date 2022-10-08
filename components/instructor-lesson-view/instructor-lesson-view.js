import React from 'react';
import LessonViewSelect from './lesson-view-select';
import InstructorLessonTable from './instructor-lesson-table';
import LessonViewControls from './lesson-view-controls';
import LessonCreateControl from '../instructor-lesson-detail/lesson-create-control';


export default function InstructorLessonView () {
    return (
      
            <div className="lessonContainer container">
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
                <LessonCreateControl />
            </div>
    )
}