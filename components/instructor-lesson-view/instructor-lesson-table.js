import { useSelector } from 'react-redux';
import instructorLess from '../../styles/instructorLess.module.scss';


export default function InstructorLessonTable() {
    const lessonData = useSelector((state) => state.lessonData.lessons)

    const renderedLessons = lessonData.map((lesson) => (
            <tr key={lesson.id}>
                <td>{lesson.date}</td>
                <td>{lesson.status}</td>
                <td>{lesson.detail}</td>
                <td>{lesson.attachment}</td>
                <td>{lesson.name}</td>
                <td>{lesson.link}</td>
            </tr>
        ))
  
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
                {renderedLessons}
                </tbody>
            </table>
        </div>
    )
}