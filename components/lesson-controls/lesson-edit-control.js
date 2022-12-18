import React, { useState } from 'react';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { cancelLesson } from '../../redux/slices/lessonDataSlice';
import { nanoid } from '@reduxjs/toolkit';

export default function LessonEditControl() {

    const singleLessonData = useSelector(state => state.lessonData.singleLessonData);
    const lessonData = useSelector(state => state.lessonData.lessonData);
    const editLesson = useSelector(state => state.lessonControl.editLesson);

    const [isEditOn, setIsEditOn] = useState(false);
    const [ lessonComment, setLessonComment ] = useState(singleLessonData[4]);
    const [ lessonName, setLessonName ] = useState(singleLessonData[6]);
    const [ lessonStatus, setLessonStatus ] = useState(singleLessonData[3]);
    const [ lessonDate, setLessonDate ] = useState(singleLessonData[1]);
    const [ lessonTime, setLessonTime ] = useState(singleLessonData[2]);
    const [ lessonLink, setLessonLink ] = useState(singleLessonData[7]);
    const [ lessonAttachent, setLessonAttachment ] = useState(singleLessonData[5]);

    const dispatch = useDispatch();
    

    const handleCancelLesson = () => {
        const index = lessonData.findIndex(item => item.id === singleLessonData[0])
        dispatch(cancelLesson(index))
    };

    const handleEditLessonData = () => {
        console.log("handleEditLessonData")
    }

    if(!editLesson){
        return null;
    } 
    
    if(singleLessonData === "Select a Lesson") {
        return (
            <div className="lessonDetailContainer container">
                <p> Select a Lesson to Edit...</p>
            </div>
        )
    } else {
        return (
            <div className="lessonDetailContainer container">
                { isEditOn ? (
                    <>
                    <div className='row'>
                    <div className='lesson-text col col-md-6 col-12'>
                        <h4>Lesson Details</h4>
                        <input 
                            type='text' 
                            className='lesson-detail lesson-comment'
                            value={lessonComment}
                            onChange={(e) => {
                                setLessonComment(e.currentTarget.value);
                              }}
                        />
                        <input 
                            type='text' 
                            className='lesson-detail lesson-name'
                            value={lessonName}
                            onChange={(e) => {
                                setLessonName(e.currentTarget.value);
                              }}
                        />
                        <input 
                            type='text' 
                            className='lesson-detail lesson-status'
                            value={lessonStatus}
                            onChange={(e) => {
                                setLessonStatus(e.currentTarget.value);
                              }}
                        />
                        <input 
                            type='text' 
                            className='lesson-detail lesson-date-time'
                            value={lessonDate} 
                            onChange={(e) => {
                                setLessonDate(e.currentTarget.value);
                              }}   
                        />
                        <p>at</p>
                        <input 
                            type='text' 
                            className='lesson-detail lesson-date-time'
                            value={lessonTime}   
                            onChange={(e) => {
                                setLessonTime(e.currentTarget.value);
                              }} 
                        />
                        <input 
                            type='text'
                            value={lessonLink}
                            onChange={(e) => {
                                setLessonLink(e.currentTarget.value);
                              }}
                        />
                    </div>
                    <div className="lesson-attachment m-2
                        col col-md-4 col-6
                        d-flex flex-column">
                        <h5 className='m-0'>Lesson Attachments</h5>
                        {singleLessonData[5].map((att) => 
                            <Link 
                                className='bi bi-paperclip'
                                href="/"
                                key={att.toString() + nanoid}
                            >
                                <a>{att}</a>
                            </Link>
                        )}
                    </div>
                </div>
                <div className="row p-0">
                    <div className='col-6 p-0'>
                        <button 
                            className='lesson-buttons 
                            d-flex justify-content-center
                            btn 
                            w-100 p-0'
                            onClick = {handleEditLessonData}
                        > 
                            <label className='bi bi-pencil px-2'>Save</label>
                        </button>
                    </div>
                    <div className='col-6 p-0'>
                        <button className='lesson-buttons 
                            d-flex justify-content-center
                            btn  
                            w-100 p-0'
                            onClick = {() => setIsEditOn(!isEditOn)}
                            >
                            <label className='bi bi-trash px-2'>Cancel</label>
                        </button>
                    </div>
                    
                </div>
                    </> 
                ) : (
                   <>
                <div className='row'>
                    <div className='lesson-text col col-md-6 col-12'>
                        <h4>Lesson Details</h4>
                        <p className='lesson-detail lesson-comment'>{singleLessonData[4]}</p>
                        <p className='lesson-detail lesson-name'>{singleLessonData[6]}</p>
                        <p className='lesson-detail lesson-status'>{singleLessonData[3]}</p>
                        <p className='lesson-detail lesson-date-time'>{singleLessonData[1]} at {singleLessonData[2]}</p>
                        <Link href="/"><a>{singleLessonData[7]}</a></Link>
                    </div>
                    <div className="lesson-attachment m-2
                        col col-md-4 col-6
                        d-flex flex-column">
                        <h5 className='m-0'>Lesson Attachments</h5>
                        {singleLessonData[5].map((att) => 
                            <Link 
                                className='bi bi-paperclip'
                                href="/"
                                key={att.toString() + nanoid}
                            >
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
                            w-100 p-0'
                            onClick = {() => setIsEditOn(!isEditOn)}
                            >
                            <label className='bi bi-pencil px-2'>Edit Lesson</label>
                        </button>
                    </div>
                    <div className='col-6 p-0'>
                        <button 
                            className='lesson-buttons 
                            d-flex justify-content-center
                            btn 
                            w-100 p-0'
                            onClick = {handleCancelLesson}
                        > 
                            <label className='bi bi-trash px-2'>Cancel Lesson</label>
                        </button>
                    </div>
                </div>
                </> 
                )}
            </div>
        )
    }
    
}