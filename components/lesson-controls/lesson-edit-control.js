import React from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';

export default function LessonEditControl() {
    
    const singleLessonData = useSelector(state => state.lessonData.singleLessonData)
    const editLesson = useSelector(state => state.lessonControl.editLesson)
    if(!editLesson){
        return null;
    } 
       console.log("singleLessonData", (singleLessonData === "Select a Lesson"))

    if(singleLessonData === "Select a Lesson") {
        return (
            <div className="lessonDetailContainer container">
                <p> Select a Lesson to Edit...</p>
            </div>
        )
    } else {
        return (
            <div className="lessonDetailContainer container">
            
                <div className='row'>
                    <div className='lesson-text col col-md-6 col-12'>
                        <h4>Lesson Details</h4>
                        <p className='lesson-detail lesson-comment'>{singleLessonData[4]}</p>
                        <p className='lesson-detail lesson-name'>{singleLessonData[6]}</p>
                        <p className='lesson-detail lesson-date-time'>{singleLessonData[1]} at {singleLessonData[2]}</p>
                        <Link href="/"><a>{singleLessonData[7]}</a></Link>
                    </div>
                    <div className="lesson-attachment m-2
                        col col-md-4 col-6
                        d-flex flex-column">
                        <h5 className='m-0'>Lesson Attachments</h5>
                        <button className='btn p-0'>
                            <label className='bi bi-plus px-2'>Add Attachment</label>
                        </button>
                        {singleLessonData[5].map((att) => 
                            <Link className='bi bi-paperclip'href="/">
                                <a>{att}</a>
                            </Link>
                        )}
                    </div>
                </div>
                <div className="row p-0">
                    <div className='col-6 p-0'>
                        <button className='lesson-buttons 
                            d-flex justify-content-center
                            btn  
                            w-100 p-0'>
                            <label className='bi bi-pencil px-2'>Edit Lesson</label>
                        </button>
                    </div>
                    <div className='col-6 p-0'>
                        <button className='lesson-buttons 
                            d-flex justify-content-center
                            btn 
                            w-100 p-0'> 
                            <label className='bi bi-trash px-2'>Cancel Lesson</label>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
    
}