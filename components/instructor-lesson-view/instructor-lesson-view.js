import React from 'react';
import LessonViewSelect from './lesson-view-select';
import InstructorLessonTable from './instructor-lesson-table';

import LessonCreateControl from '../lesson-controls/lesson-create-control';


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
                    <div className='lessonControlToggle'>
                        <button className='btn btn-primary p-1 m-1'>
                            Create Lesson
                        </button>
                        <button className='btn btn-primary p-1 m-1'>
                            Edit Lesson
                        </button>
                    </div>
                    
                    <LessonCreateControl />
                </div>
            </div>
    )
}