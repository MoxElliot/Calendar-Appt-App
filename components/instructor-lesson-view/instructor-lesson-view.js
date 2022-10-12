import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import LessonViewSelect from './lesson-view-select';
import InstructorLessonTable from './instructor-lesson-table';
import LessonEditControl from '../lesson-controls/lesson-edit-control';
import LessonCreateControl from '../lesson-controls/lesson-create-control';
import { showEditLesson, showCreateLesson } from '../../redux/slices/lessonControlSlice'

export default function InstructorLessonView () {

    const editLesson = useSelector(state => state.lessonControl.editLesson)
    const dispatch = useDispatch()

    const handleEditLesson = (e) => {
        e.preventDefault()

        dispatch(showEditLesson(!editLesson))
        console.log("in handle instructor-calendar-view", editLesson)
    }

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
                        <button 
                            className='btn btn-primary p-1 m-1'
                            onClick={handleEditLesson}
                        >
                            Edit Lesson
                        </button>
                    </div>
                    <LessonEditControl editLesson={editLesson}/>
                    <LessonCreateControl />
                </div>
            </div>
    )
}