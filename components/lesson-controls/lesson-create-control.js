import React, { useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addLesson } from '../../redux/slices/lessonDataSlice'
import LessonCreateAttachment from './lesson-create-attachment';


const lessonDayArr = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
const repeatOptArr = ['None', 'Daily', 'Weekly', 'Monthly'];

export default function LessonCreateControl ({createLesson}) {
    const lessonAttachmentList = useSelector(state => state.lessonControl.lessonAttachmentList)
    if(!createLesson){
        console.log("In LessonCreateControl if", createLesson)
        return null;
    } 

    const [date, setDate] = useState('');
    const [day, setDay] = useState('');
    const [repeat, setRepeat] = useState('');
    const [time, setTime] = useState('');
    const [name, setName] = useState('');
    const [detail, setDetail] = useState('');
    const [attachment, setAttachment] = useState(lessonAttachmentList);
    const [status, setStatus] = useState('Available');
    const [link, setLink] = useState('Discord');

    const dispatch = useDispatch();

    const onDateChange = e => setDate(e.target.value);
    const onDayChange = e => setDay(e.target.value);
    const onRepeatChange = e => setRepeat(e.target.value);
    const onTimeChange = e => setTime(e.target.value);
    const onNameChange = e => setName(e.target.value);
    const onDetailChange = e => setDetail(e.target.value);
    const onAttachmentChange = e => setAttachment(e.target.value);
    const onStatusChange = e => setStatus("Booked");
   // const onLinkChange = e => setLink("Discord");

    const onCreateLessonClick = (e) => {
        e.preventDefault();
        console.log("in onCreateLessonClick")
        dispatch(
            addLesson({
                id:nanoid(),
                date,
                day,
                repeat,
                time,
                name,
                detail,
                attachment,
                status,
                link
            })
        )
        setDate('')
        setDay('')
        setRepeat('')
        setTime('')
        setName('')
        setDetail('')
        setAttachment('')
        setStatus('')
        setLink('')
    }


    const lessonDayRadio = lessonDayArr.map(dayOfWeek=> (
                    <label className="lesson-control-radio" key={dayOfWeek.toString()} >
                        {dayOfWeek}
                        <input 
                            type="radio" 
                            id="dayRad"
                            name="dayRad"
                            value={day}
                            onChange={onDayChange} 
                            />
                    </label>
              
            ));

    const repeatOptRadio = repeatOptArr.map(option=> (
                    <label className="lesson-control-radio" key={option.toString()} >
                        {option}
                        <input 
                            type="radio" 
                            id="repeatRad"
                            name="repeatRad"
                            value={repeat}
                            onChange={onRepeatChange} 
                            />
                    </label>
                
            ));
    return (
        <div className='lessonCreateContainer container'>
        <div className="lessonControlLeft col mx-2">
            <form id="lessonControlEle">
                <p className="lessonControlP">
                    Set New Lesson Date -or- Select Repeat Options
                </p>
                <p  className="lessonControlP mx-2">New Single Lesson</p>
                <div className='lesson-date-input mx-5
                    container 
                    d-flex-column justify-content-center align-items-center'>
                    <div className="row w-50" >        
                    <input 
                        type="date" 
                        name="lesson-date"
                        id="lesson-date"
                        value={date}
                        onChange={onDateChange} 
                        />
                    </div>
                    
                </div>
            </form>
            <form id="lessonControlEle">
                <p  className="lessonControlP mx-2">New Repeating Lesson</p>
                <div className='mx-5'>
                    {repeatOptRadio}
                </div>
                <div className='mx-5'>
                    {lessonDayRadio}
                </div>
            </form>
            
            <div className="lessonControlBottom row">
            <form className='col-6'>
                <p className="lessonControlP ">
                    Set New Lesson Time
                </p>
                <div className='lesson-time-input 
                    container mx-3
                    d-flex-column justify-content-center align-items-center'>
                    <div className="row w-50" >        
                    <input 
                        type="time" 
                        name="lesson-time"
                        id="lesson-time"
                        value={time}
                        onChange={onTimeChange} 
                        />
                    </div>
                </div>
            </form>
                <form className="lessonControlEle col-4" > 
                    <label className="studentSelect" id="lessonControlP">
                        <input 
                            type="checkbox" 
                            id="lessonStatus"
                            name="lessonStatus"
                            value={status}
                            onChange={onStatusChange}
                            />
                        <p className='lessonControlP'>Only Available to:</p>
                    </label>
                        <input 
                            type="text" 
                            placeholder='Student Name'
                            id="studentName"
                            name="studentName"
                            className='studentName mx-3'
                            value={name}
                            onChange={onNameChange}
                            />
                </form>
                
            </div>
        </div>
        <div className='lessonControlRight col col-5'>
            <div className=' container'>
            <form className='lessonControlDetail'>
                <p className='lessonControlP'>Lesson Details</p>
                <textarea 
                    rows="3"
                    cols="30"
                    name="lessonDetail"
                    value={detail}
                    onChange={onDetailChange}
                />
            </form>
                <div className='row'>
                    <LessonCreateAttachment />
                    <form className="lessonControlBtn col">
                        <button 
                            className='btn btn-primary'
                            id="lessonSubmit"
                            name="lessonSubmit"
                            onClick={onCreateLessonClick}
                        >
                            Create Lessson
                        </button>
                    </form>
                </div>
            </div>
        </div>
        </div>
    )
}