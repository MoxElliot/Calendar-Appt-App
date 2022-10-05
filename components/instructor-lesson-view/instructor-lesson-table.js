import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import instructorLess from '../../styles/instructorLess.module.scss';
import { loadLessonData } from '../../redux/slices/lessonDataSlice';

export default function InstructorLessonTable() {
    const lessonData = useSelector((state) => state.lessonData.lessons)
  
    return (
        <div className={instructorLess.lessonTableContainer}>
            <table className={instructorLess.lessonTable}>
            <tbody>
                <tr>
                    <th>Lesson Date</th>
                    <th>Lesson Status</th>
                    <th>Lesson Detail</th>
                    <th>Lesson Attachments</th>
                    <th>Student Name</th>
                    <th>Discord Link</th>
                </tr>
                
                {lessonData.map((val) => {
                    return (
                        <tr key={val.id}>
                            <td>{val.date}</td>
                            <td>{val.status}</td>
                            <td>{val.detail}</td>
                            <td>{val.attachment}</td>
                            <td>{val.name}</td>
                            <td>{val.link}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    )
}