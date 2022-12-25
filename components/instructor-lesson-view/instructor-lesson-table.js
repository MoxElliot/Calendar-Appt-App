import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { readLesson } from '../../redux/slices/lessonDataSlice'
import { nanoid } from 'nanoid';

export default function InstructorLessonTable() {
    const lessonData = useSelector((state) => state.lessonData.lessonData)
    const lessonAttachmentList = useSelector(state => state.lessonControl.lessonAttachmentList)

    const dispatch = useDispatch();

    useEffect(() => {

    }, [lessonAttachmentList])
    

    const renderedLessons = lessonData.map((val) => {
        const rowData = [val.id, val.date, val.time, val.status, val.detail, val.attachment, val.name, val.link];
        
        const rowSelect = () => {
            dispatch(readLesson(rowData))
            return rowData
           }

        const lessonRow = 
        <tr className='lesson-table-body-row' key={nanoid()} onClick={rowSelect}>
            <td>{val.date}</td>
            <td>{val.time}</td>
            <td>{val.status}</td>
            <td>{val.detail}</td>
            
            <td> 
                {val.attachment.map((att) => 
                    <p key={att.toString()}>{att}</p>
                )}
            </td>
            <td>{val.name}</td>
            <td>   
                <Link href="https://www.discord.com/">
                    <a className=''>{val.link}</a>
                </Link>
            </td>
        </tr>
        return lessonRow 
    })


    return (
    <table className="lesson-table-content table table-hover ">
        <thead className="lesson-table-head">
            <tr className='lesson-table-head-row'>
                <th scope='col'>Lesson Date</th>
                <th scope='col'>Lesson Time</th>
                <th scope='col'>Lesson Status</th>
                <th scope='col'>Lesson Detail</th>
                <th scope='col'>Lesson Attachments</th>
                <th scope='col'>Student Name</th>
                <th scope='col'>Discord Link</th>
            </tr>
        </thead>
        <tbody className="lesson-table-body">
            {renderedLessons}
        </tbody>
        
    </table> 
    )
}