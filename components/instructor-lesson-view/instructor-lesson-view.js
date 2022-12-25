import React from 'react';
import { useDispatch } from 'react-redux';
import LessonViewSelect from './lesson-view-select';
import InstructorLessonTable from './instructor-lesson-table';
import LessonEditControl from '../lesson-controls/lesson-edit-control';
import LessonCreateControl from '../lesson-controls/lesson-create-control';
import { showEditLesson, showCreateLesson } from '../../redux/slices/lessonControlSlice'

export default function InstructorLessonView () {

    const dispatch = useDispatch()

    const handleEditLesson = (e) => {
        e.preventDefault()
        dispatch(showEditLesson(true))
        dispatch(showCreateLesson(false))
       
    }
    const handleCreateLesson = (e) => {
        e.preventDefault()
        dispatch(showCreateLesson(true))
        dispatch(showEditLesson(false))
    }

    return (
      
            <div className="lessonContainer container">
                <div className="viewSelect">
                    <p className="lessonViewSelectHeader">Instructor Lesson View</p>
                    <LessonViewSelect />
                </div>
                <div className="lesson-table-container">
                    <InstructorLessonTable />
                </div>
                <div className="lessonControlContainer">
                <div 
                    className='btn-group lessonControlToggle'
                    role="group"
                    aria-label="Basic radio toggle button group"
                >
                    <input 
                        className='btn-check p-1 m-1'
                        type="radio"
                        name="toggleCreate"
                        id="toggleCreate"
                        autoComplete='off'
                        onClick={handleCreateLesson}
                    />
                    <label 
                        className='btn btn-primary'
                        htmlFor="toggleCreate"
                    >
                        Create Lesson
                    </label>
                    <input 
                        className='btn-check p-1 m-1'
                        type="radio"
                        name="toggleEdit"
                        id="toggleEdit"
                        autoComplete='off'
                        onClick={handleEditLesson}
                    />
                    <label 
                        className='btn btn-primary'
                        htmlFor="toggleEdit"
                    >
                        Edit Lesson
                    </label>
                </div>  
                    <LessonEditControl />
                    <LessonCreateControl />
                </div>
            </div>
    )
}