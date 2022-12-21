import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { readLesson } from '../../redux/slices/lessonDataSlice'
import { nanoid } from 'nanoid';

export default function InstructorLessonTable() {
    const lessonData = useSelector((state) => state.lessonData.lessonData)

    // const [selectedLesson, setSelectedLesson] = useState(lessonData)
    //0:id, 1:date, 2:time, 3:status, 4:detail, 5:attachment, 6:name, 7:link

    const dispatch = useDispatch()

    const renderedLessons = lessonData.map((val) => {
        const rowData = [val[0], val[1], val[2], val[3], val[4], val[5], val[6], val[7]];
       
        const rowSelect = () => {
            dispatch(readLesson(rowData))
            return rowData
           }

        // if(val[5]===undefined) {
        //     val[5] = ["one"]
        // }
        const lessonRow = 
        <tr key={nanoid()} onClick={rowSelect}>
            <td>{val[1]}</td>
            <td>{val[2]}</td>
            <td>{val[3]}</td>
            <td>{val[4]}</td>
            
            {/* <td> 
                {val[5].map((att) => 
                    <p key={att.toString()}>{att}</p>
                )}
            </td> */}
            <td>{val[6]}</td>
            <td>   
                <Link href="https://www.discord.com/">
                    <a className=''>{val[7]}</a>
                </Link>
            </td>
        </tr>
        return lessonRow 
    })


    return (
    <table className="table table-hover ">
        <thead>
            <tr >
                <th scope='col'>Lesson Date</th>
                <th scope='col'>Lesson Time</th>
                <th scope='col'>Lesson Status</th>
                <th scope='col'>Lesson Detail</th>
                <th scope='col'>Lesson Attachments</th>
                <th scope='col'>Student Name</th>
                <th scope='col'>Discord Link</th>
            </tr>
        </thead>
        <tbody >
            {renderedLessons}
        </tbody>
        
    </table> 
    )
}