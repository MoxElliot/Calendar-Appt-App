import { useSelector } from 'react-redux';
import Link from 'next/link';

export default function InstructorLessonTable() {
    const lessonData = useSelector((state) => state.lessonData)
    console.log(lessonData)

    const renderedLessons = lessonData.map((val) => (
            <tr key={val.id}>
                <th scope='row' className='text-center'>{val.id}</th>
                <td>{val.date}</td>
                <td>{val.time}</td>
                <td>{val.status}</td>
                <td>{val.detail}</td>
                <td>{val.attachment}</td>
                <td>{val.name}</td>
                <td>
                    <Link href="https://www.discord.com/">
                        <a className=''>{val.link}</a>
                    </Link>
                </td>
            </tr>
        ))
  
    return (
    <table className="table table-hover">
        <thead>
            <tr>
                <th scope='col'>Lesson #</th>
                <th scope='col'>Lesson Date</th>
                <th scope='col'>Lesson Time</th>
                <th scope='col'>Lesson Status</th>
                <th scope='col'>Lesson Detail</th>
                <th scope='col'>Lesson Attachments</th>
                <th scope='col'>Student Name</th>
                <th scope='col'>Discord Link</th>
            </tr>
        </thead>
        <tbody>
            {renderedLessons}
        </tbody>
        
    </table> 
    )
}