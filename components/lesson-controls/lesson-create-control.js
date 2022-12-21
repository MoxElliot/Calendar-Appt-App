import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addLesson } from '../../redux/slices/lessonDataSlice'
import LessonCreateAttachment from './lesson-create-attachment';
import { clearLessonAttachmentList, toggleAttachClear } from '../../redux/slices/lessonControlSlice';

// const lessonDayArr = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];

export default function LessonCreateControl () {
    const dayjs = require('dayjs')
    const createLesson = useSelector(state => state.lessonControl.createLesson)
    const attachArray = useSelector(state => state.lessonControl.lessonAttachmentList)
  
    const [date, setDate] = useState('');
    const [day, setDay] = useState('');
    const [toggleRepeat, setToggleRepeat] = useState(false)
    const [repeat, setRepeat] = useState(0);
    const [time, setTime] = useState('');
    const [name, setName] = useState('');
    const [detail, setDetail] = useState('');
    const [attachment, setAttachment] = useState([]);
    const [status, setStatus] = useState('Available');
    const [link, setLink] = useState('Discord');
    const [isRepeatChecked, setIsRepeatChecked] = useState(false);
    const [isAvailChecked, setIsAvailChecked] = useState(false);

    const dispatch = useDispatch();

    useEffect(()=>{
        setAttachment(attachArray)
    }, [attachArray])

    
    const onDateChange = e => setDate(e.target.value);
    const onToggleRepeatChange = (e) => {
        setToggleRepeat(!toggleRepeat);
        setIsRepeatChecked(e.target.checked)
        if (toggleRepeat === true) {
            document.getElementById("lessonRepeat").disabled=true;
            // document.getElementById("repeatDaySelect").hidden=true
        } else {
            document.getElementById("lessonRepeat").disabled=false
            // document.getElementById("repeatDaySelect").hidden=false
        }
    }
    const onRepeatChange = e => setRepeat(e.target.value);
    const onTimeChange = e => setTime(e.target.value);
    const onNameChange = e => setName(e.target.value);
    const onDetailChange = e => setDetail(e.target.value);
    const onAttachmentChange = () => setAttachment(lessonAttachmentList);
    const onStatusChange = (e) => {
        setStatus("Booked");
        setIsAvailChecked(e.target.checked);
    }
  
    const onCreateLessonClick = (e) => {
        e.preventDefault();
       
        for (let i = 0; i <= repeat; i++){
        dispatch(
            addLesson({
                id:nanoid(),
                date: date,
                // day,
                // repeat,
                time: time,
                status: status,
                detail: detail,
                attachment: attachment,
                name: name,
                link: link
            })
        )
        const d = 7
        let repeatDate = dayjs(date).add(d, 'd')
        const {$y, $M, $D} = repeatDate
        date =  $y + "-" + ($M+1) +"-" + $D
        }
        
        setDate('')
        setDay('')
        setRepeat(0)
        setTime('')
        setName('')
        setDetail('')
        setAttachment([])
        setStatus('Available')
        setLink('Discord')
        setIsAvailChecked(false);
        setIsRepeatChecked(false);
        dispatch(clearLessonAttachmentList([]))
        dispatch(toggleAttachClear(true))
    }

    if(!createLesson){
        return null;
    } 
    // const lessonDayRadio = lessonDayArr.map((dayOfWeek, i)=> (
    //                 <label 
                        
    //                     className="lesson-control-radio" 
    //                     id="repeatDaySelect"
                        
    //                     key={dayOfWeek.toString()} >
    //                     {dayOfWeek}
    //                     <input 
    //                         type="radio" 
    //                         id="dayRad"
    //                         name="dayRad"
    //                         value={i}
    //                         onChange={onDayChange} 
    //                         />
    //                 </label>
              
    //         ));
    return (
        <div className='lessonCreateContainer container'>
        <div className="lessonControlLeft col mx-2">
            <form id="lessonControlEle" method="post" encType="multipart/form-data">
                <p className="lessonControlP">
                    Set New Lesson Date -or- Select Repeat Option
                </p>
                <p  className="lessonControlP mx-2">Lesson Date</p>
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
            <form 
                id="lessonControlEle"
                >
                <div className='mx-5'>
                    <label className="lessonCheckbox" id="lessonControlP">
                        <input 
                            id="repeatLesson" 
                            name="repeatLesson"
                            checked={isRepeatChecked}
                            value={toggleRepeat}
                            onChange={onToggleRepeatChange}
                            type="checkbox"
                            />
                        <p className='lessonControlP px-2'>Weeks to repeat lesson:</p>
                        <input 
                            disabled
                            size="4"
                            id="lessonRepeat"
                            name="lessonRepeat"
                            value={repeat}
                            onChange={onRepeatChange}
                        />
                    </label>
                </div>
                {/* <div className='mx-5' id="repeatDaySelect" hidden>
                    {lessonDayRadio}
                </div> */}
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
                    <label className="lessonCheckbox" id="lessonControlP">
                        <input 
                            type="checkbox" 
                            id="lessonStatus"
                            name="lessonStatus"
                            checked={isAvailChecked}
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
                    <LessonCreateAttachment
                        onChange={onAttachmentChange}/>
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