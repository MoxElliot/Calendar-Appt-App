import React, { useState } from 'react';
import Link from 'next/link';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { cancelLesson, editLessonData } from '../../redux/slices/lessonDataSlice';
import { setAttachementList } from '../../redux/slices/lessonControlSlice';
import LessonEditAttachment from './lesson-edit-attachment';
import { nanoid } from '@reduxjs/toolkit';

export default function LessonEditControl() {

    const singleLessonData = useSelector(state => state.lessonData.singleLessonData);
    const lessonData = useSelector(state => state.lessonData.lessonData);
    const editLesson = useSelector(state => state.lessonControl.editLesson);
    const lessonAttachmentList = useSelector(state => state.lessonControl.lessonAttachmentList)

    const [isEditOn, setIsEditOn] = useState(false);
    const [ lessonComment, setLessonComment ] = useState(singleLessonData[4]);
    const [ lessonName, setLessonName ] = useState(singleLessonData[6]);
    const [ lessonStatus, setLessonStatus ] = useState(singleLessonData[3]);
    const [ lessonDate, setLessonDate ] = useState(singleLessonData[1]);
    const [ lessonTime, setLessonTime ] = useState(singleLessonData[2]);
    const [ lessonLink, setLessonLink ] = useState(singleLessonData[7]);
    const [ lessonAttachment, setLessonAttachment ] = useState(singleLessonData[5]);

    const dispatch = useDispatch();
    
    useEffect(() => {
        setLessonComment(singleLessonData[4])
        setLessonName(singleLessonData[6])
        setLessonStatus(singleLessonData[3])
        setLessonDate(singleLessonData[1]);
        setLessonTime(singleLessonData[2]);
        setLessonLink(singleLessonData[7]);
        setLessonAttachment(singleLessonData[5]);
        dispatch(setAttachementList(singleLessonData[5]))
    }, [singleLessonData])

    useEffect(() => {
       setLessonAttachment(lessonAttachmentList)
    }, [lessonAttachmentList])

    
    const handleCancelLesson = () => {
        const index = lessonData.findIndex(item => item.id === singleLessonData[0])
        dispatch(cancelLesson(index))
    };

    const handleEditLessonData = () => {

        const index = lessonData.findIndex(item => item.id === singleLessonData[0])
        let newOb = {lessonIndex: index, selectedLesson:[...singleLessonData]}
        newOb.selectedLesson[4] = lessonComment
        newOb.selectedLesson[6] = lessonName
        newOb.selectedLesson[3] = lessonStatus
        newOb.selectedLesson[1] = lessonDate
        newOb.selectedLesson[2] = lessonTime
        newOb.selectedLesson[7] = lessonLink
        newOb.selectedLesson[5] = lessonAttachmentList
        dispatch(editLessonData(newOb))
        setIsEditOn(!isEditOn)
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
        <>
            { isEditOn ? 
            (
                <div className="lessonDetailEditContainer container">
                    <div className='row'>
                        <div className= 'col'>
                            <div className='lesson-text col col-md-6 col-12'>
                                <h4>Lesson Details</h4>
                                <label className='lesson-text-input'>
                                    Details:
                                    <textarea 
                                        type='text'
                                        rows="3"
                                        cols="30" 
                                        className='lesson-detail lesson-comment'
                                        value={lessonComment}
                                        onChange={(e) => {
                                            setLessonComment(e.currentTarget.value);
                                        }}
                                    />
                                </label>
                                <label className='lesson-text-input'>
                                    Name:
                                    <input 
                                        type='text' 
                                        className='lesson-detail lesson-name'
                                        value={lessonName}
                                        onChange={(e) => {
                                            setLessonName(e.currentTarget.value);
                                        }}
                                    />
                                </label>
                                <label 
                                    className='lesson-text-input'
                                    htmlFor='status-select'>
                                    Status:
                                    <select 
                                        id='status-select'
                                        name='status-select' 
                                        className='lesson-detail lesson-status'
                                        value={lessonStatus}
                                        onChange={(e) => {
                                            setLessonStatus(e.currentTarget.value);
                                        }}
                                    >
                                        <option  
                                            defaultValue
                                            style={{display:"none"}}
                                            >
                                                -- Select a Status --
                                            </option>
                                        <option value='available'>Available</option>
                                        <option value='booked'>Booked</option>
                                        <option value='requested'>Requested</option>
                                        <option value='canceled'>Canceled</option>
                                    </select>
                                </label>
                                <label className='lesson-text-input'>
                                    Date:
                                    <input 
                                        type='date' 
                                        className='lesson-detail lesson-date-time'
                                        value={lessonDate} 
                                        onChange={(e) => {
                                            setLessonDate(e.currentTarget.value);
                                        }}   
                                    />
                                </label>
                            
                                <label className='lesson-text-input'>
                                    Time:
                                    <input 
                                        type='time' 
                                        className='lesson-detail lesson-date-time'
                                        value={lessonTime}   
                                        onChange={(e) => {
                                            setLessonTime(e.currentTarget.value);
                                        }} 
                                    />
                                </label>
                                <label className='lesson-text-input'>
                                    Link:
                                    <input 
                                        type='text'
                                        className='lesson-detail lesson-link'
                                        value={lessonLink}
                                        onChange={(e) => {
                                            setLessonLink(e.currentTarget.value);
                                        }}
                                    />
                                </label>
                            </div>
                        </div>
                        <div className='col lesson-attachment p-2 m-2
                                d-flex flex-column'>
                            <LessonEditAttachment
                                lessonAttachment={lessonAttachmentList}
                            />
                        </div>
                    </div>
                    <div className="lesson-details-buttons row p-0">
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
                </div> 
            ) : 
            (
                <div className="lessonDetailContainer container">
                    <div className='row'>
                        <div className='lesson-text col col-md-6 col-12'>
                            <h4>Lesson Details</h4>
                            <p className='lesson-detail lesson-comment'>{lessonComment}</p>
                            <p className='lesson-detail lesson-name'>{lessonName}</p>
                            <p className='lesson-detail lesson-status'>{lessonStatus}</p>
                            <p className='lesson-detail lesson-date-time'>{lessonDate} at {lessonTime}</p>
                            <Link href="/"><a>{lessonLink}</a></Link>
                        </div>
                        <div className="lesson-attachment m-2
                            col col-md-4 col-6
                            d-flex flex-column">
                            <h5 className='m-0'>Lesson Attachments</h5>
                            {lessonAttachment.map((att) => 
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
                    <div className="lesson-details-buttons row p-0">
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
                </div> 
            )}
        </>
        )}
    
}