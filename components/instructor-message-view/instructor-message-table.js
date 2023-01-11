
import Link from 'next/link';
import { useSelector } from 'react-redux';


export default function InstructorMessageTable() {
    const messageData = useSelector((state) => state.messageData)

    return (
        <div className="message-table-container">
            <table className="message-table-content table table-striped tabe-hover">
                <thead className="message-table-head">
                    <tr className="message-table-head-row">
                        <th></th>
                        <th>Message Date</th>
                        <th>From</th>
                        <th>Subject</th>
                        <th>Message Preview</th>
                    </tr>
                    {messageData.map((val) => {
                        return (
                            <tr key={val.id}>
                                <td>
                                    <button>
                                        <Link href="/message-details">Show Message</Link>
                                    </button>
                                </td>
                                <td>{val.date}</td>
                                <td>{val.name}</td>
                                <td>{val.subject}</td>
                                <td>{val.message}</td>
                            </tr>
                        )
                    })}
                </thead>
            </table>
        </div>
    )
}