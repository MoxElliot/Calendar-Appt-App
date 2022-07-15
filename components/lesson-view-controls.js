import instructorDash from '../styles/instructorDash.module.scss';
import Link from 'next/link';

export default function LessonViewControls() {

    return (
        <div className={instructorDash.lessonViewControl}>

            <div className={instructorDash.studentLink}>
                    <Link href="/">
                        <p className={instructorDash.studentName}>Student Name</p>
                    </Link>
                        <p>requested a lesson on xx/xx/xxxx at xx:xx</p>
            </div>

            <div className={instructorDash.lessonViewControlBottom}>

                <div className={instructorDash.lessonViewControlLeft}>
                    
                    <div className={instructorDash.topicContainer}>
                        <p className={instructorDash.topicTitle}>Topic:</p>
                        <p>Review from OGS game.</p>
                    </div>
                    <div className={instructorDash.attachmentContainer}>
                        <div className={instructorDash.attachmentTitle}>
                            <p>Attachments:</p>
                        </div>
                        <div>
                            <p>LeagueGame.sgf</p>
                            <p>LeagueGame2.sgf</p>
                        </div>
                    </div>
                    
                </div>
                
                <div className={instructorDash.lessonViewControlRight}>

                    <form className={instructorDash.lessonViewControlForm}>
                        <div className={instructorDash.lessonViewControlRadio}>
                            <label className={instructorDash.lessonViewControlAccept}>
                                <input  
                                    type='radio'
                                    value='Accept'
                                />
                                Accept
                            </label>
        
                            <label>
                                <input  
                                    type='radio'
                                    value='Reject'
                                />
                                Reject
                            </label>
                        </div>
                        <div className={instructorDash.lessonViewControlText}>
                        <textarea 
                            rows="5"
                            cols="30"
                            name="student-message"
                            />
                        </div>

                        <div className={instructorDash.lessonViewControlSubmitContainer}>
                        <button className={instructorDash.lessonViewControlSubmit}>
                            Submit
                        </button>
                        </div>
                    
                    </form>
                    

                </div>

            </div>
        </div>
    )
}