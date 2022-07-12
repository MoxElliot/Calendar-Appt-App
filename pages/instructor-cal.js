import NavBar from '../components/nav-bar';
import CalandarView from '../components/calandar-view';
import Head from 'next/head';
import instructor from '../styles/instructor.module.scss';

export default function InstructorCal() {
    return (
    <div>
        <Head>
            <title>Instructor Dashboard</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <NavBar />
        <div className={instructor.instContainer}>
            <CalandarView />
        </div>
    </div>
    )
}