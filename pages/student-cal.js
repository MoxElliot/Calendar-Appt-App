import NavBar from '../components/nav-bar'
import Head from 'next/head'
import StudCalandarView from '../components/student-calandar-view'
import student from '../styles/student.module.scss';

export default function StudentCal() {
    return (
    <div>
        <Head>
            <title>Student Dashboard </title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <NavBar />
        <div className={student.studContainer}>
            <StudCalandarView />
        </div>  
    </div>
    )
}