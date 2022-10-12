import Link from 'next/link';

export default function LessonViewControls() {

    return (
        <div className="lessonViewControl">

            <div className="studentLink">
                    <Link href="/">
                        <p className="studentName">Student Name</p>
                    </Link>
                        <p>requested a lesson on xx/xx/xxxx at xx:xx</p>
            </div>

            <div className="lessonViewControlBottom">

                <div className="lessonViewControlLeft">
                    
                    <div className="topicContainer">
                        <p className="topicTitle">Topic:</p>
                        <p>Review from OGS game.</p>
                    </div>
                    <div className="attachmentContainer">
                        <div className="attachmentTitle">
                            <p>Attachments:</p>
                        </div>
                        <div>
                            <p>LeagueGame.sgf</p>
                            <p>LeagueGame2.sgf</p>
                        </div>
                    </div>
                    
                </div>
                
                <div className="lessonViewControlRight">

                    <form className="lessonViewControlForm">
                        <div className="lessonViewControlRadio">
                            <label className="lessonViewControlAccept">
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
                        <div className="lessonViewControlText">
                        <textarea 
                            rows="5"
                            cols="30"
                            name="student-message"
                            />
                        </div>

                        <div className="lessonViewControlSubmitContainer">
                        <button className="lessonViewControlSubmit">
                            Submit
                        </button>
                        </div>
                    
                    </form>
                    

                </div>

            </div>
        </div>
    )
}