import NavBar from '../components/nav-bar';
import Head from 'next/head';
import InstructorLessonView from '../components/instructor-lesson-view/instructor-lesson-view';
import InstructorMessageView from '../components/instructor-message-view/instructor-message-view';

export default function InstructorDash() {
    return (
    <div>
        <Head>
            <title>Instructor Dashboard</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <NavBar />
        <div className="dashContainer container">
            <InstructorLessonView />
        </div>
        <div className="dashContainer container">
            <InstructorMessageView />
        </div>
    </div>
    )
}