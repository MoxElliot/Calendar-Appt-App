import NavBar from '../components/nav-bar'
import Head from 'next/head'

export default function StudentDash() {
    return (
    <div>
        <Head>
            <title>Student Dashboard </title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <NavBar />
        <h1>Student Dashboard </h1>    
    </div>
    )
}