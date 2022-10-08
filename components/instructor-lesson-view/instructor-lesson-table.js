import { useSelector } from 'react-redux';

export default function InstructorLessonTable() {
    const lessonData = useSelector((state) => state.lessonData)
    console.log(lessonData)

    const renderedLessons = lessonData.map((val) => (
            <tr key={val.id}>
                <td>{val.date}</td>
                <td>{val.time}</td>
                <td>{val.status}</td>
                <td>{val.detail}</td>
                <td>{val.attachment}</td>
                <td>{val.name}</td>
                <td>{val.link}</td>
            </tr>
        ))
  
    return (
        <div className="lessonTableContainer">
            <table className="lessonTable">
            <tbody>
                <tr>
                    <th>Lesson Date</th>
                    <th>Lesson Time</th>
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