import instructorDash from '../styles/instructorDash.module.scss';
import { useEffect, useState } from 'react';
import Link from 'next/link';


const lessonDataArr = [
    {id:1, date: "xx/xx/xxx at xx:xx", status:"Booked", detail:"Arma virumque canō, Trōiae quī prīmus ab ōrīs", attachment:"Lāvīniaque.sgf", name:"Student name", link:"Discord"},
    {id:2, date: "xx/xx/xxx at xx:xx", status:"Booked", detail:"Arma virumque canō, Trōiae quī prīmus ab ōrīs", attachment:"Lāvīniaque.sgf", name:"Student name", link:"Discord"},
    {id:3, date: "xx/xx/xxx at xx:xx", status:"Requested", detail:"Arma virumque canō, Trōiae quī prīmus ab ōrīs", attachment:"Lāvīniaque.sgf", name:"Student name", link:"Discord"},
    {id:4,date: "xx/xx/xxx at xx:xx", status:"Booked", detail:"Arma virumque canō, Trōiae quī prīmus ab ōrīs", attachment:"Lāvīniaque.sgf", name:"Student name", link:"Discord"}
]

export default function InstructorLessonTable () {
    return (
        <div className={instructorDash.lessonTableContainer}>
            
            <table className={instructorDash.lessonTable}>
            <tbody>
                <tr>
                    <th>Lesson Date</th>
                    <th>Lesson Status</th>
                    <th>Lesson Detail</th>
                    <th>Lesson Attachments</th>
                    <th>Student Name</th>
                    <th>Discord Link</th>
                </tr>
                {lessonDataArr.map((val) => {
                    return (
                        <tr key={val.id}>
                            <td>{val.date}</td>
                            <td>{val.status}</td>
                            <td>{val.detail}</td>
                            <td>{val.attachment}</td>
                            <td>{val.name}</td>
                            <td><Link href="https://www.discord.com" targer="blank">{val.link}</Link></td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    )
}